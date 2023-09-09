function maximizePoints(team1, team2) {
    team1.sort((a, b) => a - b);
    team2.sort((a, b) => a - b);

    let result = 0;

    function count(team) {
        for (let i = 0; i < team.length; i++) {
            if (team[i] > team2[i]) {
                result += 1;
                team.splice(i, 1);
                team2.splice(i, 1);
                count(team);
            } else if (team[i] <= team2[i]) {
                team.concat(team.splice(i, 1));
                count(team);
            }
        }

        return result;
    }

    return count(team1);
}

console.log(maximizePoints([3, 2, 4], [1, 2, 3])); // 3
console.log(maximizePoints([1], [99])); // 0
console.log(maximizePoints([99], [1])); // 1
console.log(maximizePoints([25, 7, 26, 48], [1, 36, 5, 33])); // 3
console.log(maximizePoints([7, 19, 23, 18, 38, 37, 38, 40], [21, 12, 1, 0, 13, 38, 25, 49]));
// 7
console.log(maximizePoints([81, 4, 73], [6, 76, 84])); // 2
console.log(maximizePoints([42, 71, 51, 69, 28, 20, 75, 10, 99, 81, 7, 68, 13, 82, 20, 69, 15, 67, 73, 84, 97, 3, 75, 68, 28, 47, 89, 89, 31, 55, 90, 8, 85, 73, 30, 69, 24, 72, 78, 18, 62, 26, 82, 69, 20, 51, 87, 39, 7, 54, 86, 1, 62, 61, 68, 80], [62, 25, 49, 77, 64, 54, 40, 46, 62, 71, 6, 35, 61, 70, 67, 61, 89, 7, 77, 26, 37, 14, 41, 62, 78, 51, 58, 99, 28, 18, 78, 46, 19, 45, 48, 7, 60, 29, 89, 63, 32, 26, 20, 14, 32, 92, 44, 72, 14, 70, 39, 16, 95, 48, 73, 39])); // 52

