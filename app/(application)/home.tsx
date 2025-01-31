import ApplicationShell from "@/app/(application)/shell"

export default function ApplicationHomePage() {
  return (
    <ApplicationShell>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-20">Application Home</h1>
      </div>
    </ApplicationShell>
  )
}
