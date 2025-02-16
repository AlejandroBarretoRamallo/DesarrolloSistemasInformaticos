import {describe, test, expect} from "vitest"
import {getSpiralMatrix} from '../src/spiralMatrix'

describe("getSpiralMatrix() function test", () => {
  test("getSpiralMatrix(2) returns [[1, 2], [4, 3]]", () => {
    expect(getSpiralMatrix(2)).toEqual([[1, 2], [4, 3]])
  })
  test("getSpiralMatrix(4) returns [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]", () => {
    expect(getSpiralMatrix(4)).toEqual([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]])
  })
}) 