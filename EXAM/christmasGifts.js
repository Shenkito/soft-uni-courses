function christmasGifts(input) {

    let index = 0;
    let age = input[index];
    index++;

    let adults = 0;
    let kids = 0;
    let priceToys = 5;
    let priceSweater = 15;

    while (age !== `Christmas`) {

        if (age <= 16) {
            kids++;
        } else if (age > 16) {
            adults++;
        }

        age = input[index];
        index++;
    }

    let totalPriceToys = kids * priceToys;
    let totalPriceSweater = adults * priceSweater;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${totalPriceToys}`);
    console.log(`Money for sweaters: ${totalPriceSweater}`);
}

christmasGifts(['16', '20', '46', '12', '8', '20', '49', 'Christmas']);