'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import { headerData } from '@/data/global-data'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

const AsideNav = () => {
  const {loggedInMenu} = headerData
  const router = usePathname()

  return (
    <aside className='hidden md:block lg:col-span-2 rounded-lg lg:bg-white'>
      <nav className='lg:flex lg:justify-center'>
        <ul className='flex items-center lg:flex-col justify-between lg:justify-start lg:w-fit py-4'>
          {loggedInMenu.map((item, index) => (
            <li
              key={`item-${index}`}
              className={
                twMerge(
                  'border-b lg:not-last:border-b hover:border-green hover:text-green min-w-28 font-medium',
                  router === item.url ? 'border-green text-green font-bold' : 'border-transparent lg:border-black',
                )
              }
            >
              {item.mf ? (
                <a
                  href={item.url}
                  target={item.blank ? '_blank' : '_self'}
                  className='block text-center py-4'
                  aria-label={`Navegar para ${item.text}`}
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  href={item.url}
                  target={item.blank ? '_blank' : '_self'}
                  className='block text-center py-4'
                  aria-label={`Navegar para ${item.text}`}
                  passHref
                >
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default AsideNav
