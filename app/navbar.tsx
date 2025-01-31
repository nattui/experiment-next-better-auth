"use client"

import ButtonSignOut from "@/app/button-sign-out"
import { authClient } from "@/utils/auth/auth-client"
import Link from "next/link"

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession()

  return (
    <div className="absolute top-0 flex h-144 items-center gap-x-16 px-64">
      <Link className="font-500 hover:underline" href="/">
        Home
      </Link>

      {!isPending && (
        <div className="flex items-center gap-x-16">
          {session ? (
            <ButtonSignOut />
          ) : (
            <>
              <Link className="font-500 hover:underline" href="/signin">
                Sign in
              </Link>
              <Link className="font-500 hover:underline" href="/signup">
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}
