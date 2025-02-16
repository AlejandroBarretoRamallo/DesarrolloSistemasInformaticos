
import {test, describe, expect} from 'vitest'
import {myMap} from '../src/myMap'

describe("myMap( functin test", () => {
  test("myMap([1, 2, 3], x => x * 2) returns [2, 4, 6]", () => {
    expect(myMap([1, 2, 3], (x: number) => x * 2)).toEqual([2, 4, 6])
  })
})
