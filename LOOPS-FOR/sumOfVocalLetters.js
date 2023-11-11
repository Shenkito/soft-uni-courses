/* 
буква	    a	e	i	o	u
стойност	1	2	3	4	5

**/






function sumOfVocalLetters(input) {

    let word = input[0];
    let sum = 0; // Декларирах си сбора тук 


    for (let i = 0; i < word.length ; i = i + 1) { // Почвам от нула , докато 0 по малко от сбора на букви , увеличавам с едно до края на думата ми.

        switch (word.charAt(i)) {

            case "a":
                sum = sum + 1;
            break;
            case "e":
                sum = sum + 2;
            break;
            case "i":
                sum = sum + 3;
            break;
            case "o":
                sum = sum + 4;
            break;
            case "u":
                sum = sum + 5;
            break;
        }
    }

    console.log(sum); // Логвам извън скоупа !!!
}

sumOfVocalLetters(["bamboo"]);