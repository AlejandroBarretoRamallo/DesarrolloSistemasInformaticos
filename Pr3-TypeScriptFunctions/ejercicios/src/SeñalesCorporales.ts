function fromIntToActions(number: number): string {
  if (number > 31 || number < 1) {
    return "undefined";
  }
  let binaryNumber = number.toString(2);
  while (binaryNumber.length < 5) {
    binaryNumber = "0" + binaryNumber;
  }
  let actions = "";
  for (let i = 4; i >= 0; --i) {
    if (binaryNumber[i] === "1") {
      switch (i) {
        case 0:
          actions += "saltar, ";
          break;
        case 1:
          actions += "levantar las cejas, ";
          break;
        case 2:
          actions += "mover la nariz, ";
          break;
        case 3:
          actions += "parpadear dos veces, ";
          break;
        case 4:
          actions += "parpadear, ";
          break;
      }
    }
  }
  return actions.slice(0, actions.length - 2);
}

console.log(fromIntToActions(9));
console.log(fromIntToActions(26));
console.log(fromIntToActions(-27));
console.log(fromIntToActions(33));
