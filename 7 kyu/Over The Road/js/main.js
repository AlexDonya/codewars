function overTheRoad(address, n) {
    if (address === 1) {
        return n * 2;
    } else {
        return n * 2 - (address - 1);
    }
}

console.log(overTheRoad(1, 3));
console.log(overTheRoad(3, 3));
console.log(overTheRoad(3, 5));
console.log(overTheRoad(7, 11));