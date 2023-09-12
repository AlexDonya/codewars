function twoHighest(arr) {
    arr.sort((a, b) => b - a);
    const obj = new Set(arr);
    const newArr = Array.from(obj);
    newArr.splice(2);
    return newArr;
}

console.log(twoHighest([15]));
console.log(twoHighest([15, 20, 20, 17]));