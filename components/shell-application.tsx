import type { PropsWithChildren } from "react"
import Navbar from "@/components/navbar"

export default function ShellApplication({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
