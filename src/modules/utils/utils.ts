export const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds))

export const noop = () => {
  //
}


// Array operations
export const removeNull = <T>(array: Array<null | T>): T[] => {
  return array.filter((item): item is T => item !== null) || []
}

export const removeUndefined = <T>(array: Array<undefined | T>): T[] => {
  return array.filter((item): item is T => typeof item !== 'undefined') || []
}
export const removeUndefinedAndNull = <T>(array: Array<null | undefined | T>): T[] => {
  return array.filter((item): item is T => item !== null && typeof item !== 'undefined') || []
}
export const uniqueArray = (things: object[]) => things.filter((thing, index) => {
  const _thing = JSON.stringify(thing)
  return index === things.findIndex(obj => {
    return JSON.stringify(obj) === _thing
  })
})


// String operations
export const replaceAll = (string, search, replace) => string.split(search).join(replace)


// slug to string
export const slugAsStringUndefined = (slug?: string | string[] | null) => {
  if (Array.isArray(slug)) return slug[0]

  return slug || undefined
}

// JSON print
const replacerSetToJSON = (_: string, value: any) =>
  typeof value === 'object' && value instanceof Set
    ? Array.from(value)
    : value

export const printJson = (obj: object) => JSON.stringify(obj, replacerSetToJSON, 2)

export const removeUndefinedFromObject = (obj: object) => Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])

// wait function
export const wait = async (ms: number) => {
  await new Promise(r => setTimeout(r, ms))
}
