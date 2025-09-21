import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const isAuth = Boolean(token);
  const pathname = req.nextUrl.pathname;
  const publicRoutes = ['/', '/login', '/signup'];

  if (isAuth && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (!isAuth && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|\\.well-known).*)'], // aplica em todas rotas exceto _next/api
};
