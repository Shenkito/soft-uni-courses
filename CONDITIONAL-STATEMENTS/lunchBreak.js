function lunchBreak(input) {
    
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = 1/8 * breakDuration;
    let relaxTime = 1/4 * breakDuration;
    let busyTime =  lunchTime + relaxTime;
    let timeLeft = breakDuration - busyTime;

    
    if (timeLeft >= episodeDuration) {
        let timeHave = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeHave)} minutes free time.`);
    }else {
        let timeNeed = episodeDuration - timeLeft;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeed)} more minutes.`)
    }


}

lunchBreak(["Game of Thrones","60","96"]);



