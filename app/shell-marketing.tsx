import type { PropsWithChildren } from "react"
import Navbar from "./(root)/navbar"

export default function ShellMarketing({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
