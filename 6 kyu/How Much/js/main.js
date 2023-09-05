function howMuch(m, n) {
    const arr = [];
    const boats = 7;
    const cars = 9;
    const restBuyBoats = 2;
    const restBuyCars = 1;

    const money = [];
    const costBoat = [];
    const costCar = [];

    const costBoatResult = [];
    const costCarResult = [];

    if (n >= m) {
        for (let i = m; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                i - j * boats === restBuyBoats ? costBoat.push(j) : null;
                i - j * boats === restBuyBoats ? money.push(i) : null;

                i - j * cars === restBuyCars ? costCar.push(j) : null;
                i - j * cars === restBuyCars ? money.push(i) : null;
            }
        }
    } else {
        for (let i = n; i <= m; i++) {
            for (let j = 1; j <= m; j++) {
                i - j * boats === restBuyBoats ? costBoat.push(j) : null;
                i - j * boats === restBuyBoats ? money.push(i) : null;

                i - j * cars === restBuyCars ? costCar.push(j) : null;
                i - j * cars === restBuyCars ? money.push(i) : null;
            }
        }
    }

    for (let i = 0; i < money.length; i++) {
        for (let j = 0; j < costBoat.length; j++) {
            money[i] - costBoat[j] * boats === restBuyBoats ? costBoatResult.push(costBoat[j]) : null;
        }

        for (let j = 0; j < costCar.length; j++) {
            money[i] - costCar[j] * cars === restBuyCars ? costCarResult.push(costCar[j]) : null;
        }
    }

    const arrMoney = [];

    for (let i = 0; i < money.length; i++) {
        money[i] === money[i + 1] ? arrMoney.push(money[i]) : null;
    }

    const arrCostBoats = [];

    for (let i = 0; i < costBoatResult.length; i++) {
        costBoatResult[i] === costBoatResult[i + 1] ? arrCostBoats.push(costBoatResult[i]) : null;
    }

    const arrCostCars = [];

    for (let i = 0; i < costCarResult.length; i++) {
        costCarResult[i] === costCarResult[i + 1] ? arrCostCars.push(costCarResult[i]) : null;
    }

    if (arrMoney.length === arrCostBoats.length && arrMoney.length === arrCostCars.length && arrCostBoats.length === arrCostCars.length) {
        for (let i = 0; i < arrMoney.length; i++) {
            arr.push([`M: ${arrMoney[i]}`, `B: ${arrCostBoats[i]}`, `C: ${arrCostCars[i]}`]);
        }
    }

    return arr;
}

// console.log(howMuch(1, 100)); // [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
console.log(howMuch(2950, 2950));
console.log(howMuch(1040, 1050)); // expected [] to deeply equal [ [ 'M: 1045', 'B: 149', 'C: 116' ] ]
console.log(howMuch(60400, 60600));
// It should work with random inputs: expected [] to deeply equal [ [ 'M: 60454', 'B: 8636', 'C: 6717' ], [ 'M: 60517', 'B: 8645', 'C: 6724' ], [ 'M: 60580', 'B: 8654', 'C: 6731' ] ]
console.log(howMuch(10000, 9950));
// expected [] to deeply equal [ [ 'M: 9991', 'B: 1427', 'C: 1110' ] ]
