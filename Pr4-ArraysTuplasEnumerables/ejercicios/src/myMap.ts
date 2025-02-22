export function myMap(array: number[], callback: (element: number) => number): number[]
export function myMap(array: string[], callback: (element: string) => string): string[]
export function myMap(array: boolean[], callback: (element: boolean) => boolean): boolean[]

/**
 * This function implements the map method of an array
 * @param array - Array to be mapped
 * @param callback - Function to be applied to each element of the array
 * @returns The new array with the modified elements
 * ```typescript	
 * myMap([1, 2, 3], x => x * 2) // returns [2, 4, 6]
 * ```
 */
export function myMap(array: number[] | string[] | boolean[], callback: ((element: number) => number) | ((element: string) => string) | ((element: boolean) => boolean)): number[] | string[] | boolean[] {
  let newArray: number[] | string[] | boolean[] = []
  if (typeof array[0] === 'number') {
    for (let i = 0; i < array.length; i++) {
      (newArray as number[]).push((callback as (element: number) => number)(array[i] as number))
    }
  }
  else if (typeof array[0] === 'string') {
    for (let i = 0; i < array.length; i++) {
      (newArray as string[]).push((callback as (element: string) => string)(array[i] as string))
    }
  }
  else {
    for (let i = 0; i < array.length; i++) {
      (newArray as boolean[]).push((callback as (element: boolean) => boolean)(array[i] as boolean))
    }
  }
  return newArray
}
