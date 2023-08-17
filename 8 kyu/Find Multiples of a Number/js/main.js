function findMultiples(integer, limit) {
    let arr = [];
    for (let num = integer; num <= limit; num += integer) {
        arr.push(num);
    }

    return arr;
}

console.log(findMultiples(5, 25));
console.log(findMultiples(1, 2));
console.log(findMultiples(5, 7));
console.log(findMultiples(4, 27));
console.log(findMultiples(11, 54));