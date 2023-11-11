function operationsBetweenNumbers(input) {
    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOrOdd;
    let leftOver = 0;

    switch (operator) {
        case "+":
            result = numA + numB;
            if (result % 2 === 0) {
            evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            } console.log(`${numA} ${operator} ${numB} = ${result} - ${evenOrOdd}`);
        break;
        case "-":
            result = numA - numB;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }  console.log(`${numA} ${operator} ${numB} = ${result} - ${evenOrOdd}`);
        break;
        case "*":
            result = numA * numB;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }  console.log(`${numA} ${operator} ${numB} = ${result} - ${evenOrOdd}`);
        break;
        case "/":
            if (numA == 0 || numB == 0) { // Това тук е ако числото неможе да се дели на 0.
                console.log(`Cannot divide ${numA} by zero`);
            } else {
                result = numA / numB;
            console.log(`${numA} ${operator} ${numB} = ${result.toFixed(2)}`);
            }
        break;
        case "%":
            if (numA == 0 || numB == 0) { // Това тук също.
                console.log(`Cannot divide ${numA} by zero`);
            } else {
                result = numA % numB;
                console.log(`${numA} ${operator} ${numB} = ${result}`);
            }
        break;
        default:
            break;

    }
}

operationsBetweenNumbers(["112",
"0",
"/"]);