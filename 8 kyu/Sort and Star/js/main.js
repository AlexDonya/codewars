function twoSort(s) {
    s.sort();
    const wordArr = s[0].split('');
    // const arr = [];
    // wordArr.forEach(l => {
    //     arr.push(l);
    //     arr.push('***');
    // });
    // arr.pop();

    return wordArr.join('***');
    // return arr.join('');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
// 'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));
//  'a***r***e'