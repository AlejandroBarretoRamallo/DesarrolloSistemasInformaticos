/**
 * Calculates the paths from the top left corner to the bottom right corner of a matrix
 * @param rows - number of rows
 * @param columns - number of columns
 * @param matrix - matrix with the values
 * @returns The list of paths
 */
export function getPaths(rows: number, columns: number, matrix: number[][]): number[][] {
    let paths: number[][] = []
    let path: number[] = []
    let posX: number = 0
    let posY: number = 0
    getAuxPath(rows, columns, matrix, posX, posY, path, paths)
    return paths
}

/**
 * 
 * @param rows - Number of rows
 * @param columns - Number of columns
 * @param matrix - Matrix with the values
 * @param posX - Current position in the row
 * @param posY - Current position in the column
 * @param path - Current path
 * @param paths - List of paths
 * @returns It doesnt return nothing, it just fills the paths list
 */
export function getAuxPath(rows:number, columns: number, matrix: number[][], posX: number, posY: number, path: number[], paths: number[][]) {
  let newPath: number[] = path.slice()
  if (posX == rows -1 && posY == columns -1) {
    newPath.push(matrix[posX][posY])
    paths.push(newPath)
    return
  }
  else {
    newPath.push(matrix[posX][posY])
    if (posX + 1 < rows) {
      getAuxPath(rows, columns, matrix, posX + 1, posY, newPath, paths)
    }
    if (posY + 1 < columns) {
      getAuxPath(rows, columns, matrix, posX, posY + 1, newPath, paths)
    }
  }
}