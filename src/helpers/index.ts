export const toTitleCase = (str: any) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word: any) => {
      return word.replace(word[0], word[0].toUpperCase())
    })
    .join(' ')
}

export const capFirstWord = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}
