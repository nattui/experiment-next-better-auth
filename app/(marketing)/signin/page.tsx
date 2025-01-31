import SignInForm from "@/app/(marketing)/signin/form"
import { auth } from "@/utils/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function SignInPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session) redirect("/")

  return (
    <div className="mx-auto flex h-screen w-full max-w-256 flex-col items-center justify-center">
      <h1 className="text-20 mb-8">Sign in</h1>
      <SignInForm />
    </div>
  )
}
