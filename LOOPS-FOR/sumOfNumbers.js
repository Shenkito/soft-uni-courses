function sumOfNumbers(input) {

    let num = input[0];
    let numString = num + ""; // Конкатенация! В случай че имам число и искам да го первърна в стринг
    let sum = 0;

    for (i = 0; i < numString.length ; i = i + 1) { // След като съм го превърнал в стринг тук проверявам дължината му с lenght.
        sum = sum + Number(numString[i]); // Тук за да ползвам събиране пак го превръщам в Number и i`то е от For`a
    }
    console.log(`The sum of the digits is:${sum}`);


}

sumOfNumbers(["1234"]);