/**
 * This type represents a list of numbers
 */
export type numberList = number[]

/**
 * This function calculates the points based on the phase and the recolected objects
 * @param phase - Number of the phase
 * @param objects - List of recolected objects
 * @returns The points earned
 * ```typescript
 * getPoints(25, 2, 3, 7) returns 211
 * ```
 */
export function getPoints(phase: number, ...objects: number[]): number | undefined {
  if (objects.length === 0 || phase < 1 ) return undefined
  let lists: numberList[] = []
  objects.forEach(number => {
    if (number < 1) {
      return undefined
    }
    let list: numberList = []
    let multipler = 1
    while (number * multipler <= 25) {
      list.push(multipler * number)
      ++multipler
    }
    lists.push(list)
  })
  let sumOfLists: numberList = []
  lists.forEach(list => {
    list.forEach(number => {
      if (!sumOfLists.includes(number)) {
        sumOfLists.push(number)
      }
    })
  })
  let points: number = 0
  sumOfLists.forEach(number => {
    points += number
  })
  return points
}