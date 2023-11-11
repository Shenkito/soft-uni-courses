function specialNumbers(input) {
    let number = Number(input[0]);
    
    let result = ``;

    for (let i = 1111; i <= 9999; i++) { // 
        let currentI = Number(i); // тук приемам текущото число като число от i;
        let iString = currentI.toString() // тук го превръщам в стринг за да мога да взема всяко число отделно 

        let isMagic = true; //
        let magicNum = ``; // ще запазвам като стринг всички числа който са специални

        for (let j = 0; j < iString.length; j++) { // влоцен цикъл който взима всяко едно число от числото ми по отделно
            let currentNum = Number(iString[j]); // вече го взимам и от примерно 4 цифрено число взимам първото

            if (number % currentNum !== 0) { // ако числото което ми е заданено по условие , се дели на всяко едно число по отделно с остатък (по условие то е специално само когато всички числа от него се делят на числото зададено по условие без остатък)
                isMagic = false; // то тогава числото не е специално и булевата приема false стойност.
            }
        }

        if (isMagic) { // ако то е било специално
            magicNum = currentI; // то се запазва като стринг в променливата
        } else {
            continue; // продължавам
        }

        result += `${magicNum} `; // тук има разстояние след magicNum за да се изсписват едно след друго с интервал
    }
    console.log(result);
}

specialNumbers(["3"]);