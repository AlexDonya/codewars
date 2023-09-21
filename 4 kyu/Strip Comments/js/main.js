function solution(input, markers) {
    let startSplice = markers[0];
    let endSplice = markers[1];
    const arr = input.split('');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === startSplice) {
            result = arr.splice(0, i);
            break;
        }
    }

    if (result[result.length - 1] === ' ') {
        result.pop();
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '\n') {
            arr.splice(0, i);
            break;
        }
    }

    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] === endSplice) {
            arr.splice(i, arr.length - i);
            break;
        }
    }

    if (arr[arr.length - 1] === ' ') {
        arr.pop();
    }

    result.push(arr);

    return result.flat().join('');
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
// "apples, plums\npears\noranges"
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));
// "Q\nu\ne"