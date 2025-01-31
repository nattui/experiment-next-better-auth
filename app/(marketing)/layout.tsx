import type { PropsWithChildren } from "react"
import ShellMarketing from "@/app/shell-marketing"

export default function MarketingLayout({ children }: PropsWithChildren) {
  return <ShellMarketing>{children}</ShellMarketing>
}
