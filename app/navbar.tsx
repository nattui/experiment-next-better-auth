"use client"
import ButtonSignOut from "@/app/button-sign-out"
import { authClient } from "@/utils/auth/auth-client"
import Link from "next/link"

export default function Navbar() {
  const { data: session } = authClient.useSession()

  return (
    <div className="flex items-center gap-x-8 p-64">
      <Link className="font-500 hover:underline" href="/">
        Home
      </Link>
      {!session && (
        <>
          <Link className="font-500 hover:underline" href="/signin">
            Sign in
          </Link>
          <Link className="font-500 hover:underline" href="/signup">
            Sign up
          </Link>
        </>
      )}
      {session && <ButtonSignOut />}
    </div>
  )
}
