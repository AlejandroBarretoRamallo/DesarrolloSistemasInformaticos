function mcd(a, b) {
    let max = a - b > 0 ? a : b;
    let min = a - b > 0 ? b : a;
    while (true) {
        let rest = max % min;
        max = min;
        min = rest;
        if (rest === 0) {
            return max;
        }
    }
}
function addRationals(num1, dem1, num2, dem2) {
    if (typeof num1 === "string" &&
        typeof dem1 === "string" &&
        typeof num2 === "string" &&
        typeof dem2 === "string") {
        let MCD = mcd(Number(dem1), Number(dem2));
        let dem = MCD;
        let num = Number(num1) * (MCD / Number(dem1)) + Number(num2) * (MCD / Number(dem2));
        MCD = mcd(num, dem);
        dem = dem / MCD;
        num = num / MCD;
        return `${num}/${dem}`;
    }
    else if (typeof num1 === "number" &&
        typeof dem1 === "number" &&
        typeof num2 === "number" &&
        typeof dem2 === "number") {
        let MCD = mcd(dem1, dem2);
        let dem = MCD;
        let num = num1 * (MCD / dem1) + num2 * (MCD / dem2);
        return num / dem;
    }
}
function substractRationals(num1, dem1, num2, dem2) {
    if (typeof num1 === "string" &&
        typeof dem1 === "string" &&
        typeof num2 === "string" &&
        typeof dem2 === "string") {
        let MCD = mcd(Number(dem1), Number(dem2));
        let dem = MCD;
        let num = Number(num1) * (MCD / Number(dem1)) - Number(num2) * (MCD / Number(dem2));
        MCD = mcd(num, dem);
        dem = dem / MCD;
        num = num / MCD;
        return `${num}/${dem}`;
    }
    else if (typeof num1 === "number" &&
        typeof dem1 === "number" &&
        typeof num2 === "number" &&
        typeof dem2 === "number") {
        let MCD = mcd(dem1, dem2);
        let dem = MCD;
        let num = num1 * (MCD / dem1) - num2 * (MCD / dem2);
        return num / dem;
    }
}
function multiplyRationals(num1, dem1, num2, dem2) {
    if (typeof num1 === "string" &&
        typeof dem1 === "string" &&
        typeof num2 === "string" &&
        typeof dem2 === "string") {
        let dem = Number(dem1) * Number(dem2);
        let num = Number(num1) * Number(num2);
        let MCD = mcd(num, dem);
        dem = dem / MCD;
        num = num / MCD;
        return `${num}/${dem}`;
    }
    else if (typeof num1 === "number" &&
        typeof dem1 === "number" &&
        typeof num2 === "number" &&
        typeof dem2 === "number") {
        let dem = dem1 * dem2;
        let num = num1 * num2;
        return num / dem;
    }
}
function divideRationals(num1, dem1, num2, dem2) {
    if (typeof num1 === "string" &&
        typeof dem1 === "string" &&
        typeof num2 === "string" &&
        typeof dem2 === "string") {
        let dem = Number(dem1) * Number(num2);
        let num = Number(num1) * Number(dem2);
        let MCD = mcd(num, dem);
        dem = dem / MCD;
        num = num / MCD;
        return `${num}/${dem}`;
    }
    else if (typeof num1 === "number" &&
        typeof dem1 === "number" &&
        typeof num2 === "number" &&
        typeof dem2 === "number") {
        let dem = dem1 * num2;
        let num = num1 * dem2;
        return num / dem;
    }
}
console.log(addRationals(1, 4, 1, 2));
console.log(addRationals("1", "4", "1", "2"));
