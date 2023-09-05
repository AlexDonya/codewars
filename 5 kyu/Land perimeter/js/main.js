function landPerimeter(arr) {
    let per = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {
                per += 4;
                if (j > 0 && arr[i][j - 1] === 'X') {
                    per -= 2;
                }
                if (i > 0 && arr[i - 1][j] === 'X') {
                    per -= 2;
                }
            }
        }
    }

    return `Total land perimeter: ${per}`;
}

console.log(landPerimeter(
    ['XOOXO',
        'XOOXO',
        'OOOXO',
        'XXOXO',
        'OXOOO'])); // "Total land perimeter: 24"
console.log(landPerimeter(
    ['XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'])); // "Total land perimeter: 18"
console.log(landPerimeter(
    ["OXOOOX",
    "OXOXOO",
    "XXOOOX",
    "OXXXOO",
    "OOXOOX",
    "OXOOOO",
    "OOXOOX",
    "OOXOOO",
    "OXOOOO",
    "OXOOXX"])); // "Total land perimeter: 60"
console.log(landPerimeter(
    ["OXOOO",
    "OOXXX",
    "OXXOO",
    "XOOOO",
    "XOOOO",
    "XXXOO",
    "XOXOO",
    "OOOXO",
    "OXOOX",
    "XOOOO",
    "OOOXO"])); // "Total land perimeter: 52"
console.log(landPerimeter(
    ["XXXXXOOO",
    "OOXOOOOO",
    "OOOOOOXO",
    "XXXOOOXO",
    "OXOXXOOX"])); // "Total land perimeter: 40"
console.log(landPerimeter(
    ["XOOOXOO",
    "OXOOOOO",
    "XOXOXOO",
    "OXOXXOO",
    "OOOOOXX",
    "OOOXOXX",
    "XXXXOXO"])); // "Total land perimeter: 54"
console.log(landPerimeter(
    ["OOOOXO",
    "XOXOOX",
    "XXOXOX",
    "XOXOOO",
    "OOOOOO",
    "OOOXOO",
    "OOXXOO"])); // "Total land perimeter: 40"