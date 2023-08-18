function splitAndMerge(string, separator) {
    let arr = string.split(' ');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let wordArr = arr[i].split('');
        let wordArrResult = [];

        for (let j = 0; j < wordArr.length; j++) {
            wordArrResult.push(wordArr[j], separator);
        }

        wordArrResult.splice(wordArrResult.length - 1);
        result.push(wordArrResult.join(''));
    }

    return result.join(' ');
}

// codewars best practice
// function splitAndMerge(str, sp) {
//     return str.split(" ").map(word => word.split("").join(sp)).join(" ");
// }

// codewars good practice
// function splitAndMerge(str, sp) {
//     let words = str.split(' ');
//     let arr = [];
//     let res = [];
//     for (i = 0; i < words.length; i++) {
//         arr.push(words[i].split('').join(sp));
//     }
//     res = arr.join(' ');
//     return res;
// }

console.log(splitAndMerge("My name is John", " ")); // "M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John", "-")); // "M-y n-a-m-e i-s J-o-h-n"
console.log(splitAndMerge("Hello World!", ".")); // "H.e.l.l.o W.o.r.l.d.!"
console.log(splitAndMerge("Hello World!", ",")); // "H,e,l,l,o W,o,r,l,d,!"