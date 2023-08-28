function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    const arrStr = str.split('');
    for (let i of arrStr) {
        for (let j of vowels) {
            if (i === j) {
                count += 1;
            }
        }
    }

    return count;
}

console.log(getCount("abracadabra"));