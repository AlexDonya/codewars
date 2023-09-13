function repSet(n) {
    const arr = [];
    // let count = 0;
    // if (n === 0) {
    //     return [];
    // } else {
    //     arr.push([]);
    //     count += 1;
    //     n = n - 1;
    //     if (count === n) {
    //         return arr;
    //     } else {
    //         repSet(n);
    //     }
    // }

    function multi(m) {
        if (m === 0) {
            return arr;
        } else {
            const a = [];
            for (let i = 0; i < n; i++) {
                arr.push(a);
                a.push([]);
            }
            return arr;
        }
    }

    // for (let i = 0; i < n; i++) {
    //     const a = [];
    //     for (let j = 0; j < n; j++) {
    //         a.push([]);
    //     }
    //     arr.push(a)
    // }

    return multi(n);
}

console.log(repSet(0)); // []
console.log(repSet(1)); // [[]]
console.log(repSet(2)); // [[], [[]]]
console.log(repSet(3)); // [[], [[]], [[], [[]]]]