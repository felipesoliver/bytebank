import { notFoundData } from "@/data/global-data"
import { ICommonLink } from "@/types/types"

import NotFoundImage from '@/assets/images/404.svg'
import Link from "next/link"
import { Metadata } from "next"

interface INotFound {
  title: string
  description: string
  cta: ICommonLink
}

export const metadata: Metadata = {
  title: "Page Not Found",
}

export default function NotFoundPage() {
  const {cta, description, title} = notFoundData as INotFound

  return (
    <>
      <div className="w-screen h-screen py-10 bg-gradient-to-b from-green-dark to-white">
        <div className="container flex flex-col items-center gap-5 text-black text-center">
          <h1 className="text-[1.5625rem] font-bold">{title}</h1>
          <p className="max-w-[27.75rem]">{description}</p>
          <Link
            href={cta.url}
            target={cta.blank ? '_blank' : '_self'}
            className="px-2 py-3 bg-orange text-white hover:bg-green-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            aria-label={`${cta.text} - ${cta.blank ? 'abre em nova aba' : ''}`}
          >
            {cta.text}
          </Link>
          <NotFoundImage className='w-full md:w-[29.375rem] h-auto md:h-[22.125rem] pt-3' aria-hidden="true" />
          <Link
            href='/'
            target='_self'
            className='opacity-100 hover:opacity-70 transition-opacity duration-200'
            aria-label="Voltar para a página inicial"
          >
          </Link>
        </div>
      </div>
    </>
  )
}
