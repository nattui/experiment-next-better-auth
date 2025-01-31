import type { PropsWithChildren } from "react"
import Navbar from "@/app/navbar"

export default function ShellMarketing({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
