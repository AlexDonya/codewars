const flip = (d, a) => {

    if (d === 'R') {
        return a.sort((a, b) => a - b);
    }

    return a.sort((a, b) => b - a);
}

console.log(flip('R', [3, 2, 1, 2]));
console.log(flip('L', [1, 4, 5, 3, 5]));