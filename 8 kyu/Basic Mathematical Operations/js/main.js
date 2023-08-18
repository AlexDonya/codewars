function basicOp(operation, value1, value2) {
    const result = value1 + operation + value2;
    return eval(result);



    // switch (operation) {
    //     case '*':
    //         return value1 * value2;

    //     case '/':
    //         return value1 / value2;

    //     case '-':
    //         return value1 - value2;

    //     default:
    //         return value1 + value2;
    // }
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));