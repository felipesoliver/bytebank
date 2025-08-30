export const camelize = (string_: string) => {
  return string_
    .replace(/-/gi, ' ')
    .replace(/^\w|[A-Z]|\b\w/g, function (word, index) {
      return index === 0 ? word?.toLowerCase() : word?.toUpperCase()
    })
    .replace(/\s+/g, '')
}
