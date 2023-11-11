function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let placeToStay;
    let totalCost = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                totalCost = budget * 0.30;
                destination = "Bulgaria";
                placeToStay = "Camp";

            } else if (budget <= 1000) {
                totalCost = budget * 0.40;
                destination = "Balkans";
                placeToStay = "Camp";
            }
        break;
        case "winter":
            if (budget <= 100) {
                totalCost = budget * 0.70;
                destination = "Bulgaria";
                placeToStay = "Hotel";

            } else if (budget <= 1000) {
                totalCost = budget * 0.80;
                destination = "Balkans";
                placeToStay = "Hotel";
            }
        break;
        default:
            break;
    }
if (budget > 1000) {
    totalCost = budget * 0.90;
    destination = "Europe";
    placeToStay = "Hotel";
}

console.log(`Somewhere in ${destination}`);
console.log(`${placeToStay} - ${totalCost.toFixed(2)}`);

}

journey(["1500", "summer"]);