function spacey(array) {
    const arr = [array[0]];

    for (let i = 1; i < array.length; i++) {
        arr.push(arr[i - 1] + array[i]);
    }

    return arr;
}

console.log(spacey(['kevin', 'has','no','space']));
console.log(spacey(['this','cheese','has','no','holes']));