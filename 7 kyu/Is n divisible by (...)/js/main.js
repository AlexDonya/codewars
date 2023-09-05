function isDivisible(...arr) {
    let array = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] % arr[i]) {
            array.push(false);
        } else {
            array.push(true);
        }
    }

    let result = true;

    for (let i of array) {
        if (i === false) {
            result = false;
        } else {
            result = true;
        }
    }
    return result;
}

console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(8, 3, 4, 2, 5)); // false
console.log(isDivisible()); // false