function distinct(a) {
    // 1st solution
    // const arr = new Set(a);
    // return [...arr];

    // 2nd solution
    // return [...new Set(a)];

    // 3d solution
    // const arr = new Set(a);
    // const uniq = Array.from(arr);

    // return uniq;

    // 4th solution
    // return a.filter((el, id) => a.indexOf(el) === id);

    // 5th solution
    // return a.reduce((acc, currentValue) => {
    //     acc.indexOf(currentValue) === -1 && acc.push(currentValue);
    //     return acc;
    // }, []);

    // 6th solution
    const seen = {};
    const result = [];
    let j = 0;

    for (let i = 0; i < a.length; i++) {
        const num = a[i];
        const key = `${num}`;
        if (!seen[key]) {
            seen[key] = 1;
            result[j++] = num;
        }
    }

    return result;
}

console.log(distinct([1]));
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));
console.log(distinct([1, 2, 2, 3, 4, 5, 5, 6, 7, 6]));