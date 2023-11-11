function numbersFrom1Step3(input) {

    let num = Number(input[0]);

    for (let i = 1; i <= num; i += 3) { // Накрая тук можем да ползваме пълно изписване (i = i + 3) // i е началната стойност (почва от) , крайната стойност , и през 3.
        console.log(i);
    }
}

numbersFrom1Step3(["10"]);