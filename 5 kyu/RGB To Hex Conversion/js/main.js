function rgb(r, g, b) {
    r < 0 ? r = 0 : null;
    g < 0 ? g = 0 : null;
    b < 0 ? b = 0 : null;

    r > 255 ? r = 255 : null;
    g > 255 ? g = 255 : null;
    b > 255 ? b = 255 : null;

    if (r < 16 && g < 16 && b < 16) {
        return `0${r.toString(16)}0${g.toString(16)}0${b.toString(16)}`.toUpperCase();
    } else if (r < 16 && g < 16) {
        return `0${r.toString(16)}0${g.toString(16)}${b.toString(16)}`.toUpperCase();
    } else if (r < 16 && b < 16) {
        return `0${r.toString(16)}${g.toString(16)}0${b.toString(16)}`.toUpperCase();
    } else if (g < 16 && b < 16) {
        return `${r.toString(16)}0${g.toString(16)}0${b.toString(16)}`.toUpperCase();
    } else if (r < 16) {
        return `0${r.toString(16)}${g.toString(16)}${b.toString(16)}`.toUpperCase();
    } else if (g < 16) {
        return `${r.toString(16)}0${g.toString(16)}${b.toString(16)}`.toUpperCase();
    } else if (b < 16) {
        return `${r.toString(16)}${g.toString(16)}0${b.toString(16)}`.toUpperCase();
    } else {
        return `${r.toString(16)}${g.toString(16)}${b.toString(16)}`.toUpperCase();
    }
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, -20, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
console.log(rgb(14, 20, 40));
console.log(rgb(286, 206, 217));
