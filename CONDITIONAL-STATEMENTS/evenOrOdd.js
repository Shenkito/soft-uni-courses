function evenOrOdd(input) {
    let num = Number(input[0]);

    if (num % 2 == 0) { // Това е функцията за намиране на четно или нечетно число. Ако числото се % на 2 трябва да е равно === на 0 за да е четно.
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOrOdd([4]);