import { Metadata } from 'next'
import ServicesLayout from './services-layout'

export const metadata: Metadata = {
  title: "Bytebank | Services",
}

export default function ServicesPage() {
  return (
    <ServicesLayout />
  )
}
