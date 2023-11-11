function foodDelivery(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let veganMenuPrice = veganMenu * 8.15;
    let priceForAllMenus = chickenMenuPrice + fishMenuPrice + veganMenuPrice;
    let dessertPrice = priceForAllMenus * 0.2;
    let totalPriceBill = priceForAllMenus + dessertPrice + 2.50;
    console.log(totalPriceBill);
     
}

foodDelivery([2, 4, 3]);