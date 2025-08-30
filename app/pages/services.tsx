import Services from '@/layouts/blocks/services'
import DashboardHero from '@/layouts/blocks/dashboard-hero'
import { NextSeo } from 'next-seo'
import AsideNav from '@/layouts/blocks/aside-nav'
import BankStatement from '@/layouts/blocks/bank-statement'
import useStateController from '@/hooks/use-state-controller'

export default function ServicesPage() {
  const {authStatus} = useStateController()

  return (
    <>
      <NextSeo title="Bytebank | Services" />
      {authStatus && (
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
          <AsideNav />
          <div className="lg:col-span-7 flex flex-col gap-5">
            <DashboardHero />
            <Services />
          </div>
          <BankStatement />
        </div>
      )}
    </>
  )
}
