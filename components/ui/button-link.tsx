import type { JSX } from "react"
import type { ComponentProps } from "react"
import { type ButtonProps, buttonStyles } from "@/components/ui/button"
import Link from "next/link"

export interface ButtonLinkProps extends ComponentProps<typeof Link> {
  children?: ButtonProps["children"]
  fullWidth?: ButtonProps["fullWidth"]
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
}

export default function ButtonLink(props: ButtonLinkProps): JSX.Element {
  const {
    children = "",
    className: customStyles = "",
    fullWidth = false,
    size = "medium",
    variant = "primary",
    ...rest
  } = props

  const combinedStyles = `
    ${buttonStyles.base}
    ${buttonStyles.size[size]}
    ${buttonStyles.variant[variant]}
    ${fullWidth ? buttonStyles.width.full : buttonStyles.width.fit}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <Link className={combinedStyles} {...rest}>
      {children}
    </Link>
  )
}
