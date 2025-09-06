import { Metadata } from "next"
import AccountLayout from "./account-layout";

export const metadata: Metadata = {
  title: "Bytebank | Account",
}

export default function AccountPage() {
  return (
    <AccountLayout />
  )
}
