function fishingBoat(input) {

    let budgetGroup = Number(input[0]);
    let season = input[1];
    let countFishers = Number(input[2]);
    let priceForSeasonBoat;
    let bonusDiscount;

    switch (season) {
        case "Spring":
            priceForSeasonBoat = 3000;
            if (countFishers > 0 && countFishers <= 6) {
                priceForSeasonBoat = priceForSeasonBoat * 0.90;
                break;
            } else if (countFishers >= 7 && countFishers <= 11) {
                priceForSeasonBoat = priceForSeasonBoat * 0.85;
                break;
            } else if (countFishers > 12) {
                priceForSeasonBoat = priceForSeasonBoat * 0.75;
                break;
            }
            break;
        case "Summer":
            priceForSeasonBoat = 4200;
            if (countFishers > 0 && countFishers <= 6) {
                priceForSeasonBoat = priceForSeasonBoat * 0.90;
                break;
            } else if (countFishers >= 7 && countFishers <= 11) {
                priceForSeasonBoat = priceForSeasonBoat * 0.85;
                break;
            } else if (countFishers > 12) {
                priceForSeasonBoat = priceForSeasonBoat * 0.75;
                break;
            }
            break;

        case "Autumn":
            priceForSeasonBoat = 4200;
            if (countFishers > 0 && countFishers <= 6) {
                priceForSeasonBoat = priceForSeasonBoat * 0.90;
                break;
            } else if (countFishers >= 7 && countFishers <= 11) {
                priceForSeasonBoat = priceForSeasonBoat * 0.85;
                break;
            } else if (countFishers > 12) {
                priceForSeasonBoat = priceForSeasonBoat * 0.75;
                break;
            }
            break;

        case "Winter":
            priceForSeasonBoat = 2600;
            if (countFishers > 0 && countFishers <= 6) {
                priceForSeasonBoat = priceForSeasonBoat * 0.90;
                break;
            } else if (countFishers >= 7 && countFishers <= 11) {
                priceForSeasonBoat = priceForSeasonBoat * 0.85;
                break;
            } else if (countFishers > 12) {
                priceForSeasonBoat = priceForSeasonBoat * 0.75;
                break;
            }
            break;
            default:
    }
    if (countFishers % 2 === 0 && season !== "Autumn") {
        bonusDiscount = 0.05;
        priceForSeasonBoat = priceForSeasonBoat - (priceForSeasonBoat * bonusDiscount);
    }
    if (budgetGroup < priceForSeasonBoat) {
        let moneyNeed =  priceForSeasonBoat - budgetGroup;
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva.`);
    } else {
        let moneyLeft = budgetGroup - priceForSeasonBoat;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }

}

fishingBoat(["3600",
"Autumn",
"6"]);