import {describe, expect, test} from 'vitest'
import {getScore} from '../src/scrabble'

describe("getScore function test", () => {
  test('getScore([]) returns []', () => {
    expect(getScore([])).toEqual([])
  })
  test('getScore(["kilo", "almendras", "llano", "wenceslao", "ratón"]) returns [undefined, 12, 11, undefined, 5]', () => {
    expect(getScore(["kilo", "almendras", "llano", "wenceslao", "ratón"])).toEqual([undefined, 12, 11, undefined, 5])
  })
  test('getScore(["hola", "mundo"]) returns [7, 8]', () => { 
    expect(getScore(["hola", "mundo"])).toEqual([7, 8])
  })
})