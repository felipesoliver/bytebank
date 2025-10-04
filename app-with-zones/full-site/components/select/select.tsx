"use client"

import { ICustomSelect } from "@/types/types"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { IoMdArrowDropdown } from "react-icons/io"
import { tv } from "tailwind-variants"

const selectButtonVariants = tv({
  base: "w-full h-[3.125rem] px-4 py-3 bg-white border border-gray-300 text-gray-700 text-lg font-medium focus:outline-none transition-colors flex items-center justify-between",
  variants: {
    borderColor: {
      green:
        "border-[var(--color-green)] hover:border-[var(--color-green)] focus:border-[var(--color-green)] focus:ring-[var(--color-green)]",
      blue: "border-[var(--color-green-dark)] hover:border-[var(--color-green-dark)]",
    },
    isOpen: {
      true: "rounded-t-lg",
      false: "rounded-lg",
    },
  },
  defaultVariants: {
    borderColor: "blue",
    isOpen: false,
  },
})

const selectDropdownVariants = tv({
  base: "absolute top-[3.125rem] left-0 right-0 bg-white border border-t-0 rounded-b-lg shadow-lg z-50 overflow-hidden",
  variants: {
    borderColor: {
      green: "border-[var(--color-green)]",
      blue: "border-[var(--color-green-dark)]",
    },
  },
  defaultVariants: {
    borderColor: "blue",
  },
})

const selectIconVariants = tv({
  base: "h-5 w-5 transition-transform duration-200",
  variants: {
    borderColor: {
      green: "text-[var(--color-green)]",
      blue: "text-[var(--color-green-dark)]",
    },
    open: {
      true: "rotate-180",
      false: "",
    },
  },
  defaultVariants: {
    borderColor: "blue",
    open: false,
  },
})

const selectOptionVariants = tv({
  base: "w-full text-left px-6 py-3 text-base focus:outline-none transition-colors",
  variants: {
    borderColor: {
      green: "hover:bg-[var(--color-green-light)] hover:font-bold hover:text-[var(--color-gray-dark)]",
      blue: "hover:bg-[var(--color-gray)] hover:font-bold hover:text-[var(--color-gray-dark)]",
    },
    hasTopBorder: {
      true: "border-t border-gray-200",
      false: "",
    },
  },
  defaultVariants: {
    borderColor: "blue",
    hasTopBorder: false,
  },
})

const CustomSelect = ({
  options,
  placeholder = "Selecione uma opção",
  onValueChange,
  defaultValue,
  className = "",
  borderColor = "blue",
  label,
  id,
}: ICustomSelect) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue || "")
  const selectRef = useRef<HTMLDivElement>(null)
  const uniqueId = id || `select-${Math.random().toString(36).slice(2, 9)}`

  const selectedOption = selectedValue ? options.find((option) => option.value === selectedValue) : null

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleOpenSelect = () => {
    if (!selectedValue && options.length > 0) {
      setSelectedValue(options[0].value)
      onValueChange?.(options[0].value)
    }
    setIsOpen(!isOpen)
  }

  const handleSelect = (value: 'Credit' | 'Debit') => {
    setSelectedValue(value)
    setIsOpen(false)
    onValueChange?.(value)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setIsOpen(!isOpen)
    } else if (event.key === "Escape") {
      setIsOpen(false)
    }
  }

  return (
    <div className={`relative w-full ${className}`} ref={selectRef}>
      {label && (
        <label htmlFor={uniqueId} className="block text-sm font-bold text-gray-700 mb-2">
          {label}
        </label>
      )}
      <button
        type="button"
        id={uniqueId}
        onClick={handleOpenSelect}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={label || placeholder}
        aria-describedby={`${uniqueId}-description`}
        className={selectButtonVariants({ borderColor, isOpen })}
      >
        <span className={`text-base ${selectedOption ? "text-gray-700" : "text-gray-500"}`}>
          {selectedOption?.label || placeholder}
        </span>
        <IoMdArrowDropdown className={selectIconVariants({ borderColor, open: isOpen })} />
      </button>

      {isOpen && (
        <div className={selectDropdownVariants({ borderColor })}>
          <ul role="listbox" aria-labelledby={uniqueId}>
            {options.map((option, index) => (
              <li key={option.value}>
                <button
                  type="button"
                  className={selectOptionVariants({
                    borderColor,
                    hasTopBorder: index > 0,
                  })}
                  onClick={() => handleSelect(option.value)}
                  role="option"
                  aria-selected={selectedValue === option.value}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <span id={`${uniqueId}-description`} className="sr-only">
        Use as setas para cima e para baixo para navegar pelas opções
      </span>
    </div>
  )
}

export default CustomSelect
