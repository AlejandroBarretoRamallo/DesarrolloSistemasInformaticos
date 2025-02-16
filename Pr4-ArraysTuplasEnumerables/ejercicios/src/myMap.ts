/**
 * This function implements the map method of an array
 * @param array - Array to be mapped
 * @param callback - Function to be applied to each element of the array
 * @returns The new array wiht the modified elements
 * ```typescript	
 * myMap([1, 2, 3], x => x * 2) // returns [2, 4, 6]
 * ```
 */
export function myMap<T, U>(array: T[], callback: (element: T) => U): U[] {
  let newArray: U[] = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }
  return newArray
}