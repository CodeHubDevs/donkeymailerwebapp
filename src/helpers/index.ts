export const toTitleCase = (str: any) => {
  return str[0]
    .toLowerCase()
    .split(' ')
    .map((word: any) => {
      return word.replace(word[0], word[0].toUpperCase())
    })
    .join(' ')
}

export const capFirstWord = (str: string) => {
  return `${str[0].charAt(0).toUpperCase()}${str[0].slice(1)}`
}
