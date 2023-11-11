function evenPowersOf2(input) {

    let num = Number(input[0]);

    for (let i = 0; i <= num; i = i + 1) {
        if (i % 2 === 0) {
            let number = Math.pow(2, i); // Това е формула за число на степен.
            console.log(number);
        }
    }

}

evenPowersOf2(["3"]);