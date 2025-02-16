import { describe, test, expect } from "vitest";
import { decodeResistor } from "../src/decodeResistance";

describe("decodeResistor function test", () => {
  test('decodeResistor("Violeta", "Azul") returns 76', () => {
    expect(decodeResistor("Violeta", "Azul")).toEqual(76);
  });
  test('decodeResistor("Negro", "Blanco") returns 9', () => {
    expect(decodeResistor("Negro", "Blanco")).toEqual(9);
  });
  test('decodeResistor("Magenta", "Negro") returns undefined', () => {
    expect(decodeResistor("Magenta", "Negro")).toBe(undefined);
  });
});
