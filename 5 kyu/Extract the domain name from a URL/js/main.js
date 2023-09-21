function domainName(url) {
    const str = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[1];
    const arr = str.split('');

    for (let i = arr.length; i > 0; i--) {
        if (arr[i] === '.') {
            arr.splice(i, arr.length - i);
        }
    }

    return arr.join('');
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("https://www.youtube.com"));

// best solution in codewars
// function domainName(url) {
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
// };