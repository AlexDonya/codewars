function trim(str, size) {
    if (str.length <= size) {
        return str;
    } else {
        const arr = str.split('');
        arr.length = size;

        if (arr.length > 3) {
            arr.splice(size - 3, 3);
        }

        arr.push('...')

        return arr.join('');
    }
}

console.log(trim("Creating kata is fun", 14)); // "Creating ka..."
console.log(trim("He", 1));
console.log(trim("Code Wars is pretty rad", 50));
console.log(trim("svNfb kCUid", 6)); // 'svN...'