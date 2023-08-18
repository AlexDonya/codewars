function drawStairs(n) {
    const i = 'I\n';
    const space = ' ';
    let arr = [];

    for (let j = 0; j < n; j++) {
        arr.push(space.repeat(j) + i);
    }

    arr[arr.length - 1] = space.repeat(n - 1) + 'I';
    return arr.join('');
}

console.log(drawStairs(1));
console.log(drawStairs(3));
console.log(drawStairs(5));