function humanReadable(seconds) {
    let hours = seconds / 60 / 60;
    let hourInSecs = Math.floor(hours) * 60 * 60;

    let minInSecs = seconds - hourInSecs;
    let minutes = minInSecs / 60;
    let minutesInSecs = Math.floor(minutes) * 60;

    let hh = Math.floor(hours);
    let mm = Math.floor(minutes);
    let ss = seconds - hourInSecs - minutesInSecs;

    // console.log(hh);
    // console.log(mm);
    // console.log(ss);

    if (hh < 10 && mm < 10 && ss < 10) {
        return `0${hh}:0${mm}:0${ss}`;
    } else if (mm < 10 && ss < 10) {
        return `${hh}:0${mm}:0${ss}`;
    } else if (hh < 10 && mm < 10) {
        return `0${hh}:0${mm}:${ss}`;
    } else if (hh < 10 && ss < 10) {
        return `0${hh}:${mm}:0${ss}`;
    } else if (hh < 10) {
        return `0${hh}:${mm}:${ss}`;
    } else if (mm < 10) {
        return `${hh}:0${mm}:${ss}`;
    } else if (ss < 10) {
        return `${hh}:${mm}:0${ss}`;
    } else {
        return `${hh}:${mm}:${ss}`;
    }
}

console.log(humanReadable(3600)); // '01:00:00'
console.log(humanReadable(359999)); // '99:59:59'
console.log(humanReadable(45296)); // '12:34:56'
console.log(humanReadable(86400)); // '24:00:00'