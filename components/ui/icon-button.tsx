import type { ComponentProps, JSX, ReactNode } from "react"
import { type ButtonProps, buttonStyles } from "@/components/ui/button"
import ButtonSpinner from "@/components/ui/button-spinner"

export interface IconButtonProps extends ComponentProps<"button"> {
  children?: ReactNode
  isLoading?: ButtonProps["isLoading"]
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
}

export const iconButtonStyles = {
  size: {
    extraLarge: ["w-44", "h-44"].join(" "),
    large: ["w-40", "h-40"].join(" "),
    medium: ["w-36", "h-36"].join(" "),
    small: ["w-32", "h-32"].join(" "),
  },
} as const

export default function IconButton(props: IconButtonProps): JSX.Element {
  const {
    children = "",
    className: customStyles = "",
    disabled = false,
    isLoading = false,
    size = "medium",
    type = "button",
    variant = "primary",
    ...rest
  } = props

  const combinedStyles = `
    ${iconButtonStyles.size[size]}
    ${buttonStyles.base}
    ${buttonStyles.variant[variant]}
    ${customStyles}
  `
    .replaceAll(/\s+/g, " ")
    .trim()

  return (
    <button
      className={combinedStyles}
      disabled={disabled || isLoading}
      type={type}
      {...rest}
    >
      {isLoading && <ButtonSpinner />}
      {!isLoading && children}
    </button>
  )
}
