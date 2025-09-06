import React from 'react'
import { headerData, loggedOutData } from '@/data/global-data'

import LoggedOutImage from '@/assets/images/logged-out-image.svg'
import Cta from '../../../components/cta'
import useStateController from '@/hooks/use-state-controller'
import { IMenu } from '@/layouts/structure/header/header'
import IconSelector from './icon-selector'

interface IFeature {
  icon: 'box' | 'money' | 'star' | 'devices'
  title: string
  description: string
}

interface ILoggedOutProps {
  description: string
  subtitle: string
  features: IFeature[]
}

export const LoggedOutLayout = () => {
  const {description, features, subtitle} = loggedOutData as ILoggedOutProps
  const {loginCta, subscribeCta} = headerData as IMenu
  const {setIsAuthModalOpen, setCurrentAuthModal} = useStateController()

  return (
    <section>
      <div id='about' className='grid grid-cols-1 lg:grid-cols-12 gap-y-10 gap-x-5'>
        <div className='lg:col-span-5 flex items-center justify-center'>
          <h1 className='max-w-[27.125rem] !leading-tight font-semibold text-black text-center lg:text-left text-[1.5625rem] md:text-[1.75rem]'>{description}</h1>
        </div>
        <picture className='block lg:col-span-7'>
          <LoggedOutImage className='w-full h-auto object-contain' />
        </picture>
      </div>
      <div id='services' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 pb-20 lg:pb-24'>
        <div className='flex md:hidden items-center justify-center gap-6' >
          <Cta
            {...subscribeCta}
            variant='black'
            onClick={() => {
              setIsAuthModalOpen(true)
              setCurrentAuthModal('subscribe')
            }}
          />
          <Cta
            {...loginCta}
            variant='black-inverted'
            onClick={() => {
              setIsAuthModalOpen(true)
              setCurrentAuthModal('login')
            }}
          />
        </div>
        <h2 className='col-span-full text-center text-xl md:text-[1.5625rem] text-black font-semibold'>{subtitle}</h2>
        {features.map((feature, index) => (
          <div className='flex flex-col items-center gap-4 text-center' key={`feature-${index}`}>
            <IconSelector type={feature.icon} className='w-[4.625rem] h-auto' />
            <h3 className='text-xl text-green font-semibold'>{feature.title}</h3>
            <p className='text-gray-dark leading-tight'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LoggedOutLayout
