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
          alert(context.error.message)
          setIsLoading(false)
        },
        onRequest: () => {
          setIsLoading(true)
        },
        onSuccess: () => {
          router.push("/")
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
