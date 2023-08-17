function stringy(size) {
    let arr = [];
    const one = 1;
    const zero = 0;

    for (let i = 0; i < size; i++) {
        arr.push(one);
        arr.push(zero);
    }
    arr.splice(size);
    const string = arr.join('');

    return string;
}

console.log(stringy(6));
console.log(stringy(4));
console.log(stringy(12));