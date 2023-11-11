function cinema(input) {
    let typeProjection = input[0];
    let countLines = Number(input[1]);
    let countColumns = Number(input[2]);

    switch (typeProjection) {
        case "Premiere":
            let totalIncomePremiere = 12.00 * (countLines * countColumns);
            console.log(totalIncomePremiere.toFixed(2));
        break;
        
        case "Normal":
            let totalIncomeNormal = 7.50 * (countLines * countColumns);
            console.log(totalIncomeNormal.toFixed(2));
        break;

        case "Discount":
            let totalIncomeDiscount = 5.00 * (countLines * countColumns);
            console.log(totalIncomeDiscount.toFixed(2));
        break;
        default: console.log();
    }

}


cinema(["Discount",
"12",
"30"])

