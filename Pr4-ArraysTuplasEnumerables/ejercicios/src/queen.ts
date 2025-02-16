/**
 * This enum represents the possible values of a cell
 */
export enum casilla {
  empty = '-',
  blackQueen = 'B',
  whiteQueen = 'W'
}

/**
 * This type represents a row of a chess board
 */
export type row = [casilla, casilla, casilla, casilla, casilla, casilla, casilla, casilla]

/**
 * This type represents a chess board
 */
export type chessBoard = [row, row, row, row, row, row, row, row]

/**
 * This function checks if a queen can attack another queen
 * @param chess - The chess board
 * @returns If a queen can attack another queen
 * ```typescript
 * checkAtack([
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', 'B', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-'],
 * ['-', '-', '-', '-', '-', '-', 'W', '-'],
 * ['-', '-', '-', '-', '-', '-', '-', '-']
 * ]) // returns true
 * ```
 */
export function checkAtack(chess: chessBoard): boolean | undefined {
  let blackQueenPosition: [number, number] = [-1, -1]
  let whiteQueenPosition: [number, number] = [-1, -1]
  let blackQueenFound: boolean = false
  let whiteQueenFound: boolean = false
  chess.forEach((column, rowIndex) => {
    column.forEach((cell, columnIndex) => {
      if (chess[rowIndex][columnIndex] === casilla.blackQueen) {
        if (blackQueenFound) {
          return undefined
        }
        blackQueenPosition = [rowIndex, columnIndex]
        blackQueenFound = true
      }
      else if (chess[rowIndex][columnIndex] === casilla.whiteQueen) {
        if (whiteQueenFound) {
          return undefined
        }
        whiteQueenPosition = [rowIndex, columnIndex]
        whiteQueenFound = true
      }
    })
  })
  if (blackQueenPosition[0] === -1 || whiteQueenPosition[0] === -1) {
    return false
  }
  if (blackQueenPosition[0] === whiteQueenPosition[0] || blackQueenPosition[1] == whiteQueenPosition[1]) {
    return true
  }
  for (let i:number = blackQueenPosition[0], j:number = blackQueenPosition[1]; i >= 0 && j < 8; i--, j++) {  // diagonal superior derecha
    if (i === whiteQueenPosition[0] && j == whiteQueenPosition[1]) {
      return true
    }
  }
  for (let i:number = blackQueenPosition[0], j:number = blackQueenPosition[1]; i >= 0 && j >= 0; i--, j--) {  // diagonal superior izquierda
    if (i === whiteQueenPosition[0] && j == whiteQueenPosition[1]) {
      return true
    }
  }
  for (let i:number = blackQueenPosition[0], j:number = blackQueenPosition[1]; i < 8 && j < 8; i++, j++) {  // diagonal infeiror derecha
    if (i === whiteQueenPosition[0] && j == whiteQueenPosition[1]) {
      return true
    }
  }
  for (let i:number = blackQueenPosition[0], j:number = blackQueenPosition[1]; i < 8 && j >= 0; i++, j--) {  // diagonal infeiror izquierda
    if (i === whiteQueenPosition[0] && j == whiteQueenPosition[1]) {
      return true
    }
  }
  return false
}