"use client"

import Button from "@/components/ui/button"
import { authClient } from "@/utils/auth/auth-client"

export default function RootPage() {
  async function signUp() {
    await authClient.signUp.email(
      {
        email: "test@example.com",
        name: "First Last",
        password: "12345678",
      },
      {
        onError: (context) => {
          alert(context.error.message)
        },
        onRequest: () => {
          // show loading
        },
        onSuccess: () => {
          // redirect to the dashboard
        },
      },
    )
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-20 mb-8">Sign up</h1>
      <Button onClick={signUp}>Click me</Button>
    </div>
  )
}
