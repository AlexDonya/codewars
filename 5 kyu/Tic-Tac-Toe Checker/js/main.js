function isSolved(board) {

    // RESULT WHO WIN
    let result = 0;

    // DIAGONAL
    if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1 || board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) {
        result = 1;
        return 1;
    } else if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2 || board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) {
        result = 2
        return 2;
    }

    // VERTICAL FOR X 
    let countOneVertical0 = 0;
    let countOneVertical1 = 0;
    let countOneVertical2 = 0;

    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === 1) {
            countOneVertical0 += 1;
        }
        if (countOneVertical0 === 3) {
            result = 1;
            return 1;
        }

        if (board[i][1] === 1) {
            countOneVertical1 += 1;
        }
        if (countOneVertical1 === 3) {
            result = 1;
            return 1;
        }

        if (board[i][2] === 1) {
            countOneVertical2 += 1;
        }
        if (countOneVertical2 === 3) {
            result = 1;
            return 1;
        }
    }

    // VERTICAL FOR O
    let countTwoVertical0 = 0;
    let countTwoVertical1 = 0;
    let countTwoVertical2 = 0;

    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === 2) {
            countTwoVertical0 += 1;
        }
        if (countTwoVertical0 === 3) {
            result = 2;
            return 2;
        }

        if (board[i][1] === 2) {
            countTwoVertical1 += 1;
        }
        if (countTwoVertical1 === 3) {
            result = 2;
            return 2;
        }

        if (board[i][2] === 2) {
            countTwoVertical2 += 1;
        }
        if (countTwoVertical2 === 3) {
            result = 2;
            return 2;
        }
    }

    //========================================================================================================================================================

    // HORIZONTAL FOR X
    let countOneHorizontal0 = 0;
    for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] === 1) {
            countOneHorizontal0 += 1;
        }
    }
    if (countOneHorizontal0 === 3) {
        result = 1;
        return 1;
    }

    let countOneHorizontal1 = 0;
    for (let j = 0; j < board[1].length; j++) {
        if (board[1][j] === 1) {
            countOneHorizontal1 += 1;
        }
    }
    if (countOneHorizontal1 === 3) {
        result = 1;
        return 1;
    }

    let countOneHorizontal2 = 0;
    for (let j = 0; j < board[2].length; j++) {
        if (board[2][j] === 1) {
            countOneHorizontal2 += 1;
        }
    }
    if (countOneHorizontal2 === 3) {
        result = 1;
        return 1;
    }

    // HORIZONTAL FOR O
    let countTwoHorizontal0 = 0;
    for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] === 2) {
            countTwoHorizontal0 += 1;
        }
    }
    if (countTwoHorizontal0 === 3) {
        result = 2;
        return 2;
    }

    let countTwoHorizontal1 = 0;
    for (let j = 0; j < board[1].length; j++) {
        if (board[1][j] === 2) {
            countTwoHorizontal1 += 1;
        }
    }
    if (countTwoHorizontal1 === 3) {
        result = 2;
        return 2;
    }

    let countTwoHorizontal2 = 0;
    for (let j = 0; j < board[2].length; j++) {
        if (board[2][j] === 2) {
            countTwoHorizontal2 += 1;
        }
    }
    if (countTwoHorizontal2 === 3) {
        result = 2;
        return 2;
    }

    let countZero = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                countZero += 1;
            }
        }
    }

    if (countZero === 0 && result === 0) {
        return 0;
    }

    if (result === 0) {
        return -1;
    }
}

console.log(isSolved([[0, 0, 1],
[0, 1, 2],
[2, 1, 0]])); // -1 game continues
console.log(isSolved([[2, 2, 1],
[1, 1, 2],
[2, 1, 1]])); // 0 DRAW
console.log(isSolved([[2, 1, 1],
[1, 1, 2],
[2, 1, 2]])); // 1 X won
console.log(isSolved([[2, 0, 1],
[2, 1, 2],
[2, 1, 1]])); // 2 O won

//========================================================================================================================================================

console.log(isSolved([[1, 1, 1],
[2, 1, 2],
[2, 1, 2]])); // 1 X won HORIZONTAL

console.log(isSolved([[2, 1, 2],
[1, 1, 1],
[2, 1, 2]])); // 1 X won VERTICAL

console.log(isSolved([[2, 1, 2],
[2, 1, 2],
[1, 1, 1]])); // 1 X won HORIZONTAL

console.log(isSolved([[2, 1, 1],
[2, 1, 2],
[1, 2, 1]])); // 1 X won DIAGONAL

console.log(isSolved([[2, 1, 1],
[2, 2, 1],
[1, 1, 2]])); // 2 O won DIAGONAL
