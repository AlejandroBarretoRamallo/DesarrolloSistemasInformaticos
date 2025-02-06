function checkCreditCard(number) {
    let str_number = "";
    if (typeof number === "number") {
        str_number = number.toString();
    }
    else {
        str_number = number;
    }
    str_number = str_number.replace(/ /g, "");
    if (str_number.length != 16) {
        return undefined;
    }
    let sum = 0;
    for (let i = 0; i < str_number.length; i = i + 2) {
        let toSum = Number(str_number[i]) * 2;
        toSum > 9 ? (toSum -= 9) : (sum += toSum);
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
