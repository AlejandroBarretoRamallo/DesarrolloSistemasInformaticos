function checkCreditCard(number) {
    let str_number = typeof number === "number" ? number.toString() : number;
    str_number = str_number.replace(/ /g, "");
    if (!/^\d{16}$/.test(str_number)) {
        return undefined;
    }
    let sum = 0;
    let alternate = false;
    for (let i = str_number.length - 1; i >= 0; i--) {
        let digit = Number(str_number[i]);
        if (alternate) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        alternate = !alternate;
    }
    return sum % 10 === 0 ? "valid" : "notValid";
}
console.log(checkCreditCard("8273 1232 7352 0569 0123"));
console.log(checkCreditCard("8273 0569"));
console.log(checkCreditCard("82730569"));
console.log(checkCreditCard("4539 3195 0343 6467"));
console.log(checkCreditCard(4539319503436467));
console.log(checkCreditCard("8273 1232 7352 0569"));
console.log(checkCreditCard(8273123273520569));
