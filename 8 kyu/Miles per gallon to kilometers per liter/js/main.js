function converter(mpg) {
    const gallonToLitres = 4.54609188;
    const mileToKm = 1.609344;

    const kpl = mpg * mileToKm / gallonToLitres;

    return +kpl.toFixed(2);
}

console.log(converter(10));
console.log(converter(20));
console.log(converter(30));