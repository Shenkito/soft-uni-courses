function itemsForSchool(input) {
    let packPens = Number(input[0]);
    let packMarkers = Number(input[1]);
    let literSpray = Number(input[2]);
    let discountPercent = Number(input[3]);
    let discountDecimal = discountPercent / 100;

    let pricePens = packPens * 5.80;
    let priceMarkers = packMarkers * 7.20;
    let priceSpray = literSpray * 1.20;
    let allItems = pricePens + priceMarkers + priceSpray;
    let totalPrice = allItems * discountDecimal;
    let totalFinalPrice = allItems - totalPrice;
    console.log(totalFinalPrice);
}

itemsForSchool([2, 3, 4, 25]);