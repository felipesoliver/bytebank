'use client'

import { ICta, ICommonLink } from '@/types/types'
import React, { useCallback, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import NavMenu from './nav-menu'
import Hamburger from './hamburger'
import { getScrollPosition } from '@/utils/scroll-position'

export interface IMenu {
  loggedOutMenu: ICommonLink[]
  loggedInMenu: ICommonLink[]
  loginCta: ICta
  subscribeCta: ICta
  profileMenu: ICommonLink[]
  username: string
}

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  const [isProfileMenuActive, setIsProfileMenuActive] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const closeMenu = useCallback(() => {
    setIsMenuActive(false)
  }, [])

  const openProfileMenu = useCallback(() => {
    setIsProfileMenuActive(true)
  }, [])

  const closeProfileMenu = useCallback(() => {
    setIsProfileMenuActive(false)
  }, [])

  useEffect(() => {
    getScrollPosition((scrollPosition) => {
      setIsScrolled(scrollPosition > 0)
    })
  }, [])

  return (
    <header
      className={twMerge(
        'sticky top-0 left-0 z-50 flex items-center justify-center transition-all duration-300 text-white bg-green-dark',
        isScrolled ? 'h-20' : 'h-24'
      )}
    >
      <div className='relative container flex items-center justify-between md:gap-14 lg:gap-[4.5rem]'>
        <Hamburger
          setIsMenuActive={setIsMenuActive}
          isMenuActive={isMenuActive}
          className='md:hidden'
        />
        <NavMenu
          closeMenu={closeMenu}
          closeProfileMenu={closeProfileMenu}
          isMenuActive={isMenuActive}
          isProfileMenuActive={isProfileMenuActive}
          openProfileMenu={openProfileMenu}
        />
      </div>
    </header>
  )
}

export default Header
