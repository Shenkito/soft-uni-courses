function repaitingPrice(input) {
    let needNylon = Number(input[0]);
    let needPaint = Number(input[1]);
    let paintLiq = Number(input[2]);
    let contractorsHours = Number(input[3]);

    let priceNylon = (needNylon + 2) * 1.50;
    let pricePaint = (needPaint * 1.1) * 14.50;
    let priceLiq = paintLiq * 5;
    let totalPriceMaterials = priceNylon + pricePaint + priceLiq + 0.40;
    let pricePercentage = totalPriceMaterials * 0.3;
    let contractorPrice = pricePercentage * contractorsHours;
    let finalPrice = contractorPrice + totalPriceMaterials;
    console.log(finalPrice);
}
repaitingPrice([10, 11, 4, 8]);