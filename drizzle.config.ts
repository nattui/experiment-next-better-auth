// ====================================================== /
// :: Notes ::
// pnpm run db:generate
// pnpm run db:migrate
// ====================================================== /

import { defineConfig } from "drizzle-kit"

if (!process.env.DATABASE_URL) {
  throw new Error("`DATABASE_URL` environment variable is required.")
}

export default defineConfig({
  dbCredentials: { url: process.env.DATABASE_URL },
  dialect: "postgresql",
  out: "./utils/db/migrations",
  schema: "./utils/db/schema",
})
