// my weird solution
function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }

    return arr.join('');
}

// best practice on codewars
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
// "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?")); // "Wht r y,  cmmnst?"