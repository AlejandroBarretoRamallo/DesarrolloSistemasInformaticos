function getTriplets(number) {
    if (number < 1 || number % 1 !== 0) {
        return undefined;
    }
    let triplets = "";
    for (let a = 1; a < number / 3; ++a) {
        for (let b = a + 1; b < number / 2; b++) {
            let c = number - a - b;
            if (c > b && a * a + b * b === c * c) {
                triplets += `(${a}, ${b}, ${c}) `;
            }
        }
    }
    if (triplets.length === 0) {
        return undefined;
    }
    return triplets.slice(0, triplets.length - 1);
}
console.log(getTriplets(1000));
console.log(getTriplets(-153));
console.log(getTriplets(3));
