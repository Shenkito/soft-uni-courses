function pcShoping(input) {
    let budget = Number(input[0]);
    let countVideoCards = Number(input[1]);
    let countProcessors = Number(input[2]);
    let ramMemory = Number(input[3]);

    let priceVideoCard = countVideoCards * 250;
    let priceProcessors = priceVideoCard * countProcessors * 0.35;
    let priceRamMemory = priceVideoCard * ramMemory * 0.10;
    let totalPrice = priceVideoCard + priceProcessors + priceRamMemory;
    
    if (countVideoCards > countProcessors) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }

    if (totalPrice <= budget) {
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else if (totalPrice > budget) {
        let moneyNeed = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva more!`);
    }
}
pcShoping(["920.45","3","1","1"]);