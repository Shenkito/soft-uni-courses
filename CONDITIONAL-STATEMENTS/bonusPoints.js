function bonusPoints(input){
   let startingPoints = Number(input[0]);
   let bonus = 0;

   if (startingPoints <= 100) {
    bonus = 5;
   } else if (startingPoints > 100 && startingPoints < 1000) { // Тук използвах логическо И && за да изпиша число (между) , като ползвах логиката , че числото трябва да е по-голямо от сто и по-малко от хиляда.
    bonus = 0.20 * startingPoints;
   } else {                                                    // Тук е вече за ако числото е над 1000
    bonus = 0.10 * startingPoints;
   }

   if (startingPoints % 2 === 0) { // Тук е формулата ако числото е четно.
    bonus = bonus + 1;
   }else if (startingPoints % 10 === 5) { // Тук ако числото завършва на 5. Предполагам , че пишем 6 ако завършва на 6 и тн.
    bonus = bonus + 2;
   }

   console.log(bonus);
   console.log(startingPoints + bonus);

}

bonusPoints(["20"]);