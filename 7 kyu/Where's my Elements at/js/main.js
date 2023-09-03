const elementLocation = (begin, end, index, size) => {
    const arr = [];
    for (let i = begin; i < end; i += size) {
        arr.push(i);
    }

    if (index >= arr.length || index < 0) {
        return 'error';
    } else {
        return arr[index];
    }
}

// console.log(parseInt('0x1000', 16), parseInt('0x1040', 16), parseInt('0x1018', 16),
//     parseInt('0x3', 16), parseInt('0x8', 16));
// console.log(parseInt('0x2000', 16), parseInt('0x2100', 16), parseInt('0x200C', 16),
//     parseInt('0x3', 16), parseInt('0x4', 16));


console.log(elementLocation(0x1000, 0x1040, 0x3, 0x8)); // 0x1018
console.log(elementLocation(0x2000, 0x2100, 0x3, 0x4)); // 0x200C
console.log(elementLocation(0x2000, 0x2100, 0x0, 0x4)); // 0x2000
console.log(elementLocation(0x1000, 0x1040, 0x8, 0x8)); // throws Error
console.log(elementLocation(0x1000, 0x1040, 0x7, 0x8)); // 