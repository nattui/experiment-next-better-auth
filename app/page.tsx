"use client"

import Button from "@/components/ui/button"

export default function RootPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Button>Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="ghost">Click me</Button>
    </div>
  )
}
