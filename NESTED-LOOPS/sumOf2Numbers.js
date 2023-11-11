function sumOfTwoNumbers(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNum = Number(input[2]);
    let isMagicNum = false;

    let combinations = 0;

    for (let x = num1; x <= num2; x++) { // x ми почва от първото ми число по вход , докато е по малко или равно на второто ми число по вход то тогава да се инкрементира.
        for (let y = num1; y <= num2; y++) { // вложената проверка която ПЪРВА СЕ ИЗПЪЛНЯВА ДО ИЗПЪЛНЕНИЕ НА УСЛОВИЕТО СЛЕД ТОВА ПЪРВАТА ПРОВЕРКА
            combinations++; // тук вече променливата която съм създал като counter се инкрементира при всяка мината провека 

            if (x + y === magicNum) { // ако сбора на двете числа е равен на магическото число
                isMagicNum = true; // то тогава булевата ще стане true
                console.log(`Combination N:${combinations} (${x} + ${y} = ${magicNum})`); // логвам
                break; // приключвам вложения цикъл като щракна на брейка ми показва кой е той.
            }
        }
        if (isMagicNum) { // breakвам и външния цикъл
            break;
        } 
    }

    if (isMagicNum === false) { // проверка извън циклите , ако е false
        console.log(`${combinations} combinations - neither equals ${magicNum}`); // логвам.
    }
}

sumOfTwoNumbers(["1",
"10",
"5"]);