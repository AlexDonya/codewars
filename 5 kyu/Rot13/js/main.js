function rot13(message) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const result = [];

    const messArrOrig = message.split('');
    const messArrToLowerCase = message.toLowerCase().split('');

    for (let i = 0; i < messArrToLowerCase.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] === messArrToLowerCase[i] && j < 13) {
                result.push(alphabet[j + 13]);
            } else if (alphabet[j] === messArrToLowerCase[i] && j > 12) {
                result.push(alphabet[j - 13]);
            }
        }
        if (/\W|\d|_/.test(messArrToLowerCase[i])) {
            result.push(messArrToLowerCase[i]);
        }
    }

    for (let i = 0; i < messArrOrig.length; i++) {
        if (messArrOrig[i] !== messArrToLowerCase[i]) {
            result.splice(i, 1, result[i].toUpperCase());
        }
    }

    return result.join('');
}

console.log(rot13('test')); // "grfg"
console.log(rot13('Test')); // "Grfg"
console.log(rot13('te1s3t')); // "gr1f3g"
console.log(rot13('te1s3t#')); // "gr1f3g#"
console.log(rot13('_{~2lf6qs1@o!a.q')); // '_{~2ys6df1@b!n.d'