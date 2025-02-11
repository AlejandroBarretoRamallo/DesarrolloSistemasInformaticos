function squareEncoding(text) {
    const accents = { á: "a", é: "e", í: "i", ó: "o", ú: "u", ü: "u" };
    text = text
        .toLocaleLowerCase()
        .replace(/[áéíóúü]/gi, (match) => accents[match])
        .replace(/[\W_]/g, "");
    let columns = 0;
    let rows = Math.floor(Math.sqrt(text.length));
    if (rows * rows >= text.length) {
        columns = rows;
    }
    else {
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
console.log(squareEncoding("A Eduardo, el profesor de Desarrollo de Sistemas Informáticos, no le gusta el plagio."));
