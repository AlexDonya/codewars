// my decision
function wordPattern(word) {
    const lowerCaseWord = word.toLowerCase();

    const arr = lowerCaseWord.split('');

    const obj = new Set(arr);

    const uniqueArr = Array.from(obj);

    const object = { ...uniqueArr }

    const result = [];

    for (let j = 0; j < arr.length; j++) {
        for (let key in object) {
            if (object[key] === arr[j]) {
                result.push(key);
            }
        }
    }

    return result.join('.');
}

// codewars best decision
// const wordPattern = (word) => {
//     word = word.toLowerCase()
//     const set = [...new Set(word)]
//     return word.split('').map(e => set.indexOf(e)).join('.')
// }

console.log(wordPattern("hello")); // "0.1.2.2.3"
console.log(wordPattern("heLlo")); // "0.1.2.2.3"
console.log(wordPattern("helLo")); // "0.1.2.2.3"
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));
// "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13"