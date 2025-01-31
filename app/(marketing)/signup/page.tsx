import SignUpForm from "@/app/(marketing)/signup/form"
import { auth } from "@/utils/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function SignUpPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session) redirect("/")

  return (
    <div className="mx-auto flex h-screen w-full max-w-256 flex-col items-center justify-center">
      <h1 className="text-20 mb-8">Create an account</h1>
      <SignUpForm />
    </div>
  )
}
