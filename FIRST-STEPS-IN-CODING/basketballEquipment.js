function basketballEquipment(input) {
    let annualPriceTraining = Number(input[0]);

    let basketShoes = annualPriceTraining - (annualPriceTraining * 0.4); 
    let basketClothes = basketShoes - (basketShoes * 0.2);
    let basketBall = basketClothes / 4;
    let basketAccessories = basketBall / 5;
    let totalPrice = annualPriceTraining + basketShoes + basketClothes + basketBall + basketAccessories;
    console.log(totalPrice);
}

basketballEquipment([365]);