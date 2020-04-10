searchInObject (obj, text) {
  return Object.keys(obj).reduce((acc, k) => {
    if (k.toLowerCase().includes(text)) { // search match in the Key
      acc[k] = obj[k]
    } else if (Object.prototype.toString.call(obj[k]) === '[object Object]')) { // start recurse if value is a nested Object
      var res = searchInObject(obj[k], text)
      if (Object.keys(res).length) {
        acc[k] = res
      }
    } else if (obj[k].toLowerCase().includes(text)) { // search match in the Value
      acc[k] = obj[k]
    }
    return acc
  }, {})
}
