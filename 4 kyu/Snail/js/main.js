const snail = (array, r) => {
    let steps = 1 + 2 * (array.length - 1);

    const result = [];

    let right = 1;
    let down = 2;
    let left = 3;
    let up = 4;

    let a = 0;
    let b = array.length - 1;

    for (let step = 1; step <= steps; step++) {

        if (step === right) {
            const arr = array[a];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== 0) {
                    result.push(arr[i]);
                    arr.splice(i, 1, 0);
                }
            }
            a += 1;
            right += 4;
        }

        if (step === down) {
            for (let i = 0; i < array.length; i++) {
                const arr = array[i];
                if (arr[arr.length - a] !== 0) {
                    result.push(arr[arr.length - a]);
                    arr.splice(arr.length - a, 1, 0);
                }
            }
            down += 4;
        }

        if (step === left) {
            const arr = array[b];
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i] !== 0) {
                    result.push(arr[i]);
                    arr.splice(i, 1, 0);
                }
            }
            b -= 1;
            left += 4;
        }

        if (step === up) {
            for (let i = array.length - 1; i > 0; i--) {
                const arr = array[i];
                if (arr[a - 1] !== 0) {
                    result.push(arr[a - 1]);
                    arr.splice(a - 1, 1, 0);
                }
            }
            up += 4;
        }
    }


    // console.log(array);
    // console.log(r);
    return result;
}

console.log(snail([
    [1]]));

console.log(snail([
    [1, 2],
    [3, 4]],
    [1, 2,
        4,
        3]));

/*
[1, 2,
4,
3]
*/ // 3 залома

console.log(snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]],
    [1, 2, 3,
        6, 9,
        8, 7,
        4,
        5]));

/*
[1, 2, 3, 
6, 9, 
8, 7, 
4, 
5]
*/ // 5 заломов

console.log(snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]],
    [1, 2, 3, 4, 5,
        10, 15, 20, 25,
        24, 23, 22, 21,
        16, 11, 6,
        7, 8, 9,
        14, 19,
        18, 17,
        12,
        13]));

/*
[1, 2, 3, 4, 5, 
10, 15, 20, 25, 
24, 23, 22, 21, 
16, 11, 6, 
7, 8, 9, 
14, 19, 
18, 17, 
12, 
13]
*/ // 9 заломов

console.log(snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]],
    [1, 2, 3, 4, 5, 6,
        7, 
        8, 
        9, 
        10, 
        11,
        12, 13, 14, 15, 16,
        17, 18, 19, 20,
        21, 22, 23, 24,
        25, 26, 27,
        28, 29, 30,
        31, 32,
        33, 34,
        35,
        36]));

/* 
[1, 2, 3, 4, 5, 6, 
7, 8, 9, 10, 11, 
12, 13, 14, 15, 16, 
17, 18, 19, 20, 
21, 22, 23, 24, 
25, 26, 27, 
28, 29, 30, 
31, 32, 
33, 34, 
35, 
36] 
*/ // 11 заломов

// console.log(snail());

console.log(snail([
    [47, 824, 607, 7, 894, 632, 311, 240, 795, 228],
    [802, 610, 581, 333, 983, 236, 520, 575, 24, 424],
    [614, 903, 533, 175, 804, 802, 319, 780, 197, 458],
    [477, 457, 187, 277, 150, 914, 579, 625, 82, 251],
    [880, 558, 901, 253, 988, 911, 542, 289, 117, 437],
    [690, 42, 265, 134, 996, 604, 763, 871, 519, 488],
    [518, 806, 778, 752, 989, 905, 66, 159, 397, 237],
    [193, 29, 470, 135, 522, 944, 788, 202, 259, 810],
    [682, 787, 632, 796, 845, 837, 290, 549, 32, 873],
    [365, 687, 689, 636, 101, 553, 918, 736, 335, 925]
], [ 47, 824, 607, 7, 894, 632, 311, 240, 795, 228, 424, 458, 251, 437, 488, 237, 810, 873, 925, 335, 736, 918, 553, 101, 636, 689, 687, 365, 682, 193, 518, 690, 880, 477, 614, 802, 610, 581, 333, 983, 236, 520, 575, 24, 197, 82, 117, 519, 397, 259, 32, 549, 290, 837, 845, 796, 632, 787, 29, 806, 42, 558, 457, 903, 533, 175, 804, 802, 319, 780, 625, 289, 871, 159, 202, 788, 944, 522, 135, 470, 778, 265, 901, 187, 277, 150, 914, 579, 542, 763, 66, 905, 989, 752, 134, 253, 988, 911, 604, 996 ]));

// console.log([47, 824, 607, 7, 894, 632, 311, 240, 795, 228, 424, 458, 251, 437, 488, 237, 810, 873, 925, 335, 736, 918, 553, 101, 636, 689, 687, 365, 682, 193, 518, 690, 880, 477, 614, 802, 610, 581, 333, 983, 236, 520, 575, 24, 197, 82, 117, 519, 397, 259, 32, 549, 290, 837, 845, 796, 787, 29, 806, 42, 558, 457, 903, 533, 175, 804, 319, 780, 625, 289, 871, 159, 202, 788, 944, 522, 135, 470, 778, 265, 901, 187, 277, 150, 914, 579, 542, 763, 66, 905, 989, 752, 134, 253, 988, 911, 604, 996].length);
// console.log([47, 824, 607, 7, 894, 632, 311, 240, 795, 228, 
//                                                        424, 
//                                                        458, 
//                                                        251, 
//                                                        437, 
//                                                        488, 
//                                                        237, 
//                                                        810, 
//                                                        873, 
//                                                        925, 
//           335, 736, 918, 553, 101, 636, 689, 687, 365, 
//                                                   682, 
//                                                   193, 
//                                                   518, 
//                                                   690, 
//                                                   880, 
//                                                   477, 
//                                                   614, 
//                                                   802, 610, 581, 333, 983, 236, 520, 575, 24, 
                                                  
//                                                   197, 
//                                                   82, 
//                                                   117,
//                                                   519, 
//                                                   397, 
//                                                   259, 
//                                                   32, 
//                 549, 290, 837, 845, 796, 632, 787, 
//                                               29, 
//                                               806, 
//                                               42, 
//                                               558, 
//                                               457, 
//                                               903, 533, 175, 804, 802, 319, 780, 
                                              
//                                               625, 
//                                               289, 
//                                               871, 
//                                               159, 
//                                               202, 
//                      788, 944, 522, 135, 470, 
//                                          778, 
//                                          265, 
//                                          901, 
//                                          187, 277, 150, 914, 579, 
                                         
//                                          542, 
//                                          763, 
//                                          66, 
//                            905, 989, 752, 
//                                      134, 
//                                      253, 988, 911, 
//                                      604, 
//                                 996].length);