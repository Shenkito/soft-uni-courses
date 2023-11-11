function godzillaVsKongMovie(input) {

    let budget = Number(input[0]);
    let countStatist = Number(input[1]);
    let priceClothesPerOne = Number(input[2]);
    let priceDecor = 0.10 * budget;
    let priceAllClothes = countStatist * priceClothesPerOne;
    
    if(countStatist > 150) {
        priceAllClothes = priceAllClothes - (priceAllClothes * 0.10);
    }

    let totalMoviePrice = priceDecor + priceAllClothes;

    if (totalMoviePrice < budget) {
        let moneyLeft = budget - totalMoviePrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    
    }else if (totalMoviePrice <= budget) {
        let moneyLeft2 = budget - totalMoviePrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft2.toFixed(2)} leva left.`);
    
    }else if (totalMoviePrice > budget) {
        let moneyNeed = totalMoviePrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeed.toFixed(2)} leva more.`);
    }

}

godzillaVsKongMovie(["9587.88","222","55.68"]);