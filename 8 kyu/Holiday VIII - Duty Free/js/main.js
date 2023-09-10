function dutyFree(normPrice, discount, hol) {
    const saving = hol / (normPrice * discount / 100);
    return Math.floor(saving);
}

console.log(dutyFree(12, 50, 1000)); // 166
console.log(dutyFree(17, 10, 500)); // 294
console.log(dutyFree(24, 35, 3000)); // 357