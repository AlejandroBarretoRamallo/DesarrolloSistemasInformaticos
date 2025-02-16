import {describe, test, expect} from 'vitest'
import {getPoints} from '../src/objectRecolection'

describe("getPoints function test", () => {
  test("getPoints(25, 2, 3, 7) returns 211" , () => {
    expect(getPoints(25, 2, 3, 7)).toEqual(211)
  })
  test("getPoints(-1, 2, 3, 4) returns undefined", () => {
    expect(getPoints(-1, 2, 3, 4)).toEqual(undefined)
  })
})