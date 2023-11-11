function minNumber(input) {

    let number = input[0];
    let index = 1;
    let minNum = Number.MAX_SAFE_INTEGER; // най-голямото възможно число в системата.

    while (number !== "Stop") {
        let num = Number(number);

        if (num < minNum) {
            minNum = num;
        }

        number = input[index];
        index++;
    }
    
    console.log(minNum);
}

minNumber(["45",
"-20",
"7",
"99",
"Stop"]);

