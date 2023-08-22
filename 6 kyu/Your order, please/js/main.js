// const str1 = "is2 Thi1s T4est 3a";
// const str2 = "4of Fo1r pe6ople g3ood th5e the2";
// const str3 = "";

// function order(words) {
//     if (words.length > 0) {
//         const findNumber = words.match(/[1-9]/g);
// console.log(findNumber);
// const arr = words.split(' ');
// let result = [];

// arr.map((item, i) => {
// const ind = findNumber.indexOf(i + 1);
// console.log(ind);
// result.push(arr[ind]);
// })

// const arr = words.split(' ');
// const sortArr = arr.sort();

// const objsInArr = [];
// arr.forEach(word => {
//     let obj = {};
//     let arr = word.split('');
//     for (let i = 0; i < arr.sort().length; i++) {
//         obj[i] = arr[i];
//     }
//     objsInArr.push(obj);
// });

// objsInArr.forEach(() => {
//     objsInArr.sort((a, b) => a['0'] - b['0']);
// })

// const sortArr = [];
// objsInArr.forEach(obj => {
//     let str = Object.values(obj);
//     sortArr.push(str);
// })

// console.log(objsInArr);

// arrsInArr.forEach(arr => {
//     arr.forEach(letter => {
//         const numEl = parseInt(letter.match(/\d+/));
//         console.log(numEl);
//     })
// })

//         return console.log(result);
//     } else {
//         return console.log(words);
//     }
// }

// Solutions in web

// The best Practices
// function order(words) {
//     return console.log(words.split(' ').sort(function (a, b) {
//         return a.match(/\d/) - b.match(/\d/);
//     }).join(' '));
// }

// function order(words) {
//     if (words.length == 0) { return words }
//     let wordsarr = words.split(' ');
//     let indarr = words.match(/\d/g);
//     let neword = [];
//     for (let i = 1; i <= indarr.length; i++) {
//         let ind = indarr.indexOf(i.toString());
//         neword.push(wordsarr[ind]);
//     }
//     return console.log(neword.join(' '));
// }

// function order(words) {
//     let arr = words.split(' ');
//     console.log(arr);

//     let result = [];

//     arr.forEach(word => {
//         let arrLetters = word.split('');
//         console.log(arrLetters);
//         let num = arrLetters.find(el => parseInt(el));
//         console.log(num);
//         result.push([word, parseInt(num)]);
//     })

//     console.log(result);

//     result.sort((a, b) => a[1] - b[1])
//         .map(x => x.splice(1, 1));
//     return console.log(result.join(' '));
// }


// order(str1);
// order(str2);
// order(str3);


// codewars version

// function order(words) {
//     let arr = words.split(' ');

//     let result = [];

//     arr.forEach(word => {
//         let arrLetters = word.split('');
//         let num = arrLetters.find(el => parseInt(el));
//         result.push([word, parseInt(num)]);
//     })

//     console.log(result);

//     result.sort((a, b) => a[1] - b[1])
//         .map(arr => arr.splice(1, 1));
//     return result.join(' ');
// }

const str1 = "is2 Thi1s T4est 3a";
const str2 = "4of Fo1r pe6ople g3ood th5e the2";
const str3 = "";


function order(words) {
    const arr = words.split(' ');
    const result = [];

    arr.forEach(word => {
        const arrLetters = word.split('');
        const num = arrLetters.find(el => parseInt(el));
        result.push([word, parseInt(num)]);
    });

    result.sort((a, b) => a[1] - b[1]).map(arr => arr.splice(1, 1));
    return console.log(result.join(' '));
}


order(str1);
order(str2);
order(str3);