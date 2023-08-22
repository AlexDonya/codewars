function isOpposite(s1, s2) {
    let boolean = [];

    const arr1 = s1.split('');
    const arr2 = s2.split('');

    if (s1.toLowerCase() === s2.toLowerCase()) {
        if (arr1.length > 0 && arr2.length > 0) {
            if (arr1.length === arr2.length) {
                for (let i = 0; i < arr1.length; i++) {
                    for (let j = 0; j < arr2.length; j++) {
                        if (i === j) {
                            if (arr1[i] !== arr2[j]) {
                                boolean.push(true);
                            }
                        }
                    }
                }
                return boolean.length === arr1.length ? true : false;
            } else {
                return false;
            }
        } return false;
    } return false;
}

console.log(isOpposite("ab", "AB"));
console.log(isOpposite("aB", "Ab"));
console.log(isOpposite("aBcd", "AbCD"));
console.log(isOpposite("aBcde", "AbCD"));
console.log(isOpposite("AB", "Ab"));
console.log(isOpposite('', ''));
console.log(isOpposite('NuVCwZh', 'qefFYhF'));