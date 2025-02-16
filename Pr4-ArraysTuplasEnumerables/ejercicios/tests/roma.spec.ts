import {describe, test, expect} from 'vitest'
import {getPaths, getAuxPath} from '../src/roma'

describe('getPaths function test', () => {
  test('getPaths([[1, 2], [3, 4]] returns [[1, 3, 4], [1, 2, 4]]', () => {
    let matrix: number[][] = [[1, 2], [3, 4]]
    let paths: number[][] = getPaths(2, 2, matrix)
    expect(paths).toEqual([[1, 3, 4], [1, 2, 4]])
  })
  test("getPaths([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) returns [[1, 4, 7, 8, 9], [1, 4, 5, 8, 9], [1, 4, 5, 6, 9], [1, 2, 5, 8, 9], [1, 2, 5, 6, 9], [1, 2, 3, 6, 9]]", () => {
    let matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    let paths: number[][] = getPaths(3, 3, matrix)
    expect(paths).toEqual([[1, 4, 7, 8, 9], [1, 4, 5, 8, 9], [1, 4, 5, 6, 9], [1, 2, 5, 8, 9], [1, 2, 5, 6, 9], [1, 2, 3, 6, 9]])
  })
})