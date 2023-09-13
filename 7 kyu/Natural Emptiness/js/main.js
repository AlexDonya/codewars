function repSet(n) {

    // let a = [];

    // for (let i = 0; i < n; i++) {
    //     a = [...a, a];
    // }
    // return a;

    if (n === 0) {
        return [];
    } else {
        const prevSet = repSet(n - 1);
        const newSet = [...prevSet];
        newSet.push(prevSet);
        return newSet;
    }
}

console.log(repSet(0)); // []
console.log(repSet(1)); // [[]]
console.log(repSet(2)); // [[], [[]]]
console.log(repSet(3)); // [[], [[]], [[], [[]]]]
console.log(repSet(4));
console.log(repSet(5));


// const a = [];
// const b = [[]];
// const c = [[], [[]]];
// const d = [[], [[]], [[], [[]]]];
// const e = [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]]];
// const f = [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]], [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]]]];

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)