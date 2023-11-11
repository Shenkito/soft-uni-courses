function worldRecordSwim(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsFor1Meter = Number(input[2]);

    let ivanTime = distanceInMeters * timeInSecondsFor1Meter; // 30000sec.
    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTimeIvan = ivanTime + delay;

    if (totalTimeIvan >= recordInSeconds) {
        let timeNeed = totalTimeIvan - recordInSeconds;
        console.log(`No, he failed! He was ${timeNeed.toFixed(2)} seconds slower.`);
    
    }else if (totalTimeIvan < recordInSeconds) {
        let newRecord = (totalTimeIvan).toFixed(2);
        console.log(`Yes, he succeeded! The new world record is ${newRecord} seconds.`)
    }


}

worldRecordSwim(["55555.67","3017", "5.03"])