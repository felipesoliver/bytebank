import '@/styles/globals.css';

import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/layouts/structure/header';
import Footer from '@/layouts/structure/footer';
import Modal from '@/components/modal';
import ReduxProvider from './redux-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge('font-inter', inter.className)}>
        <ReduxProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Modal />
          <ToastContainer position="top-right" autoClose={3000} />
        </ReduxProvider>
      </body>
    </html>
  );
}
