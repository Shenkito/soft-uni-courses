function goldMine(input) {

    let index = 0;
    let locations = Number(input[index]);
    index++;

    for (let i = 0; i < locations; i++) {
        let goldDiggedPerDay = Number(input[index]);
        index++;
        let countDaysForDigging = Number(input[index]);
        index++;

        let yeld = 0;

        for (let d = 0; d < countDaysForDigging; d++) {
            let currentYeld = Number(input[index]);
            index++;

            yeld += currentYeld;
        }

        let avgPerLoc = yeld / countDaysForDigging;
        let difference = Math.abs(avgPerLoc - goldDiggedPerDay);

        if (avgPerLoc < goldDiggedPerDay) {
            console.log(`You need ${difference.toFixed(2)} gold.`);
        } else {
            console.log(`Good job! Average gold per day: ${avgPerLoc.toFixed(2)}.`);
        }
    }
}
goldMine(['2', '10', '3', '10', '10', '11', '20', '2', '20', '10']);