function doubleChar(str) {
    return str.split('').map(a => a + a).join('');
}

console.log(doubleChar("abcd"));