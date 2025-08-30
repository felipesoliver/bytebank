import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { headerData } from '@/data/global-data'
import { twMerge } from 'tailwind-merge'

const AsideNav = () => {
  const {loggedInMenu} = headerData
  const router = useRouter()

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
                  router.pathname === item.url ? 'border-green text-green font-bold' : 'border-transparent lg:border-black',
                )
              }
            >
               <Link href={item.url}
                target={item.blank ? '_blank' : '_self'}
                className='block text-center py-4'
                aria-label={`Navegar para ${item.text}`}

              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default AsideNav
