function applyOperation(a, b, operation) {
    return operation(a, b);
}
console.log(applyOperation(3, 8, (x, y) => x + y));
console.log(applyOperation(3, 8, (x, y) => x - y));
console.log(applyOperation(3, 8, (x, y) => x * y));
console.log(applyOperation(3, 8, (x, y) => x / y));
