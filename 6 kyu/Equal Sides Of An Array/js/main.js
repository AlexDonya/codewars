function findEvenIndex(arr) {
    let sum = 0;
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (leftSum === sum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));