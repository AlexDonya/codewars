function circleArea(radius) {
    const pi = Math.PI;
    const radiusSquare = Math.pow(radius, 2);
    if (typeof radius === 'number' && radius > 0) {
        const S = pi * radiusSquare;
        return +S.toFixed(2);
    } else {
        return false;
    }
};

console.log(circleArea(-1485.86));
console.log(circleArea(0));
console.log(circleArea(43.2673)); // returns 5881.25
console.log(circleArea(68)); // returns 14526.72
console.log(circleArea("number"));