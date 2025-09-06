import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  className?: string
  isMenuActive: boolean
  setIsMenuActive: (value: boolean) => void
}

const Hamburger: React.FC<Props> = ({
  className,
  isMenuActive,
  setIsMenuActive,
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        'hamburger hamburger--squeeze flex lg:hidden items-center justify-center sticky top-8 left-0 transition-all duration-300',
        isMenuActive && 'is-active',
        className
      )}
      onClick={() => setIsMenuActive(!isMenuActive)}
      aria-label={isMenuActive ? 'Fechar menu' : 'Abrir menu'}
    >
      <span className="sr-only">{isMenuActive ? 'Fechar menu' : 'Abrir menu'}</span>
      <div className="hamburger-box">
        <div className="hamburger-inner duration-500 transition-colors text-current" />
      </div>
    </button>
  )
}

export default Hamburger
