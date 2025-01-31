import { FlatCompat } from "@eslint/eslintrc"
import perfectionist from "eslint-plugin-perfectionist"
import unicorn from "eslint-plugin-unicorn"
import unusedImports from "eslint-plugin-unused-imports"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  }),
  {
    plugins: {
      perfectionist,
      unicorn,
      "unused-imports": unusedImports,
    },
    rules: {
      ...perfectionist.configs["recommended-natural"].rules,
      ...unicorn.configs["flat/all"].rules,
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "with-single-extends" },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          newlinesBetween: "never",
          sortSideEffects: true,
        },
      ],
      "unicorn/consistent-function-scoping": "off",
      "unicorn/import-style": "off",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/prevent-abbreviations": "off",
      "unused-imports/no-unused-imports": "error",
    },
  },
]

export default eslintConfig
