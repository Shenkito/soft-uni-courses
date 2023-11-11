function hotelRoom(input) {
    
    let month = input[0];
    let countNights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;
            if (countNights > 7 && countNights <= 14) {
                studioPrice = studioPrice * 0.95;
            } else if (countNights > 14) {
                studioPrice = studioPrice * 0.70;
            }
        break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if (countNights > 14) {
                studioPrice = studioPrice * 0.80;
            }
        break;
        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
        break;
        default:
            break;
    }
if (countNights > 14) {
    apartmentPrice = apartmentPrice * 0.90;
}

let apartmentPriceTotal = countNights * apartmentPrice;
console.log(`Apartment: ${apartmentPriceTotal.toFixed(2)} lv.`);

let studioPriceTotal = countNights * studioPrice;
console.log(`Studio: ${studioPriceTotal.toFixed(2)} lv.`);

}

hotelRoom(["August",
"20"]);
