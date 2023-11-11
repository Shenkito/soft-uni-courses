function equalSumEvenOddPosition (input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let print = '';

    for (let startNum = num1; startNum <= num2; startNum++) { // 
        let currentNum = " " + startNum; // може и currentNumString = startNum.toString() , превръщам в стринг тъй като трябва да взимам всяка позиция (число) от числото отделно
        
        let evenSum = 0;
        let oddSum = 0;

        for (let index = 0; index <= currentNum.length; index++) { // тук вече взимам с length
            let currDigit = Number(currentNum.charAt(index)); // тук вече взимам точния индекс с charAt от моето число и отново превръщам в число за да мога да направя провеките доло 

            if (index % 2 === 0) { // числото на текущата позиция е четно
                evenSum += currDigit;
            } else { // ако не е четно
                oddSum += currDigit;
            }
        }

        if (oddSum === evenSum) { // ако двете суми са равни една на друга
            print += `${startNum} ` // тук има спейс накрая за да се логнат числата с разстояние едно от друго.
        }
    }
    console.log(print);
}

equalSumEvenOddPosition(["123456",
"124000"]);