function findRoutes(routes) {
    const arr = [];
    const arrResult = [];

    for (let i = 0; i < routes.length; i++) {
        let count = 0;
        for (let j = 0; j < routes[i].length; j++) {
            if (!arr.includes(routes[i][j])) {
                arr.push(routes[i][j]);
            }

            // if (routes[0][0] === routes[i][j]) {
            //     arr.push(routes[i][j]);
            // }
        }
        // arr.push(routes[i].join(' '));
    }


    for (let i = 0; i < arr.length; i++) {
        for (let q = 0; q < routes.length; q++) {
            for (let j = 0; j < routes[q].length; j++) {
                if (arr[i] !== routes[q][j]) {
                    // arrResult.push(routes[q][j]);
                }
            }
        }
    }

    // const string = arr.join(' ');
    // const array = string.split(' ');

    return arr;
    // return arrResult;
    // return count;
}

console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]));
// "MNL, TAG, CEB, TAC, BOR"
// console.log(findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]));
// "UK, GER, BEL, CAN"
// console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]));
// a b c d e f g h i j k l m n o p q r s t u v w x y z
// "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"
// console.log(findRoutes([["Calgary", "Fargo"], ["Spokane", "Toronto"], ["Winnipeg", "Montreal"], ["Toronto", "Calgary"], ["Fargo", "Winnipeg"]]));
// "Spokane, Toronto, Calgary, Fargo, Winnipeg, Montreal"
// console.log(findRoutes());
// console.log(findRoutes());
// console.log(findRoutes());
// console.log(findRoutes());