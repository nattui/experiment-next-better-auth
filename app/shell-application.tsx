import type { PropsWithChildren } from "react"
import Navbar from "@/app/navbar"

export default function ShellApplication({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
