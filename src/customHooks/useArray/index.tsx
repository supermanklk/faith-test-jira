import { useState } from 'react'

// 这是在没看视频之前写的
// export function useArray<T>(initalArray: T) {

// 点睛之笔 useArray<T>(initalArray: T[])
// 使用的是泛型,我们的入参是 { name: string; age: number }[]
// 那么T就是 { name: string; age: number }
export function useArray<T>(initalArray: T[]) {
  const [value, setValue] = useState(initalArray)

  const clear = () => {
    setValue([])
  }

  const removeIndex = (index: number) => {
    let copy = [...value]
    copy.splice(index, 1)
    setValue(copy)
  }

  const add = (item: T) => {
    setValue([...value, item])
  }

  return { value, clear, removeIndex, add }
}
