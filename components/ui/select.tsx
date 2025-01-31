import type { ComponentProps, JSX } from "react"
import { inputStyles } from "@/components/ui/input"
import { CaretDown } from "@phosphor-icons/react"

export interface SelectProps extends ComponentProps<"select"> {}

export default function Select(props: SelectProps): JSX.Element {
  const { children, className: customStyles = "", ...rest } = props

  const combinedStyles = `
    ${inputStyles.base}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <div className="relative">
      <select className={combinedStyles} {...rest}>
        {children}
      </select>
      <CaretDown className="absolute top-12 right-12" size={16} />
    </div>
  )
}
