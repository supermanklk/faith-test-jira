import { useEffect, useState } from 'react'

export function useDebounce<V>(initialValue: V, delay?: number) {
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
