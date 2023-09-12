function cakes(recipe, available) {
    const booleanArr = [];
    const recipeArr = [];
    const availableArr = [];

    for (let ingredient in recipe) {
        recipeArr.push(ingredient);
    }

    for (let ingredient in available) {
        availableArr.push(ingredient);
    }

    for (let ing of recipeArr) {
        if (availableArr.includes(ing) && recipe[ing] <= available[ing]) {
            booleanArr.push(1);
        }
    }

    if (booleanArr.length === recipeArr.length) {
        const resultArr = [];
        for (let ing of recipeArr) {
            let count = available[ing] / recipe[ing];
            resultArr.push(Math.floor(count));
        }

        return Math.min.apply(null, resultArr);
    } else {
        return 0;
    }
}

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 },
    { flour: 400, sugar: 1200, eggs: 5, milk: 200 }));
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }));
console.log(cakes({ flour: 300, sugar: 150, milk: 100 },
    { sugar: 150, flour: 300, milk: 100 }));