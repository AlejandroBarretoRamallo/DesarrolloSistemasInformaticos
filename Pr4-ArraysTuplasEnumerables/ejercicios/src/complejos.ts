/**
 * This type represents a complex number  as a tuple of two numbers
 */
export type complex = [number, number];

/**
 * This function sums two complex numbers
 * @param number1 - First operand of the sum
 * @param number2 - Second operand of the sum
 * @returns A new complex number, wich is the sum of the previous two
 * ```typescript
 * add([1, 1], [2, 2]) returns [3, 3]
 * ```
 */
export function add(number1: complex, number2: complex): complex {
  let result: complex = [number1[0] + number2[0], number1[1] + number2[1]];
  return result;
}

/**
 * This function substracts two complex numbers
 * @param number1 - First operand of the sub
 * @param number2 - Second operand of th esub
 * @returns A complex number wich is the result of number1 - number2
 * ```typescript
 * sub([1, 1], [2, 2]) returns [-1, -1]
 * ```
 */
export function sub(number1: complex, number2: complex): complex {
  let result: complex = [number1[0] - number2[0], number1[1] - number2[1]];
  return result;
}

/**
 * This function multiplies two compelx numbers
 * @param number1 - First operand of the multiplication
 * @param number2 - Second operand of the multiplication
 * @returns A complex number wich is the result of number1 * number2
 * ```typescript
 * mul([2, 2], [3, 3]) returns [6, 6]
 * ```
 */
export function mul(number1: complex, number2: complex): complex {
  let result: complex = [number1[0] * number2[0], number1[1] * number2[1]];
  return result;
}

/**
 * This function divides two complex numbers
 * @param number1 - First operand
 * @param number2 - Second operand
 * @returns The result of  number1 / number2, or undefined if the divisor is 0
 * ```typescript
 * div([2, 2], [1, 1]) returns [2, 2]
 * ```
 */
export function div(number1: complex, number2: complex): undefined | complex {
  if (number2[0] === 0 && number2[1] === 0) {
    return undefined;
  }
  let result: complex = [
    (number1[0] * number2[0] + number1[1] * number2[1]) /
      (number2[0] ** 2 + number2[1] ** 2),
    (number1[1] * number2[0] - number1[0] * number2[1]) /
      (number2[0] ** 2 + number2[1] ** 2),
  ];
  return result;
}

/**
 * This function calculates the scalar product between a complex number and a real number
 * @param number1 - The complex numebr
 * @param number2 - The real number
 * @returns The scalar product of the two numbers
 * ```typescript
 * prod([2, 2], 3) returns [6, 6]
 * ```
 */
export function prod(number1: complex, number2: number): complex {
  let result: complex = [number1[0] * number2, number1[1] * number2];
  return result;
}

/**
 * This funciton calculates the conjugate of a complex number
 * @param number - A complex number
 * @returns The conjugate of the number
 * ```typescript
 * conj([2, 2]) returns [2, -2]
 * ```
 */
export function conj(number: complex): complex {
  let result: complex = [number[0], number[1] * -1];
  return result;
}

/**
 * Calculates the absolute value of a complex numebr
 * @param number - A complex number
 * @returns The absolute value of a complex number
 * ```typescript
 * abs([3, 4]) returns 5
 * ```
 */
export function abs(number: complex): number {
  let result: number = Math.sqrt(number[0] ** 2 + number[1] ** 2);
  return result;
}
