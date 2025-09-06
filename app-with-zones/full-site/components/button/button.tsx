import { IButton } from "@/types/types"
import React from "react"

const Button = ({
  size = 'medium',
  label,
  onClick,
  backgroundColor,
  variant = 'primary',
  fullWidth = false,
  centered = false,
  disabled,
  className,
  ...props
}: IButton) => {
  const baseClasses = `
    font-medium rounded-lg transition-all
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `

  const sizeClasses = {
    small: 'text-sm px-3 py-2',
    medium: 'text-sm px-6 py-3 md:h-[48px]',
    large: 'text-lg px-6 py-4',
  }[size]

  const variantClasses = {
    primary: `bg-[var(--color-green)] text-white hover:brightness-110 ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    }`,
    secondary: `bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-green-light)] focus:ring-[var(--color-secondary)]`,
    link: `text-[var(--color-green)] underline bg-transparent border-none hover:text-green-700 transition-colors cursor-pointer`
  }[variant]

  const widthClasses = fullWidth ? 'w-full' : 'w-fit'
  const alignClasses = centered ? 'mx-auto block' : ''

  return (
    <button
      type="button"
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClasses} ${alignClasses} ${className || ''}`}
      style={backgroundColor ? { backgroundColor } : undefined}
      onClick={onClick}
      disabled={disabled}
      aria-label={props['aria-label']}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
