const arr1 = [5, 8, 12, 19, 22];
const arr2 = [15, 28, 4, 2];
const arr3 = [3, 87, 45, 12, 7];
const arr4 = [23, 71, 33, 82, 1];
const arr5 = [52, 76, 14, 12, 4];
const arr6 = [52, 14, 4];


function sumTwoSmallestNumbers(numbers) {
    let sum;
    if (numbers.length >= 4) {
        numbers.sort((a, b) => a - b);
        sum = numbers[0] + numbers[1];
    }
    return console.log(sum);
}

sumTwoSmallestNumbers(arr1);
sumTwoSmallestNumbers(arr2);
sumTwoSmallestNumbers(arr3);
sumTwoSmallestNumbers(arr4);
sumTwoSmallestNumbers(arr5);
sumTwoSmallestNumbers(arr6);


// codewars version
// function sumTwoSmallestNumbers(numbers) {
//     let sum;
//     if (numbers.length >= 4) {
//         numbers.sort((a, b) => a - b);
//         sum = numbers[0] + numbers[1];
//     }
//     return sum;
// }