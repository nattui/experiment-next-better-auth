import ApplicationHomePage from "@/app/(application)/home"
import MarketingHomePage from "@/app/(marketing)/home"
import { auth } from "@/utils/auth"
import { headers } from "next/headers"

export default async function RootPage() {
  const session = await auth.api.getSession({ headers: await headers() })

  return session ? <ApplicationHomePage /> : <MarketingHomePage />
}
