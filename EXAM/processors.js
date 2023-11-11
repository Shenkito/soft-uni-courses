function processors(input) {

    let countProcessorsNeed = Number(input[0]);
    let countWorkers = Number(input[1]);
    let countWorkingDays = Number(input[2]);

    let workingHours = 8;
    let timePerProcessor = 3;

    let totalHours = countWorkers * countWorkingDays * workingHours;
    let processorsCreated = Math.floor(totalHours / timePerProcessor);

    let pricePerProcessors = 110.10;

    if (processorsCreated < countProcessorsNeed) {
        let processorsLess = countProcessorsNeed - processorsCreated;
        let losess = processorsLess * pricePerProcessors;
        console.log(`Losses: -> ${losess.toFixed(2)} BGN`);
    } else {
        let processorsMore = processorsCreated - countProcessorsNeed;
        let profit = processorsMore * pricePerProcessors;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    }
    
}

processors(['150','7','18']);