// my solution for codewars
// function sumMul(n, m) {
//     let arr = [];
//     let result = 0;
//     if (m <= 0) {
//         return 'INVALID';
//     } else {
//         for (let num = n; num < m; num += n) {
//             arr.push(num);
//         }

//         for (let num of arr) {
//             result += num;
//         }

//         return result;
//     }
// }

// improving my solution on codewars
function sumMul(n, m) {
    let result = 0;
    if (n >= m) {
        return 'INVALID';
    } else {
        for (let num = n; num < m; num += n) {
            result += num;
        }
        return result;
    }
}

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(4, 123));
console.log(sumMul(4, -7));
console.log(sumMul(40, 30));