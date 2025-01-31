"use client"

import Button from "@/components/ui/button"
import { authClient } from "@/utils/auth/auth-client"
import { useState } from "react"

export default function RootPage() {
  const [isLoading, setIsLoading] = useState(false)

  async function signUp() {
    setIsLoading(true)
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
    setIsLoading(false)
  }

  return (
    <div className="mx-auto flex h-screen w-full max-w-256 flex-col items-center justify-center">
      <h1 className="text-20 mb-8">Create an account</h1>
      <Button
        fullWidth
        isLoading={isLoading}
        onClick={signUp}
        size="extraLarge"
      >
        Sign up
      </Button>
    </div>
  )
}
