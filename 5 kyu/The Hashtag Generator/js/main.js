function generateHashtag(str) {
    const arrOne = str.split(' ');
    const arrTwo = [];
    for (let w of arrOne) {
        if (w !== '') {
            arrTwo.push(w);
        }
    }

    const arrThree = arrTwo.join('').split('');

    if (arrThree.length >= 140 || str.length === 0 || str === ' ' || arrTwo.length === 0) {
        return false;
    }

    const arrFour = [];

    for (let i = 0; i < arrTwo.length; i++) {
        const arr = arrTwo[i].split('');
        arr.splice(0, 1, arr[0].toUpperCase());
        arrFour.push(arr.join(''));
    }

    arrFour.unshift('#');

    return arrFour.join('');
}

console.log(generateHashtag(" "));
console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("d"));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));