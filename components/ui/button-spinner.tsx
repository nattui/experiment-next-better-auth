import type { JSX } from "react"
import styles from "@/components/ui/button-spinner.module.css"

export default function ButtonSpinner(): JSX.Element {
  return (
    <div className={styles.base}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}
