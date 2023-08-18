function pipeFix(numbers) {
    const first = numbers[0];
    const last = numbers[numbers.length - 1];
    let arr = [];

    for (let i = first; i <= last; i++) {
        arr.push(i);
    }

    return arr;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([1, 2, 3, 12]));
console.log(pipeFix([6, 9]));
console.log(pipeFix([-1, 4]));
console.log(pipeFix([1, 2, 3]));