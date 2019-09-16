export const addOrUpdate = (list, expression, item) => {
  let newItem = true
  let returnList = list.map(x => {
    if (expression(x)) {
      newItem = false
      return item
    }
    return x
  })
  if (newItem) {
    returnList.push(item)
  }
  return returnList
}
