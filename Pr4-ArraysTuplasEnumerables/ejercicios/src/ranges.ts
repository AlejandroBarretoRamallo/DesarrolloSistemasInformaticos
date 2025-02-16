/**
 * Transforms a list of sorted numbers into a string of the numbers agrupated in ranges
 * @param numbers - List of numbers
 * @returns A string of the numbers agrupated in ranges
 * ```typescript
 * fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]) returns “5_7, 9, 12_14”
 * fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]) returns “-3_-1, 3, 5_7”
 * ```
 */
export function fromArrayToRanges(numbers: number[]): string {
  let ranges: string = ""
  let lastNumber: number = 0
  numbers.forEach((number, index) => {
    if (index === 0) {
      ranges += `${number}`
    }
    else {
      if (lastNumber + 1 === number) {
        if (!ranges.endsWith(`_`)) {
          ranges += '_'
        }
        else {
          if (index + 1 === numbers.length) {
            ranges += `${number}`
          }
          else if (numbers[index + 1] !== number + 1) {
            ranges += `${number}`
          }
        }
      }
      else {
        ranges += `, ${number}`
      }
    }
    lastNumber = number
  })
  return ranges
}

/**
 * Creates a list with all the numbers represented on the string
 * @param string - A string that contains multiple numbers agrpated on ranges using '-'
 * @returns returns a list of numbers wiht all the numbers represented on the string
 * ```typescript
 * fromRangesToArray("5_7, 9, 12_14") returns [5, 6, 7, 9, 12, 13, 14]
 * fromRagesToArray("-3_-1, 3, 5_7") returns [-3, -2, -1, 3, 5, 6, 7]
 * ```
 */
export function fromRangesToArray(string: string): number[] {
  let numbersList: number[] = []
  string = string.replace(/ /g, '')
  let ranges = string.split(',')
  ranges.forEach(range => {
    if (range.includes('_')) {
      let [start, end] = range.split('_')
      let firstNumber: number = 0
      firstNumber = Number(start)
      let lastNumber: number = 0
      lastNumber = Number(end)
      for (let i = firstNumber; i <= lastNumber; i++) {
        numbersList.push(i)
      }
    }
    else {
      numbersList.push(Number(range))
    }
  })
  return numbersList
}