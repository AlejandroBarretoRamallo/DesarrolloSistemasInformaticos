import { describe, expect, test } from "vitest";
import { add, sub, mul, div, prod, conj, abs } from "../src/complejos.ts";

describe("add function test", () => {
  test("add([1, 1], [2, 2] returns [3, 3]", () => {
    expect(add([1, 1], [2, 2])).toEqual([3, 3]);
  });
  test("add([-3, 1], [3, -1] returns [0,0]", () => {
    expect(add([-3, 1], [3, -1])).toEqual([0, 0]);
  });
});

describe("sub function test", () => {
  test("sub([1, 1], [1, 1]) returns [0, 0]", () => {
    expect(sub([1, 1], [1, 1])).toEqual([0, 0]);
  });
  test("sub([-1, -2], [1, 2]) returns [-2, -4]", () => {
    expect(sub([-1, -2], [1, 2])).toEqual([-2, -4]);
  });
});

describe("mul function test", () => {
  test("mul([2, 2], [3, 3]) returns [6, 6]", () => {
    expect(mul([2, 2], [3, 3])).toEqual([6, 6]);
  });
  test("mul([2, 4], [-1, -1]) returns [-2, -4]", () => {
    expect(mul([2, 4], [-1, -1])).toEqual([-2, -4]);
  });
});

describe("div function test", () => {
  test("div([2, 2], [1, 1]) returns [2, 0]", () => {
    expect(div([2, 2], [1, 1])).toEqual([2, 0]);
  });
  test("div([2, 2], [0, 0]) returns undefined", () => {
    expect(div([2, 2], [0, 0])).toEqual(undefined);
  });
});

describe("prod function test", () => {
  test("prod([1, 1], 3) returns [3, 3]", () => {
    expect(prod([1, 1], 3)).toEqual([3, 3]);
  });
  test("prod([4, 4], -1) returns [-4, -4]", () => {
    expect(prod([4, 4], -1)).toEqual([-4, -4]);
  });
});

describe("conj function test", () => {
  test("conj([1, 1]) returns [1, -1]", () => {
    expect(conj([1, 1])).toEqual([1, -1]);
  });
  test("conj([1, 0]) returns [1, -0]", () => {
    expect(conj([1, 0])).toEqual([1, -0]);
  });
});

describe("abs function test", () => {
  test("abs([3, 4]) returns 5", () => {
    expect(abs([3, 4])).toEqual(5);
  });
  test("abs([0, 0]) returns 0", () => {
    expect(abs([0, 0])).toEqual(0);
  });
});
