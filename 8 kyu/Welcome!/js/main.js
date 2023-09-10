function greet(language) {
    const obj = {
        "english": "Welcome",
        "czech": "Vitejte",
        "danish": "Velkomst",
        "dutch": "Welkom",
        "estonian": "Tere tulemast",
        "finnish": "Tervetuloa",
        "flemish": "Welgekomen",
        "french": "Bienvenue",
        "german": "Willkommen",
        "irish": "Failte",
        "italian": "Benvenuto",
        "latvian": "Gaidits",
        "lithuanian": "Laukiamas",
        "polish": "Witamy",
        "spanish": "Bienvenido",
        "swedish": "Valkommen",
        "welsh": "Croeso",
    }

    for (const lang in obj) {
        if (language === lang) {
            return obj[lang];
        }
    }
    return obj["english"];
}

console.log(greet("welsh"));
console.log(greet("spanish"));
console.log(greet("latvian"));
console.log(greet("Ip Address Invalid"));