import { ICommonLink, ISocialLink } from '@/types/types'
import React from 'react'
import Link from 'next/link'

import Logo from '@/assets/icons/logo.svg'

import Socials from './socials'
import { footerData } from '@/data/global-data'

interface IFooterMenu {
  servicesTitle: string
  servicesLinks: ICommonLink[]
  contactTitle: string
  contactLinks: ICommonLink[]
  copyrightTitle: string
  socialsLinks: ISocialLink[]
}

const Footer = () => {
  const {
    contactLinks,
    contactTitle,
    copyrightTitle,
    servicesLinks,
    servicesTitle,
    socialsLinks
  } = footerData as IFooterMenu

  return (
    <footer className='py-[3.25rem] bg-black flex items-center justify-center'>
      <div className='container grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-8 md:gap-5 text-white'>
        <ul className='md:col-span-2 lg:col-span-4 flex flex-col gap-4'>
          <li>
            <span className='font-bold'>{servicesTitle}</span>
          </li>
          {servicesLinks.map((serviceLink, index) => (
            <li key={`service-link-${index}`}>
              <Link
                href={serviceLink.url}
                target={serviceLink.blank ? '_blank' : '_self'}
                className='block translate-x-0 hover:translate-x-3 transition-all duration-200 w-fit font-light'
              >
                <span className="sr-only">Ir para {serviceLink.text}</span>
                {serviceLink.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='md:col-span-3 lg:col-span-3 flex flex-col gap-4'>
          <li>
            <span className='font-bold'>{contactTitle}</span>
          </li>
          {contactLinks.map((contactLink, index) => (
            <li key={`contact-link-${index}`}>
              <Link
                href={contactLink.url}
                target={contactLink.blank ? '_blank' : '_self'}
                className='block translate-x-0 hover:translate-x-3 transition-all duration-200 w-fit font-light'
              >
                <span className="sr-only">Ir para {contactLink.text}</span>
                {contactLink.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='md:col-span-3 lg:col-start-10 flex flex-col lg:items-center gap-4 lg:gap-6'>
          <li className='w-fit'>
            <span className='font-bold'>{copyrightTitle}</span>
          </li>
          <li className='w-fit'>
            <Link href='/' target='_self' className='opacity-100 hover:opacity-70 transition-opacity duration-200'>
              <span className="sr-only">Ir para a página inicial</span>
              <Logo className='w-[9.125rem] h-8' />
            </Link>
          </li>
          <li>
            <Socials data={socialsLinks} />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
