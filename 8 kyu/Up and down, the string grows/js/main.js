const STRANGE_STRING = "ß";

const upDownLen = STRANGE_STRING.toUpperCase().toLowerCase().length;
const oriLen = STRANGE_STRING.length;

console.log(upDownLen == oriLen);
console.log(upDownLen);
console.log(oriLen);