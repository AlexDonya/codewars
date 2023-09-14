function initials(n) {
    const arr = n.split(' ');
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0].toUpperCase());
        result.push('.');
    }
    result.pop();
    result.push(arr[arr.length - 1].slice(1, arr[arr.length - 1].length));
    
    return result.join('');
}

console.log(initials('code wars'));
console.log(initials('Barack hussain obama'));
console.log(initials('barack hussain Obama'));
console.log(initials('david miguel abigail ethan isabella campbell'));