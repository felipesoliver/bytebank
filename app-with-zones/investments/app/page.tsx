import { Metadata } from "next"
import InvestmentsLayout from "./investments-layout"

export const metadata: Metadata = {
  title: "Bytebank | Investments",
}

export default function InvestmentsPage() {
  return (
    <InvestmentsLayout />
  )
}
