function romanToDecimal(string) {
    if (/[^IVXLCDM]/.test(string))
        return undefined;
    if (/IIII|XXXX|CCCC|MMMM/.test(string))
        return undefined;
    if (/VV|LL|DD/.test(string))
        return undefined;
    if (/(IL|IC|ID|IM|VX|VL|VC|VD|VM|XD|XM|LC|LD|LM)/.test(string))
        return undefined;
    const romanValues = [
        { value: 1000, roman: "M" },
        { value: 500, roman: "D" },
        { value: 100, roman: "C" },
        { value: 50, roman: "L" },
        { value: 10, roman: "X" },
        { value: 5, roman: "V" },
        { value: 1, roman: "I" },
    ];
    let number = 0;
    for (let i = 0; i < string.length; i++) {
        let actual = 0;
        for (let j = 0; j < romanValues.length; j++) {
            if (string[i] === romanValues[j].roman) {
                actual = romanValues[j].value;
                break;
            }
        }
        let next = 0;
        if (i + 1 !== string.length) {
            let letter = string[i + 1];
            for (let j = 0; j < romanValues.length; j++) {
                if (letter === romanValues[j].roman) {
                    next = romanValues[j].value;
                    break;
                }
            }
        }
        if (actual >= next) {
            number += actual;
        }
        else {
            number -= actual;
        }
    }
    return number;
}
function decimalToRoman(number) {
    if (number < 1 || number % 1 !== 0) {
        return undefined;
    }
    let roman = "";
    const romanValues = [
        { value: 1000, roman: "M" },
        { value: 900, roman: "CM" },
        { value: 500, roman: "D" },
        { value: 400, roman: "CD" },
        { value: 100, roman: "C" },
        { value: 90, roman: "XC" },
        { value: 50, roman: "L" },
        { value: 40, roman: "XL" },
        { value: 10, roman: "X" },
        { value: 9, roman: "IX" },
        { value: 5, roman: "V" },
        { value: 4, roman: "IV" },
        { value: 1, roman: "I" },
    ];
    while (number > 0) {
        for (let i = 0; i < romanValues.length; i++) {
            if (number >= romanValues[i].value) {
                roman += romanValues[i].roman;
                number -= romanValues[i].value;
                break;
            }
        }
    }
    return roman;
}
console.log(romanToDecimal("CM"));
console.log(romanToDecimal("MCMXCIV"));
console.log(romanToDecimal("MMMCMXCIX"));
console.log(romanToDecimal("MMXXIV"));
console.log(decimalToRoman(1995));
console.log(decimalToRoman(2014));
console.log(decimalToRoman(-1995));
