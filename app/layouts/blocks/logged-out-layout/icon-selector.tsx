import React, { FC } from 'react'

import { camelize } from '@/utils/camelize'

import Box from '@/assets/icons/gift-box.svg'
import Money from '@/assets/icons/money.svg'
import Star from '@/assets/icons/star.svg'
import Devices from '@/assets/icons/devices.svg'

interface Properties extends React.SVGProps<SVGSVGElement> {
  type: string
  className?: string
}

const IconSelector: FC<Properties> = ({
  type = '',
  className = '',
  ...properties
}) => {
  if (!type) return null

  const Icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Box,
    Money,
    Star,
    Devices
  }

  const iconParsedType = camelize(type)

  const iconType =
    iconParsedType.charAt(0).toUpperCase() + iconParsedType.slice(1)

  const Icon = Icons[iconType]

  if (!Icon) {
    console.error(`${iconType} is not a valid icon type`)
    return null
  }

  return <Icon className={className} {...properties} />
}

export default IconSelector
