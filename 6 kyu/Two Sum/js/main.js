function twoSum(numbers, target) {
    const arr = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                arr.push(i);
                arr.push(j);
            }
        }
    }

    const obj = new Set(arr);
    const uniqueArr = Array.from(obj);
    uniqueArr.length > 2 ? uniqueArr.pop() : null;

    return uniqueArr;
}

console.log(twoSum([1, 2, 3], 4)); // [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1 , 2]
console.log(twoSum([2, 2, 3], 4)); // [0, 1]
console.log(twoSum([2, 3, 1], 3)); // [0, 2]