"use client"

import Button from "@/components/ui/button"
import { authClient } from "@/utils/auth/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function signIn() {
    await authClient.signIn.email(
      {
        email: "test@example.com",
        password: "12345678",
      },
      {
        onError: (context) => {
          setIsLoading(false)
          alert(context.error.message)
        },
        onRequest: () => {
          setIsLoading(true)
        },
        onSuccess: () => {
          router.refresh()
        },
      },
    )
  }

  return (
    <Button
      fullWidth
      isLoading={isLoading}
      onClick={signIn}
      size="extraLarge"
      variant="accent"
    >
      Sign in
    </Button>
  )
}
