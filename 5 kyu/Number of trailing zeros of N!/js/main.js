function zeros(n) {
    if (n > 0) {
        let zero = 0;
        while (n) {
            n = (n / 5) | 0;
            zero += n;
        }
        return zero;
    } else {
        return 0;
    }
}

console.log(zeros(0)); // 0
console.log(zeros(5)); // 1
console.log(zeros(6)); // 1
console.log(zeros(12)); // 2
console.log(zeros(30)); // 7
console.log(zeros(1000)); // 249
console.log(zeros(20)); // 4