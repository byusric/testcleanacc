export const getObjectValue = (key: string, obj: Record<string, any>) =>
  key.split('.').reduce((previousValue, currentValue) => {
    const val = previousValue[currentValue]
    if (val) {
      return val
    } else {
      return previousValue
    }
  }, obj)
