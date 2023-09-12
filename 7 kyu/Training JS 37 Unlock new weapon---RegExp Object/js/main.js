function countAnimals(animals, count) {
    const result = [];

    for (let i = 0; i < count.length; i++) {
        let quantity = (animals.match(new RegExp(count[i],"g")) || []).length;
        // let quantity = animals.split(count[i]).length-1;

        result.push(quantity);
    }

    return result;
}

console.log(countAnimals("dog,cat", ["dog", "cat"])); // [1, 1]
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"])); // [1, 1, 0]
console.log(countAnimals("dog,dog,cat", ["dog", "cat"])); // [2, 1]
console.log(countAnimals("dog,dog,cat", ["pig", "cow"])); // [0, 0]