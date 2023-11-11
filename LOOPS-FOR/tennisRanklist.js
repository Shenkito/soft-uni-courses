function tennisRanklist(input) {

    let tournamentsPlayed = Number(input[0]);
    let ranklistStartingPoints = Number(input[1]);
    
    let earnedPoints = 0;
    let tournamentsWon = 0;

    for (let i = 2 ; i < input.length; i++) {
        let status = input[i];

        if (status === "W") {
            earnedPoints += 2000;
            tournamentsWon++;
        } else if (status === "F") {
            earnedPoints += 1200;
        } else if (status === "SF") {
            earnedPoints += 720;
        }
    }

    let totalPoints = earnedPoints + ranklistStartingPoints;
    let averagePoints = earnedPoints / tournamentsPlayed;
    let tournamentsWonPercent = (tournamentsWon / tournamentsPlayed) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${tournamentsWonPercent.toFixed(2)}%`);


}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"]);