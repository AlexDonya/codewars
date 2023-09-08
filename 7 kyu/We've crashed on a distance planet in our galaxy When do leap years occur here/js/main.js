function isLeapYear(duration, year) {
    const multiply = duration * year;
    if (multiply % 2 === 1) {
        return true;
    }
    return false;
}

console.log(isLeapYear(365.25, 2018)); // false, '2018 is not a leap year on Earth'
console.log(isLeapYear(365.25, 2020)); // true,  '2020 is a leap year on Earth'
console.log(isLeapYear(124.5, 102)); // true,  '102 is a leap year on Earth'
console.log(isLeapYear(124.125, 102)); // false, '102.125 is a leap year on Earth'