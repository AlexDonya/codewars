function hammingWeight(x) {
    const arr = [];

    function count(n) {
        let remainder = n % 2;
        arr.push(Math.floor(remainder));
        n = Math.floor(n) / 2;
        return n < 1 ? arr.reduce((acc, v) => acc + v) : count(n);
    }

    return count(x);
}

console.log(hammingWeight(10)); // 1010  => 2
console.log(hammingWeight(21)); // 10101 => 3
console.log(hammingWeight(19)); // 10011 => 3
console.log(hammingWeight(1)); // 1 => 1