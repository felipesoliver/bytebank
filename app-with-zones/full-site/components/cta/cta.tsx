import { ICta } from '@/types/types'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const ctaVariants = tv({
  base: 'px-5 py-3 border-2 rounded-lg text-base transition-colors duration-300 font-semibold',
  variants: {
    variant: {
      green: 'bg-green text-white border-green hover:bg-transparent hover:text-green',
      'green-inverted': 'bg-transparent text-green border-green hover:bg-green hover:text-white',
      orange: 'bg-orange text-white border-orange hover:bg-transparent hover:text-orange',
      'orange-inverted': 'bg-tranparent text-orange border-orange hover:bg-orange hover:text-white',
      black: 'bg-black text-white border-black hover:bg-transparent hover:text-black',
      'black-inverted': 'bg-transparent text-black border-black hover:bg-black hover:text-white',
    }
  }
})

interface ICtaProperties extends ICta,
React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
}

const Cta: React.FC<ICtaProperties> = ({className = '', text, variant = 'green', onClick, ...props}) => {
  return (
    <button
      className={twMerge( className, ctaVariants({variant}))}
      aria-label={props['aria-label'] || text}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  )
}

export default Cta
