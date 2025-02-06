function getTypeTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a || a < 0 || b < 0 || c < 0) {
        return undefined;
    }
    if (a === b && b === c) {
        return 'Equilátero';
    }
    else if (a == b || a == c || b == c) {
        return 'Isósceles';
    }
    else {
        return 'Escaleno';
    }
}
console.log(getTypeTriangle(7, 7, 7));
console.log(getTypeTriangle(5, 5, 9.5));
console.log(getTypeTriangle(5, 6, 7));
console.log(getTypeTriangle(3, 1, 1));
console.log(getTypeTriangle(-3, 1, 1));
