function solution(list) {

    const result = [];

    for (let i = 0; i < list.length; i++) {
        let arr = [];
        
        arr.push(list[i]);
        
        let acc = 1;
        for (let j = 1; j < list.length; j++) {
            if (list[i] + acc === list[j]) {
                arr.push(list[j]);
                acc += 1;
            }
        }

        if (arr.length < 3) {
            for (let i = 0; i < arr.length; i++) {
                result.push(arr[i]);
            }
        } else {
            result.push(arr);
        }

        list.splice(i, arr.length);
        i = -1;
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i].length > 2) {
            result[i].splice(1, result[i].length - 2);
        }
    }

    const str = [];

    for (let i = 0; i < result.length; i++) {
        if (typeof result[i] === 'object') {
            str.push(result[i].join('-'));
        } else {
            str.push(result[i]);
        }
    }

    return str.join(',');
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// "-6,-3-1,3-5,7-11,14,15,17-20" // 7 parts

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// "-10--8,-6,-3-1,3-5,7-11,14,15,17-20" // 8 parts
