function checkCreditCard(number) {
    if (typeof number === "number") {
        // Comprobamos si es del formato correcto
        if (number.toString.length != 16) {
            return undefined;
        }
    }
}
