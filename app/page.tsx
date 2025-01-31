import HomeApplicationPage from "@/app/(application)/home-application"
import HomeMarketingPage from "@/app/(marketing)/home-marketing"
import { auth } from "@/utils/auth"
import { headers } from "next/headers"

export default async function RootPage() {
  const session = await auth.api.getSession({ headers: await headers() })

  return session ? <HomeApplicationPage /> : <HomeMarketingPage />
}
