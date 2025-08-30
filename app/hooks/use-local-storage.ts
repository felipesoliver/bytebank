/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react"

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)

      if (item) {
        setStoredValue(JSON.parse(item))
      } else {
        setValue(initialValue)
      }
    } catch (error) {
      throw new Error("Não foi possível encontrar o valor no localStorage.")
    }
  }, [key])

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      throw new Error("Não foi possível salvar o valor no localStorage.")
    }
  }

  const getValue = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  }

  return {
    storedValue,
    setValue,
    getValue,
  }
}

export default useLocalStorage
