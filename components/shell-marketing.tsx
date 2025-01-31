import type { PropsWithChildren } from "react"
import Navbar from "@/components/navbar"

export default function ShellMarketing({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
