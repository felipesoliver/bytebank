import { Metadata } from 'next'
import Services from '@/layouts/blocks/services'
import DashboardHero from '@/layouts/blocks/dashboard-hero'
import AsideNav from '@/layouts/blocks/aside-nav'
import BankStatement from '@/layouts/blocks/bank-statement'

export const metadata: Metadata = {
  title: "Bytebank | Services",
}

export default function ServicesPage() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
      <AsideNav />
      <div className="lg:col-span-7 flex flex-col gap-5">
        <DashboardHero />
        <Services />
      </div>
      <BankStatement />
    </div>
  )
}
