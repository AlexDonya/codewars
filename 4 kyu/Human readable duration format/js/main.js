function formatDuration(seconds) {
    if (seconds > 0) {
        let years = 0;
        let days = 0;

        let hours = seconds / 60 / 60;
        let hourInSecs = Math.floor(hours) * 60 * 60;

        let minInSecs = seconds - hourInSecs;
        let minutes = minInSecs / 60;
        let minutesInSecs = Math.floor(minutes) * 60;

        let hh = Math.floor(hours);
        let mm = Math.floor(minutes);
        let ss = seconds - hourInSecs - minutesInSecs;

        if (hh >= 24) {
            days = hh / 24;

        }
        let d = Math.floor(days);
        hh = hh - 24 * d;

        if (d >= 365) {
            years = d / 365;
        }
        let y = Math.floor(years);
        d = d - 365 * y;

        const result = [];

        if (y === 1) {
            result.push(`${y} year`);
            result.push(' ');
        } else if (y > 1) {
            result.push(`${y} years`);
            result.push(' ');
        }

        if (d === 1) {
            result.push(`${d} day`);
            result.push(' ');
        } else if (d > 1) {
            result.push(`${d} days`);
            result.push(' ');
        }

        if (hh === 1) {
            result.push(`${hh} hour`);
            result.push(' ');
        } else if (hh > 1) {
            result.push(`${hh} hours`);
            result.push(' ');
        }

        if (mm === 1) {
            result.push(`${mm} minute`);
            result.push(' ');
        } else if (mm > 1) {
            result.push(`${mm} minutes`);
            result.push(' ');
        }

        if (ss === 1) {
            result.push(`${ss} second`);
            result.push(' ');
        } else if (ss > 1) {
            result.push(`${ss} seconds`);
        }

        if (result[result.length - 1] === ' ') {
            result.splice(result.length - 1, 1);
        }

        if (result.length > 1) {
            result.splice(result.length - 2, 1, ' and ');
        }

        for (let i = 0; i < result.length; i++) {
            if (result[i] === ' ') {
                result.splice(i, 1, ', ')
            }
        }

        return result.join('');
    }

    return 'now';
}

console.log(formatDuration(0));
console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(99996662));
console.log(formatDuration(15731080));
console.log(formatDuration(6036983));