import { Metadata } from "next"
import InvestmentsLayout from "./investments-layout"

export const metadata: Metadata = {
  title: "Bytebank | Investments",
}

export const dynamic = 'force-dynamic'

export default function InvestmentsPage() {
  return (
    <InvestmentsLayout />
  )
}
