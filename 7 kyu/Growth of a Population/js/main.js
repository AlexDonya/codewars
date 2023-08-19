// codewars version 1 do...while
// function nbYear(p0, percent, aug, p) {
//     let year = 1;
//     let growthPop = p0 + (p0 * (percent / 100)) + aug;

//     do {
//         growthPop = growthPop + (growthPop * (percent / 100)) + aug;
//         year += 1;
//     } while (growthPop <= p)

//     return year;
// }

// codewars version 2 cicle for
// function nbYear(p0, percent, aug, p) {
//     let year;
//     let growthPop = p0 + (p0 * (percent / 100)) + aug;

//     for (let i = 2; growthPop <= p; i++) {
//         year = i;
//         growthPop = growthPop + (growthPop * (percent / 100)) + aug;
//     }

//     return year;
// }

// codewars version 3 recucrsion
// let year = 0;
// function nbYear(p0, percent, aug, p) {
//     let growthPop = p0 + (p0 * (percent / 100)) + aug;
//     p0 = growthPop;
//     year += 1;

//     if (growthPop >= p) {
//         return year;
//     }
//     nbYear(p0, percent, aug, p);
//     return year;
// }

// codewars version 4 in web
// function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     for (years; p0 < p; years++) {
//         p0 += p0 * (percent / 100) + aug;
//     }
//     return years;
// }

// codewars version 5 in web
// function nbYear(p0, percent, aug, p, years = 0) {
//     return p0 >= p ? years : nbYear(Math.floor(p0 + p0 * (percent / 100)) + aug,
//         percent,
//         aug,
//         p,
//         years + 1
//     );
// }

// codewars best version
function nbYear(p0, percent, aug, p) {

    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
// nbYear(1500, 5, 100, 5000);
// nbYear(1500000, 2.5, 10000, 2000000);
// nbYear(1500000, 0.25, 1000, 2000000);