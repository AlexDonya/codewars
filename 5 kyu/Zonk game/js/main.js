function getScore(dice) {
    let result = 0;

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;

    for (let num of dice) {
        if (num === 1) {
            count1 += 1;
        }
        if (num === 2) {
            count2 += 1;
        }
        if (num === 3) {
            count3 += 1;
        }
        if (num === 4) {
            count4 += 1;
        }
        if (num === 5) {
            count5 += 1;
        }
        if (num === 6) {
            count6 += 1;
        }
    }

    if (count1 < 3) {
        result += 100 * count1;
    } else if (count1 === 3) {
        result += 1000;
    } else if (count1 > 3) {
        result += 1000 + (1000 * (count1 - 3));
    }

    if (count2 === 3) {
        result += 200;
    } else if (count2 > 3) {
        result += 200 + (200 * (count2 - 3));
    }

    if (count3 === 3) {
        result += 300;
    } else if (count3 > 3) {
        result += 300 + (300 * (count3 - 3));
    }

    if (count4 === 3) {
        result += 400;
    } else if (count4 > 3) {
        result += 400 + (400 * (count4 - 3));
    }

    if (count5 < 3) {
        result += 50 * count5;
    } else if (count5 === 3) {
        result += 500;
    } else if (count5 > 3) {
        result += 500 + (500 * (count5 - 3));
    }

    if (count6 === 3) {
        result += 600;
    } else if (count6 > 3) {
        result += 600 + (600 * (count6 - 3));
    }

    let count = 0;
    const arr = [count1, count2, count3, count4, count5, count6];

    for (let num of arr) {
        if (num === 2) {
            count += 1;
        }
    }

    if (count === 3 && count1 < 1 && count5 < 1) {
        result += 750;
    } else if (count === 3 && count1 > 0 && count5 > 0) {
        result += 450;
    } else if (count === 3 && count1 > 0) {
        result += 550;
    } else if (count === 3 && count5 > 0) {
        result += 650;
    }

    if (count1 === 1 && count2 === 1 && count3 === 1 && count4 === 1 && count5 === 1 && count6 === 1) {
        result += 850;
    }

    return result;
}

// const obj = {
//     1: count1,
//     2: count2,
//     3: count3,
//     4: count4,
//     5: count5,
//     6: count6,
// }

// console.log(JSON.stringify(obj, null, ' '));
// console.log(dice);
// console.log(count);

console.log(getScore([1])); // 100
console.log(getScore([2])); // 0
console.log(getScore([3])); // 0
console.log(getScore([4])); // 0
console.log(getScore([5])); // 50
console.log(getScore([6])); // 0
console.log(getScore([1, 1])); // 200
console.log(getScore([5, 5])); // 100
console.log(getScore([1, 1, 1])); // 1000
console.log(getScore([1, 2, 3, 4, 5, 6])); // 1000
console.log(getScore([2, 2, 3, 3, 6, 6])); // 750
console.log(getScore([3, 2, 6, 4, 4, 6])); // 0

console.log('------------------------------------------')

console.log(getScore([1, 1, 2, 2, 3, 3])); // 750
console.log(getScore([4, 4, 5, 5, 6, 6])); // 750

console.log(getScore([2, 2])); // 0
console.log(getScore([1, 2, 1])); // 100
console.log(getScore([1, 1, 1, 1])); // 2000
console.log(getScore([1, 1, 1, 1, 1])); // 3000
console.log(getScore([1, 1, 1, 1, 1, 1])); // 4000
console.log(getScore([3, 1, 1, 1])); // 1000



console.log(getScore([5, 1, 1, 1])); // 1050
console.log(getScore([5, 5, 5, 1])); // 600