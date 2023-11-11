function santasHoliday(input) {
    let countDays = Number(input[0]) - 1;
    let room = input[1];
    let feedback = input[2];

    let price = 0;

    switch (room) {
        case "room for one person":
            price = 18.00;
        break;

        case "apartment":
            price = 25.00;

            if (countDays < 10) {
                price = price - (price * 0.30);
            } else if (countDays >= 10 && countDays <= 15) {
                price = price - (price * 0.35);
            } else if (countDays >= 15) {
                price = price - (price * 0.50);
            }

        break;

        case "president apartment":
            price = 35.00;

            if (countDays < 10) {
                price = price - (price * 0.10);
            } else if (countDays > 10 && countDays < 15) {
                price = price - (price * 0.15);
            } else if (countDays > 15) {
                price = price - (price * 0.20);
            }
        break;
        default:
            break;
    }

    let totalPriceToPay = price * countDays;
    
    if (feedback === "negative") {
        totalPriceToPay = totalPriceToPay - (totalPriceToPay * 0.10);
    } else if (feedback === "positive") {
        totalPriceToPay = totalPriceToPay + (totalPriceToPay * 0.25);
    }

    console.log(totalPriceToPay.toFixed(2));

}

santasHoliday([ '30', 'president apartment', 'negative' ]);