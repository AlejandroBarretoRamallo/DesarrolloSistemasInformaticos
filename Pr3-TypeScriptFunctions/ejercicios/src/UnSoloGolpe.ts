function onePunch(...strings: string[]): string | string[] {
  if (strings.length === 0) {
    return "Broken!";
  } else if (strings.every((str) => str === "")) {
    return "Broken!";
  } else {
    return strings
      .map((str) => str.replace(/[ae]/g, ""))
      .sort()
      .join(" ");
  }
}

console.log(onePunch());
console.log(onePunch("Beard", "Jeans", "Hairbrush", "Knuckleduster", "Sand"));
console.log(onePunch("Sock", "Beard", "Vest", "Lady", "Sage"));
console.log(
  onePunch("Beard", "Sack", "Gun", "Parachute", "Face-Kicking-Shoes"),
);
console.log(onePunch("Snot", "Snow", "Soda", "Tank", "Beard"));
console.log(onePunch(""));
console.log(onePunch("", ""));
