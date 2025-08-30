import Modal from "@/components/modal"
import StateControllerProvider from "@/contexts/state-controller"
import Footer from "@/layouts/structure/footer"
import Header from "@/layouts/structure/header"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Inter } from "next/font/google"
import { twMerge } from "tailwind-merge"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={twMerge('font-inter', inter.className)}>
      <StateControllerProvider>
        <Header />
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
        <Footer />
        <Modal />
        <ToastContainer position="top-right" autoClose={3000} />
      </StateControllerProvider>
    </div>
  )
}
