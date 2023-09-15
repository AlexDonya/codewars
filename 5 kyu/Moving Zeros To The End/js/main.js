function moveZeros(arr) {
    const a = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            a.push(arr[i]);
        }
        if (arr[i] === 0) {
            count += 1;
        }
    }

    for (let i = 0; i < count; i++) {
        a.push(0);
    }

    return a;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));