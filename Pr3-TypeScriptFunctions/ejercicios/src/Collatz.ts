function collatz(number: number): undefined | number {
  if (number < 1 || number % 1 !== 0) {
    return undefined;
  }
  let numSequences = 0;
  while (number != 1) {
    number % 2 === 0 ? (number /= 2) : (number = number * 3 + 1);
    ++numSequences;
  }
  return numSequences;
}

console.log(collatz(10));
console.log(collatz(1.1));
console.log(collatz(-2));
