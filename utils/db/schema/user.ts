import {
  date,
  integer,
  numeric,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const usersTable = pgTable("users", {
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  email: varchar("email", { length: 100 }).unique().notNull(),
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  username: varchar("username", { length: 32 }).unique().notNull(),
})

export const userProfileTable = pgTable("user_profile", {
  birthday: date("birthday"),
  country: varchar("country", { length: 32 }),
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .unique()
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
})

// ========================================================
// Authentication
// ========================================================

export const providerEnum = pgEnum("provider", ["credentials", "social"])

export const authProvidersTable = pgTable("auth_providers", {
  id: serial("id").primaryKey(),
  provider: providerEnum().notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
})

export const authCredentialsTable = pgTable("auth_credentials", {
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  hashPassword: text("hash_password").notNull(),
  id: serial("id").primaryKey(),
  providerId: integer("provider_id")
    .notNull()
    .references(() => authProvidersTable.id, { onDelete: "cascade" }),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
})

export const socialEnum = pgEnum("social", ["google", "facebook", "github"])

export const authSocialTable = pgTable("auth_social", {
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  id: serial("id").primaryKey(),
  providerId: integer("provider_id")
    .notNull()
    .references(() => authProvidersTable.id, { onDelete: "cascade" }),
  social: socialEnum().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
})

// ========================================================
// Life expectancy
// ========================================================

export const lifeExpectancyTable = pgTable("life_expectancy", {
  age: numeric("age").notNull(),
  country: varchar("country", { length: 32 }).notNull().primaryKey(),
})

// ========================================================
// Types
// ========================================================

export type AuthCredentials = typeof authCredentialsTable.$inferSelect
export type AuthProvider = typeof authProvidersTable.$inferSelect
export type AuthSocial = typeof authSocialTable.$inferSelect
export type LifeExpectancy = typeof lifeExpectancyTable.$inferSelect
export type User = typeof usersTable.$inferSelect
export type UserProfile = typeof userProfileTable.$inferSelect
