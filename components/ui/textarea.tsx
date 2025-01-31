import type { ComponentProps, JSX } from "react"
import { inputStyles } from "@/components/ui/input"

export interface TextareaProps extends ComponentProps<"textarea"> {}

const textareaStyles = {
  base: ["py-8"].join(" "),
  disabled: "resize-none",
}

export default function Textarea(props: TextareaProps): JSX.Element {
  const {
    className: customStyles = "",
    disabled = false,
    rows = 3,
    ...rest
  } = props

  const combinedStyles = `
    ${textareaStyles.base}
    ${disabled ? textareaStyles.disabled : ""}
    ${inputStyles.base}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <textarea
      className={combinedStyles}
      disabled={disabled}
      rows={rows}
      style={{ minHeight: `${21 * rows + 19}px` }}
      {...rest}
    />
  )
}
