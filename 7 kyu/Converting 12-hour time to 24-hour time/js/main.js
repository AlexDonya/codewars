function to24hourtime(hour, minute, period) {
    // hour will always range from 1 to 12 (inclusive)
    // minute will always range from 0 to 59 (inclusive)
    // period will always be either "am" or "pm"
    let result = '';
    const hoursAMPM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const hours0100 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '00', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '12'];
    for (let i = 0; i < hoursAMPM.length; i++) {
        if (period === 'am' && hour === hoursAMPM[i]) {
            result = hours0100[i];
        } else if (period === 'pm' && hour === hoursAMPM[i]) {
            result = hours0100[i + 12];
        }
    }
    if (0 < minute && minute < 10) {
        return `${result}0${minute}`;
    } else if (minute === 0) {
        return `${result}${minute}0`;
    } else {
        return `${result}${minute}`;
    }
}
console.log(to24hourtime(2, 8, "pm")); // "1408", "Input =  2:08 pm"
console.log(to24hourtime(1, 0, "am")); // "0100", "Input =  1:00 am"
console.log(to24hourtime(1, 0, "pm")); // "1300", "Input =  1:00 pm"
console.log(to24hourtime(12, 0, "am")); // "0000", "Input = 12:00 am"
console.log(to24hourtime(12, 0, "pm")); // "1200", "Input = 12:00 pm"
console.log(to24hourtime(6, 30, "am")); // "0630", "Input =  6:30 am"
console.log(to24hourtime(9, 45, "pm")); // "2145", "Input =  9:45 pm"








