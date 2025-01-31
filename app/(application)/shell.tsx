import type { PropsWithChildren } from "react"
import Navbar from "@/components/navbar"

export default function ApplicationShell({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
