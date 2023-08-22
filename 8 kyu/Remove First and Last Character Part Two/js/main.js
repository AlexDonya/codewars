function array(string) {
    // my solution
    let arr = string.split(',');
    arr.forEach((a, i, arr) => arr[i] !== ',' ? a : arr.splice(i, 1));

    if (arr.length >= 3) {
        arr.shift();
        arr.pop();
    } else {
        return null;
    }

    return arr.join(' ');

    // best solution on codewras
    // return string.split(",").slice(1, -1).join(" ") || null;
}

console.log(array(''));
console.log(array('1'));
console.log(array('A1,B2'));
console.log(array('1,2,3'));
console.log(array('1,2,3,4'));
console.log(array('A1,B2,C3,D4,E5'));
console.log(array('A,1,23,456,78,9,Z'));