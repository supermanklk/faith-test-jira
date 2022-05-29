import React from 'react'
import { useArray } from '../../customHooks/useArray'
const TryUseArray = () => {
  const persons: { name: string; age: number }[] = [
    { name: 'faith', age: 25 },
    { name: 'tang', age: 25 }
  ]
  const { value, clear, removeIndex, add } = useArray(persons)
  const code = `useArray<T>(initalArray: T[])`
  return (
    <div>
      <h1>学习泛型{code} </h1>
      <button
        onClick={() => {
          add({ name: 'faith22', age: 29 })
        }}>
        add
      </button>
      <button
        onClick={() => {
          clear()
        }}>
        clear
      </button>
      <button
        onClick={() => {
          removeIndex(0)
        }}>
        removeIndex
      </button>
      <div>
        {value.map((item, index) => {
          return (
            <div key={index}>
              {index} & {item.name} & {item.age}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TryUseArray
