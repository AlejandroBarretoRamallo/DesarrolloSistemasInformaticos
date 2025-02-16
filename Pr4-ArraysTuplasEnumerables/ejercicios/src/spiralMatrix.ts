/**
 * This type represents a matrix column
 */
export type column = number[]

/**
 * This type represents a coordinate of two dimensions
 */
export type coordinates = [number, number]

/**
 * Represents the directions left, right, up and down
 */
export enum directions {
  R = 'R',
  L = 'L',
  U = 'U',
  D = 'D'
}

/**
 * Creates a matrix of n * n dimensions wich is filled with numbers in clockwise and spiral order
 * @param number - Numebr of rows and columns
 * @returns - The matrix of n * n dimensions
 * ```typescript
 * getSpiralMatrix(2) should return [1, 2]
 *                                  [3, 4]
 * getSpiralMatrix(4) should return [1,  2,  3,  4]
 *                                  [12, 13, 14, 5]
 *                                  [11, 15, 15, 6]
 *                                  [10, 9,  8,  7]
 * ```
 */
export function getSpiralMatrix(number: number): column[]  | undefined {
  if (number < 1) {
    return undefined
  }
  let spiralMatrix: column[] = Array.from({length: number}, () => Array(number).fill(0))
  let counter: number = 1
  let whereToGo: string = directions.R
  let row: number = 0, column: number = 0
  while (counter <= number * number) {
    if (spiralMatrix[row][column] === 0) {
      spiralMatrix[row][column] = counter
      ++counter
      switch (whereToGo) {
        case directions.R:  // moving right
          if (column + 1 < number && spiralMatrix[row][column + 1] === 0) {
            ++column
          }
          else {
            ++row
            whereToGo = directions.D
          }
          break;
        case directions.D:     // moving down
          if (row + 1 < number && spiralMatrix[row + 1][column] === 0) {
            ++row
          }
          else {
            --column
            whereToGo = directions.L
          }
          break;
        case directions.L:  // moving left
          if (column - 1 >= 0 && spiralMatrix[row][column - 1] === 0) {
            --column
          }
          else {
            --row
            whereToGo = directions.U
          }
          break
        case directions.U: // moving up
          if (row -1 >= 0 && spiralMatrix[row - 1][column] === 0) {
            --row
          }
          else {
            ++column
            whereToGo = directions.R
          }
          break
        default:
          break
      }
    }
    else {
      if (counter = number * number) {
        break
      }
    }
  }
  return spiralMatrix
}

console.log(getSpiralMatrix(4))