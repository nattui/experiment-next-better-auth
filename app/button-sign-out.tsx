"use client"

import Button from "@/components/ui/button"
import { authClient } from "@/utils/auth/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ButtonSignOut() {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onError: (context) => {
          setIsLoading(false)
          alert(context.error.message)
        },
        onRequest: () => {
          setIsLoading(true)
        },
        onSuccess: () => {
          router.push("/signin")
        },
      },
    })
  }

  return (
    <Button isLoading={isLoading} onClick={signOut} variant="secondary">
      Sign out
    </Button>
  )
}
