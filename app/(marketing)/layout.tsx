"use client"

import type { PropsWithChildren } from "react"
import ShellMarketing from "@/app/shell-marketing"

export default function RootLayout({ children }: PropsWithChildren) {
  return <ShellMarketing>{children}</ShellMarketing>
}
