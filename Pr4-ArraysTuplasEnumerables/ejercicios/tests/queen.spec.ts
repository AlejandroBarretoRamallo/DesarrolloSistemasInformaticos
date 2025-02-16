import {describe, test, expect} from 'vitest'
import {checkAtack, chessBoard, row, casilla} from '../src/queen'

describe("checkAtack function test", () => {
  test("checkAtack with valid positions on an 8x8 chessboard", () => {
    const board: chessBoard = [
      [casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty],
      [casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty],
      [casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty],
      [casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty],
      [casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty],
      [casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty],
      [casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty],
      [casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty, casilla.empty]
    ];
    board[0][0] = casilla.whiteQueen; // White queen at position (0, 0)
    board[1][1] = casilla.blackQueen; // Black queen at position (1, 1)
    expect(checkAtack(board)).toBe(true);
  });
});