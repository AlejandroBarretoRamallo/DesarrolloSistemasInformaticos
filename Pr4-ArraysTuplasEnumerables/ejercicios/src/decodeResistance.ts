/**
 * Represents a tuple of a string and a number
 */
export type bandCode = [string, number];

/**
 * This function caclulates the resistance of a resistor based on the first 2 band´s colours
 * @param band1 - Colour of the first band, wich will represent the first digit
 * @param band2 - Colour of the second band, wich will represent the second digit
 * @param bands - A resitor may have up to 4 bands, but only the first 2 are used to calculate the resistance
 * @returns Returns the value of the reesistor or undefined if the colours are not valid
 * ```typescript
 * decodeResitor("Violeta", "Azul") returns 76
 * decodeResitor("Negro", "Blanco") returns 9
 * ```
 */
export function decodeResistor(
  band1: string,
  band2: string,
  ...bands: string[]
): number | undefined {
  const bandCodes: bandCode[] = [
    ["Negro", 0],
    ["Marrón", 1],
    ["Rojo", 2],
    ["Naranja", 3],
    ["Amarillo", 4],
    ["Verde", 5],
    ["Azul", 6],
    ["Violeta", 7],
    ["Gris", 8],
    ["Blanco", 9],
  ];
  const valueIndex1: number | undefined = bandCodes.findIndex(
    (band) => band[0] === band1,
  );
  const valueIndex2 = bandCodes.findIndex((band) => band[0] === band2);
  if (valueIndex1 === -1 || valueIndex2 === -1) {
    return undefined;
  }
  return Number(
    `${bandCodes[valueIndex1][1]}` + `${bandCodes[valueIndex2][1]}`,
  );
}
