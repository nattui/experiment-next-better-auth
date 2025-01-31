"use client"

import Button from "@/components/ui/button"
import { authClient } from "@/utils/auth/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

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
          setIsLoading(false)
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
      onClick={signUp}
      size="extraLarge"
      variant="accent"
    >
      Sign up
    </Button>
  )
}
