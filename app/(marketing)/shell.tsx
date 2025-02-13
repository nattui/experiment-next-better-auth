import type { PropsWithChildren } from "react"
import Navbar from "@/components/navbar"

export default function MarketingShell({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
