// the object LETTERS is preloaded
// LETTERS['B'] === 'Bravo', etc
function nato(word) {
    const arrLetter = word.toLowerCase().split('');
    const arrAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arrNATO = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu'];
    const arrResult = [];
    for (let i = 0; i < arrLetter.length; i++) {
        for (let j = 0; j < arrAlphabet.length; j++) {
            if (arrLetter[i] === arrAlphabet[j]) {
                arrResult.push(arrNATO[j]);
            }
        }
    }

    return arrResult.join(' ');
}

console.log(nato("hi"));
console.log(nato("abc"));
console.log(nato("babble"));
console.log(nato("Banana"));