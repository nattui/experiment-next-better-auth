"use client"

import ButtonSignOut from "@/app/button-sign-out"
import { authClient } from "@/utils/auth/auth-client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession()

  const pathname = usePathname()

  return (
    <div className="absolute top-0 flex h-144 items-center gap-x-16 px-64">
      <Link
        className="font-500 data-[active=true]:text-primary-a11 hover:underline data-[active=true]:underline"
        data-active={pathname === "/"}
        href="/"
      >
        Root
      </Link>
      <Link
        className="font-500 data-[active=true]:text-primary-a11 hover:underline data-[active=true]:underline"
        data-active={pathname === "/home"}
        href="/home"
      >
        Home
      </Link>

      {!isPending && (
        <div className="flex items-center gap-x-16">
          {session ? (
            <ButtonSignOut />
          ) : (
            <>
              <Link
                className="font-500 data-[active=true]:text-primary-a11 hover:underline data-[active=true]:underline"
                data-active={pathname === "/signin"}
                href="/signin"
              >
                Sign in
              </Link>
              <Link
                className="font-500 data-[active=true]:text-primary-a11 hover:underline data-[active=true]:underline"
                data-active={pathname === "/signup"}
                href="/signup"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}
