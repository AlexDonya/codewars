function findRoutes(routes) {
    const countItems = {};

    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            countItems[routes[i][j]] = countItems[routes[i][j]] ? countItems[routes[i][j]] + 1 : 1;
        }
    }

    const result = Object.keys(countItems).filter((item) => countItems[item] === 1);
    result.pop();

    let q = 0;
    function route(place) {
        for (let i = 0; i < routes.length; i++) {
            for (let j = 0; j < routes[i].length; j++) {
                if (place === routes[i][j] && !result.includes(routes[i][1])) {
                    result.push(routes[i][1]);
                }
            }
        }
        return;
    }

    do {
        route(result[q]);
        q += 1;
    } while (q < routes.length);

    return result.join(', ');
}

console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]));
// "MNL, TAG, CEB, TAC, BOR"
console.log(findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]));
// "UK, GER, BEL, CAN"
console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]));
// "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"
console.log(findRoutes([["Calgary", "Fargo"], ["Spokane", "Toronto"], ["Winnipeg", "Montreal"], ["Toronto", "Calgary"], ["Fargo", "Winnipeg"]]));
// "Spokane, Toronto, Calgary, Fargo, Winnipeg, Montreal"