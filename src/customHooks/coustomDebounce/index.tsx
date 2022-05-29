import { useEffect, useState } from 'react'

export default function useDebounce(initialValue, delay: number) {
  const [debounceValue, setDebounceValue] = useState(initialValue)

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceValue(initialValue)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [initialValue, delay])

  return debounceValue
}
