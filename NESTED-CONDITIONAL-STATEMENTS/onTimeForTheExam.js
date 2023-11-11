// •	Първият съдържа час на изпита – цяло число от 0 до 23.
// •	Вторият съдържа минута на изпита – цяло число от 0 до 59.
// •	Третият съдържа час на пристигане – цяло число от 0 до 23.
// •	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.

// Ако 1:30 (1h 30m) , 1час > 60минути. 60минути + остатъка 30минути е = на обшо 90 минути (това е обшото време)
// Съшото и при пример 2:30 (2h 30м) , 2часа са 2 * 60 което е = на 120 минути плюс + остатъка 30 мин е равно = на 150минути (общото време в минути);
// Това го правим ако и друг път имаме подобна задача с часове и минути. Когато имаме две части за време да ги конвентираме в една цяла. Обикновенно конвентираме с по-малката единица от времето и това е в случая минути.



function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    
    let arrivingHour = Number(input[2]);
    let arrivingMinutes = Number(input[3]); 

    let totalExamMinutes = examHour * 60 + examMinute; // По-горе написното като код тук. 570min
    let totalArrivingTimeMins = arrivingHour * 60 + arrivingMinutes; // Както и тук. 590min.

    let totalMinsDifference = Math.abs(totalExamMinutes - totalArrivingTimeMins); // Тук изчислявам разликата. От 570 вадя - 590 което е равно = на -20. Понеже не искам отрицателно число тоест минуса - слагам Math.abs Tози метод връша винаги положителната стоинност на числото.
    let hoursDifference = Math.floor(totalMinsDifference / 60); // Тук обръщам процеса от разликата в минути , превръщам в часове и слагам Math.floor да ми закръгли надолу. И ако имам остатък примерно ако имам 130минути това са 2 часа и 10 минути , ще имам остатък от 10 минути който ще намеря в долния код.
    let minutesDifference = totalMinsDifference % 60;

    let timeDiff = '';

    if (hoursDifference > 0) {
        if (minutesDifference < 10) {
            timeDiff = `${hoursDifference}:0${minutesDifference}`; // Тук добавям 0 което е по условиете например ако са 08 или 07 мин.
        } else  {
            timeDiff = `${hoursDifference}:${minutesDifference}`;
        }

    } else {
        timeDiff = minutesDifference; // Но ако часовете ми са 0 тогава да се изпише само минутите. Тоест тук разграничаваме формата h:min от min
    }

    if (totalArrivingTimeMins < totalExamMinutes) {
        if (totalMinsDifference <= 30) {
            console.log(`On Time`);
            console.log(`${timeDiff} minutes before the start`);
        } else {
        console.log(`Early`);
        
        if (totalMinsDifference < 60) {
            console.log(`${timeDiff} minutes before the start`);
        } else {
            console.log(`${timeDiff} hours before the start`);
        }
    }

} else if (totalArrivingTimeMins > totalExamMinutes) {
    console.log(`Late`);
    
    if (totalMinsDifference < 60) {
        console.log(`${timeDiff} minutes after the start`);
    } else {
        console.log(`${timeDiff} hours after the start`);
    }
} else {
    console.log(`On Time`);

}


}


onTimeForTheExam(["9","30","9","50"]);