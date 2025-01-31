import type { PropsWithChildren } from "react"
import ShellMarketing from "@/app/(marketing)/shell"

export default function MarketingLayout({ children }: PropsWithChildren) {
  return <ShellMarketing>{children}</ShellMarketing>
}
