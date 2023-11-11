function maidenParty(input) {

    let budget = Number(input[0]);

    let countLoveLetters = Number(input[1]);
    let countRoses = Number(input[2]);
    let countKeychain = Number(input[3]);
    let countCaricatures = Number(input[4]);
    let countLuckyCharms = Number(input[5]);

    let totalPrice = countLoveLetters * 0.60 + countRoses * 7.20 + countKeychain * 3.60 + countCaricatures * 18.20 + countLuckyCharms * 22;
    let countItems = countLoveLetters + countRoses + countKeychain + countCaricatures + countLuckyCharms;

    if (countItems >= 25) {
        totalPrice = totalPrice - (totalPrice * 0.35);
    }

    totalPrice = totalPrice - (totalPrice * 0.10);
    
    if (totalPrice >= budget) {
        let moneyLeft = totalPrice - budget;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeed = budget - totalPrice;
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);
    }
}

maidenParty([ '320', '8', '2', '5', '5', '1' ]);