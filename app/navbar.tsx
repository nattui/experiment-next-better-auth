import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex gap-x-8">
      <Link className="font-500 hover:underline" href="/">
        Home
      </Link>
      <Link className="font-500 hover:underline" href="/signin">
        Sign in
      </Link>
    </div>
  )
}
