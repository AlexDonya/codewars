function loneliest(str) {

    const arr = str.split('');
    const counterSpaceArr = [];

    let counterSpace = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            counterSpace += 1;
        }
        if (arr[i + 1] !== ' ') {
            if (counterSpace > 0) {
                counterSpaceArr.push(counterSpace);
                arr.splice(i, 1, counterSpace);
            }
            counterSpace = 0;
        }
    }

    const newArr = [];

    arr.forEach(el => {
        if (el !== ' ') {
            newArr.push(el);
        }
    })

    const result = [];

    newArr.forEach((el, i, arr) => {
        if (typeof arr[i - 1] === 'number' && typeof arr[i + 1] === 'number' && typeof arr[i] !== 'number') {
            result.push([arr[i - 1], arr[i], arr[i + 1]]);
        }
    });

    // console.log(result);

    for (let i = 0; i < result.length; i++) {
        if (result[i][0] === 1 && result[i][2] > 1 || result[i][2] === 1 && result[i][0] > 1) {
            result.splice(i, 1);
        }
    }

    // console.log(arr);
    // return counterSpaceArr;
    // return arr;
    // return newArr;
    return result;
}

console.log(loneliest('a')); // ['a']
console.log(loneliest('abc d   ef  g   h i j      ')); // ['g']
console.log(loneliest('a   b   c ')); // ['b']
console.log(loneliest('  abc  d  z    f gk s ')); // ['z']
console.log(loneliest('a  b  c  de  ')); // ['b', 'c']
console.log(loneliest('abc')); // ['a', 'b', 'c']