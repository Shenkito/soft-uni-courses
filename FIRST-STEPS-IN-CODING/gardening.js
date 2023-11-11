function gardening(input) {
    let allBackyard = Number(input[0]);
    let totalCost = allBackyard * 7.61;
    let discount =  0.18 * totalCost;
    let finalPrice = totalCost - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

gardening([550]);