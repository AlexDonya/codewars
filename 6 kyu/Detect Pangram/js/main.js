const pangram = 'The quick brown fox jumps over the lazy dog.';
const notpangram = 'This is not a pangram.';
const str = 'Abcdefghijklmnopqrstuvwxyz';
const strangeStr = 'ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ';
const strangeStrTwo = 'ABCD45 EFGHEFGH,IJK,LMN;@OPQR5&^?":6STUVW3XYZ';

function isPangram(string) {
    const alphabet = [];
    for (let letterCode = 97; letterCode < 123; letterCode++) {
        let letter = String.fromCharCode(letterCode);
        alphabet.push(letter);
    }

    const toLowerCase = string.toLowerCase();
    const arr = toLowerCase.split('');
    // console.log(arr);

    const arrWithoutRep = arr.filter((letter, pos) => {
        return arr.indexOf(letter) === pos;
    });
    // console.log(arrWithoutRep);

    const arrWithoutNum = [];
    arrWithoutRep.forEach((letter) => {
        const numEl = parseInt(letter.match(/\d+/));

        if (numEl != letter) {
            arrWithoutNum.push(letter);
        }
    })
    // console.log(arrWithoutNum);

    const newArr = arrWithoutNum.filter((letter) => {
        return letter !== ' ' && letter !== '.' && letter !== ',';
    })
    // console.log(newArr);

    if (newArr.length === alphabet.length) {
        return console.log('This string is a pangram!', true);
    } else {
        return console.log("This string isn't a pangram!", false);
    }
}

isPangram(pangram);
isPangram(notpangram);
isPangram(str);
isPangram(strangeStr);
isPangram(strangeStrTwo);


// codewars version

// function isPangram(string) {
//     const alphabet = [];
//     for (let letterCode = 97; letterCode < 123; letterCode++) {
//         let letter = String.fromCharCode(letterCode);
//         alphabet.push(letter);
//     }

//     const toLowerCase = string.toLowerCase();
//     const arr = toLowerCase.split('');

//     const arrWithoutRep = arr.filter((letter, pos) => {
//         return arr.indexOf(letter) === pos;
//     });

//     const arrWithoutNum = [];
//     arrWithoutRep.forEach((letter) => {
//         let numEl = parseInt(letter.match(/\d+/));

//         if (numEl != letter) {
//             arrWithoutNum.push(letter);
//         }
//     })

//     const newArr = arrWithoutNum.filter((letter) => {
//         return letter !== ' ' && letter !== '.' && letter !== ',';
//     })

//     if (newArr.length === alphabet.length) {
//         return true;
//     } else {
//         return false;
//     }
// }


// function isPangramCW(string) {
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
//         return console.log(string.indexOf(x) !== -1);
//     });
// }

function isPangramCW(str) {
    return console.log(str.toLowerCase().match(/([a-z])(?!.*\1)/g).length === 26);
}

isPangramCW(pangram);
isPangramCW(notpangram);
isPangramCW(str);
isPangramCW(strangeStr);
isPangramCW(strangeStrTwo);