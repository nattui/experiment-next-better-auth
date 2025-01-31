export const theme = {
  border: {
    base: ["border-solid", "border"].join(" "),
    color: {
      active: [
        "data-[active=true]:border-gray-a8",
        "active:border-gray-a8",
      ].join(" "),
      base: "border-gray-a4",
      disabled: "disabled:!border-gray-a4",
      focus: "focus:border-gray-a8",
      hover: "hover:border-gray-a8",
    },
  },
  disabled: ["disabled:cursor-not-allowed", "disabled:opacity-50"].join(" "),
  duration: "duration-150",
  outline: [
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    "focus-visible:outline-primary-9",
  ].join(" "),
  rounded: "rounded-8",
  shadow: "shadow-1",
}
