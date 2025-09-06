import { Metadata } from "next"
import Homepagelayout from "./homepage-layout"

export const metadata: Metadata = {
  title: "Bytebank | Homepage",
}

export default function Home() {
  return (
    <Homepagelayout />
  )
}
