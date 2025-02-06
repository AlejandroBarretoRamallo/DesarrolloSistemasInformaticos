function squareEncoding(text: string): string {
  text = text.replace(/[\W]/g, "").toLowerCase();
  let columns = 0;
  let rows = Math.floor(Math.sqrt(text.length));
  if (rows * rows >= text.length) {
    columns = rows;
  } else {
    columns = rows + 1;
  }
  let strings = [];
  for (let i = 0; i < columns; i++) {
    strings.push("");
  }
  for (let i = 0; i < text.length; i++) {
    strings[i % columns] += text[i];
  }
  return strings.join(" ");
}

console.log(
  squareEncoding(
    "A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio.",
  ),
);
