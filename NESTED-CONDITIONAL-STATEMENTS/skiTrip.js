function skiTrip(input) {

    let daysToStay = Number(input[0]);
    let typeOfRent = input[1];
    let feedback = input[2];

    let nightsToStay = daysToStay - 1;
    let price = 0;
    let feedbackDiscount = 0;

    switch (typeOfRent) {
        case "room for one person":
            price = 18.00;
        break;
        case "apartment":
            price = 25.00;
            if (nightsToStay < 10) {
                price = price * 0.70;
            } else if (nightsToStay > 10 && nightsToStay < 15) {
                price = price * 0.65;
            } else if (nightsToStay > 15) {
                price = price * 0.50;
            }
        
        break;
        case "president apartment":
            price = 35.00;
            if (nightsToStay < 10) {
                price = price * 0.90;
            } else if (nightsToStay < 15) {
                price = price * 0.85;
            } else if (nightsToStay > 15) {
                price = price * 0.80;
            }
        break;
        default:
            break;
        }

let priceToPay = nightsToStay * price;

        if (feedback === "positive") {
            feedbackDiscount = 0.25;
            priceToPay = priceToPay + (priceToPay * feedbackDiscount);
        } else if (feedback === "negative") {
            feedbackDiscount = 0.10
            priceToPay = priceToPay - (priceToPay *feedbackDiscount);
        }

    console.log(priceToPay.toFixed(2));


}

skiTrip(["2",
"apartment",
"positive"]);