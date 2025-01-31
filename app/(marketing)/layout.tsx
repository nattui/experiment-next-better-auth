import type { PropsWithChildren } from "react"
import ShellMarketing from "@/components/shell-marketing"

export default function MarketingLayout({ children }: PropsWithChildren) {
  return <ShellMarketing>{children}</ShellMarketing>
}
