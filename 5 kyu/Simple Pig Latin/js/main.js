function pigIt(str) {
    const result = [];
    const arrStr = str.split(' ');
    for (let i = 0; i < arrStr.length; i++) {
        let arrWord = arrStr[i].split('');
        arrWord.push('');
        for (let j = 0; j < arrWord.length; j++) {
            arrWord.splice(arrWord.length - 1, 1, arrWord[0]);
        }
        arrWord.splice(0, 1);
        // arrWord.push('ay');
        if (!arrWord.includes('!') && !arrWord.includes('?')) {
            arrWord.push('ay');
        }

        const word = arrWord.join('');
        result.push(word);
        // result.push(arrWord);
    }

    // return result;
    // return arrStr;
    return result.join(' ');
}

// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('This is my string'));
console.log(pigIt('O tempora o mores !'));


// best practice codewars
// function pigIt(str) {
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }