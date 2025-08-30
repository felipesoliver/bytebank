import React from 'react'

import Loan from '@/assets/icons/loan.svg'
import Card from '@/assets/icons/card.svg'
import Donation from '@/assets/icons/donation.svg'
import Pix from '@/assets/icons/pix.svg'
import Insurance from '@/assets/icons/insurance.svg'
import CellPhone from '@/assets/icons/cell-phone.svg'

type SVGProps = React.SVGProps<SVGSVGElement>

const SERVICES_ICONS: Partial<Record<string, React.FC<SVGProps>>> = {
  loan: Loan,
  card: Card,
  donation: Donation,
  pix: Pix,
  insurance: Insurance,
  cellphone: CellPhone,
}

type Properties = {
  type: string
} & React.SVGProps<SVGSVGElement>

function ServicesSvgSelector({ type, ...rest }: Properties) {
  const Icon = SERVICES_ICONS[type]

  if (!Icon) {
    return
  }

  return <Icon {...rest} />
}

export default ServicesSvgSelector
