function sortIt(arr) {
    //coding here...

    const res = [...arr];
    res.sort((a, b) => {
        let n = arr.filter(x => x === a).length,
            m = arr.filter(y => y === b).length;
        return n == m ? b - a : n - m;
    });
    return res;
}

const arr1 = [1, 1, 1, 2, 2, 3],
    copy1 = arr1.slice(),
    arr2 = [1, 1, 1, 2, 2, 2, 3, 3, 3],
    copy2 = arr1.slice(),
    arr3 = [1, 2, 3, 4, 4, 5, 5, 6, 6],
    copy3 = arr1.slice(),
    arr4 = [1, 3, 3, 5, 2, 2, 4, 6, 6, 7, 7, 7],
    copy4 = arr1.slice();

console.log(sortIt(arr1)); // [3,2,2,1,1,1]
console.log(sortIt(arr2)); // [3,3,3,2,2,2,1,1,1]
console.log(sortIt(arr3)); // [3,2,1,6,6,5,5,4,4]
console.log(sortIt(arr4)); // [5,4,1,6,6,3,3,2,2,7,7,7]
console.log(sortIt(arr4, copy4)); // "You should not modify the original array"