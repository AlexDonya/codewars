function solution(number) {
    if (number > 0) {
        const arr = [];

        for (let i = 1; i < number; i++) {
            arr.push(i);
        }

        const r = [];

        arr.forEach(el => {
            el % 3 === 0 || el % 5 === 0 ? r.push(el) : null;
        })

        return r.length > 0 ? r.reduce((acc, n) => acc + n) : 0;
    } else {
        return 0;
    }
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));