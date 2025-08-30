import { NextSeo } from "next-seo"
import AsideNav from "@/layouts/blocks/aside-nav"
import useStateController from "@/hooks/use-state-controller"
import Crud from "@/layouts/blocks/crud"

export default function TransfersPage() {
  const {authStatus, refreshExtract} = useStateController()

  return (
    <>
      <NextSeo title="Bytebank | Transfers" />
      {authStatus && (
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
          <AsideNav />
          <div className="lg:col-span-10">
            <Crud key={refreshExtract} />
          </div>
        </div>
      )}
    </>
  )
}
