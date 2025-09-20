import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const isAuth = Boolean(token);

  const pathname = req.nextUrl.pathname;

  const publicRoutes = ['/']; // só a página inicial é pública

  if (publicRoutes.includes(pathname)) {
    if (isAuth) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    return NextResponse.next();
  }

  if (!isAuth) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // usuário autenticado e rota privada → deixa passar
  return NextResponse.next();
}

// matcher: aplica o middleware em todas as rotas da app, exceto rotas internas (_next, api, favicon)
export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
