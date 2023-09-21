let num = 0;
function zero(o, n) {
    if (typeof o === 'undefined') {
        return 0;
    } else {
        switch (o) {
            case '*':
                return Math.floor(0 * num);
            case '+':
                return Math.floor(0 + num);
            case '-':
                return Math.floor(0 - num);
            case '/':
                return Math.floor(0 / num);
        }
    }
}
function one(o, n) {
    if (typeof o === 'undefined') {
        return 1;
    } else {
        switch (o) {
            case '*':
                return Math.floor(1 * num);
            case '+':
                return Math.floor(1 + num);
            case '-':
                return Math.floor(1 - num);
            case '/':
                return Math.floor(1 / num);
        }
    }
}
function two(o, n) {
    if (typeof o === 'undefined') {
        return 2;
    } else {
        switch (o) {
            case '*':
                return Math.floor(2 * num);
            case '+':
                return Math.floor(2 + num);
            case '-':
                return Math.floor(2 - num);
            case '/':
                return Math.floor(2 / num);
        }
    }
}
function three(o, n) {
    if (typeof o === 'undefined') {
        return 3;
    } else {
        switch (o) {
            case '*':
                return Math.floor(3 * num);
            case '+':
                return Math.floor(3 + num);
            case '-':
                return Math.floor(3 - num);
            case '/':
                return Math.floor(3 / num);
        }
    }
}
function four(o, n) {
    if (typeof o === 'undefined') {
        return 4;
    } else {
        switch (o) {
            case '*':
                return Math.floor(4 * num);
            case '+':
                return Math.floor(4 + num);
            case '-':
                return Math.floor(4 - num);
            case '/':
                return Math.floor(4 / num);
        }
    }
}
function five(o, n) {
    if (typeof o === 'undefined') {
        return 5;
    } else {
        switch (o) {
            case '*':
                return Math.floor(5 * num);
            case '+':
                return Math.floor(5 + num);
            case '-':
                return Math.floor(5 - num);
            case '/':
                return Math.floor(5 / num);
        }
    }
}
function six(o, n) {
    if (typeof o === 'undefined') {
        return 6;
    } else {
        switch (o) {
            case '*':
                return Math.floor(6 * num);
            case '+':
                return Math.floor(6 + num);
            case '-':
                return Math.floor(6 - num);
            case '/':
                return Math.floor(6 / num);
        }
    }
}
function seven(o, n) {
    if (typeof o === 'undefined') {
        return 7;
    } else {
        switch (o) {
            case '*':
                return Math.floor(7 * num);
            case '+':
                return Math.floor(7 + num);
            case '-':
                return Math.floor(7 - num);
            case '/':
                return Math.floor(7 / num);
        }
    }
}
function eight(o, n) {
    if (typeof o === 'undefined') {
        return 8;
    } else {
        switch (o) {
            case '*':
                return Math.floor(8 * num);
            case '+':
                return Math.floor(8 + num);
            case '-':
                return Math.floor(8 - num);
            case '/':
                return Math.floor(8 / num);
        }
    }
}
function nine(o, n) {
    if (typeof o === 'undefined') {
        return 9;
    } else {
        switch (o) {
            case '*':
                return Math.floor(9 * num);
            case '+':
                return Math.floor(9 + num);
            case '-':
                return Math.floor(9 - num);
            case '/':
                return Math.floor(9 / num);
        }
    }
}

function plus(n) {
    num = n;
    return '+';
}
function minus(n) {
    num = n;
    return '-';
}
function times(n) {
    num = n;
    return '*';
}
function dividedBy(n) {
    num = n;
    return '/';
}

console.log(seven(times(five()))); // 7 * 5 = 35
console.log(four(plus(nine()))); // 4 + 9 = 13
console.log(eight(minus(three()))); // 8 - 3 = 5
console.log(six(dividedBy(two()))); // 6 / 2 = 3

