function addLength(str) {
    let resultArr = [];
    let arr = str.split(' ');

    arr.forEach(word => {
        let lenWord = +word.length;
        resultArr.push(word + ' ' + lenWord);
    });


    return resultArr;
}

// CODEWARS BEST PRACTICE
// function addLength(str) {
//     return str.split(" ").map(s => `${s} ${s.length}`)
// }

console.log(addLength('apple ban'));
console.log(addLength('you will win'));