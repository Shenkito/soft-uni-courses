function oscars(input) {

    let actorName = input[0];
    let academyStartingPoints = Number(input[1]);
    let countJudges = Number(input[2]);

    for (let i = 3; i < input.length ; i = i + 2) { // тук вече почвам от 3ти индекс защото от там ми почват съдийте и после искам да минава през 2 защото следващото е точки и после е пак име

        let judgeNames = input[i] // тук взимам инпут i тоест на 3 ще ми е Джони Деп на 5 ще ми е Смит и т.н
        let judgePoints = Number(input[i + 1]); // пища го така защото точките са на другия ред , тоест ако i e 3 и в слуачая е , то тогава точките ще са на следващия ред тоест 4ти ред затова е i + 1 (взимам текущия индекс и този след/под него)
        let result = judgeNames.length * judgePoints / 2; // резултата е броя на символите на името на съдията * точките който дава делено на 2
        academyStartingPoints = academyStartingPoints + result; // може да го изпиша и academyStartingPoints += result;

        if (academyStartingPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyStartingPoints.toFixed(1)}!`);
            return; // !! ПРЕКРАТЯВА ЦЯЛАТА ПРОГРАМА , ЦЯЛАТА ФУНКЦИЯ (ако е true) ако тук е break; след For цикъла ако има код той тогава ще се изпълни но при return не се.
        }
    } 

    let pointsNeeded = 1250.5 - academyStartingPoints;
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);