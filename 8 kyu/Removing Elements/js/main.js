function removeEveryOther(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i + 1, 1);
    }

    return arr;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther([[1, 2]]));
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]));