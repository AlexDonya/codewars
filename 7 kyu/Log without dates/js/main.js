// my decision
function checkLogs(log) {
    if (log.length > 0) {
        let count = 1;
        for (let i = 0; i < log.length; i++) {
            if (log[i] > log[i + 1] || log[i] === log[i + 1]) {
                count += 1;
            }
        }
        return count;
    } else {
        return 0;
    }
}

// codewars decision
// function checkLogs(log) {
//     let prev = "99:99:99";
//     let days = 0;
//     log.forEach(t => {
//         if (t <= prev) days++;
//         prev = t;
//     });
//     return days;
// }

console.log(checkLogs(["12:12:12"])); // 1
console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"])); // 1
console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"])); // 2
console.log(checkLogs(["12:00:00", "12:00:00", "00:00:00"])); // 3
console.log(checkLogs([])); // 0
console.log(checkLogs(["06:18:39", "02:49:34", "09:56:39", "03:13:17", "23:31:25", "06:56:16", "15:30:17", "00:25:09", "00:46:47", "02:13:49", "05:08:04", "12:35:47"])); // 0