import {test, expect, describe} from 'vitest'
import {fromArrayToRanges, fromRangesToArray} from '../src/ranges'

describe("fromRangesToArray function test", () => {
  test("fromRangesToArray('5_7, 9, 12_14') returns [5, 6, 7, 9, 12, 13, 14]", () => {
    expect(fromRangesToArray("5_7, 9, 12_14")).toEqual([5, 6, 7, 9, 12, 13, 14])
  })
  test("fromRangesToArray('-3_-1, 3, 5_7') returns [-3, -2, -1, 3, 5, 6, 7]", () => {
    expect(fromRangesToArray('-3_-1, 3, 5_7')).toEqual([-3, -2, -1, 3, 5, 6, 7])
  })
})

describe("fromArrayToRanges function test", () => {
  test("fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]) returns '5_7, 9, 12_14'", () => {
    expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).toEqual('5_7, 9, 12_14')
  })
  test("fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]) returns '-3_-1, 3, 5_7'", () => {
    expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).toEqual('-3_-1, 3, 5_7')
  })
})