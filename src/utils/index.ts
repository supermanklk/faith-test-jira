export const isFalsy = (value: unknown): boolean => (value === 0 ? false : !value)
export const cleanObject = (object: object) => {
  const result = { ...object }
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    // 解决这一块的只是需要用到泛型
    const value = result[key]
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key]
    }
  })

  return result
}
