function pastryShop(input) {

    let sweet = input[0];
    let countOrderedSweets = Number(input[1]);
    let dayFromDecBeforeChristmas = Number(input[2]);

    let priceCake = 0;
    let priceSouffle = 0;
    let priceBaklava = 0;

    let totalPrice = 0;

    switch (sweet) {
        case "Cake":
            if (dayFromDecBeforeChristmas <= 15) {
                priceCake = 24;
                totalPrice = countOrderedSweets * priceCake;
            } else if (dayFromDecBeforeChristmas > 15) {
                priceCake = 28.70;
                totalPrice = countOrderedSweets * priceCake;
            }
        break;
        case "Souffle":
            if (dayFromDecBeforeChristmas <= 15) {
                priceSouffle = 6.66;
                totalPrice = countOrderedSweets * priceSouffle;
            } else if (dayFromDecBeforeChristmas > 15) {
                priceSouffle = 9.80;
                totalPrice = countOrderedSweets * priceSouffle;
            }
        break;
        case "Baklava":
            if (dayFromDecBeforeChristmas <= 15) {
                priceBaklava = 12.60;
                totalPrice = countOrderedSweets * priceBaklava;
            } else if (dayFromDecBeforeChristmas > 15) {
                priceBaklava = 16.98;
                totalPrice = countOrderedSweets * priceBaklava;
            }
        break;
        default:
            break;
    }
    if (dayFromDecBeforeChristmas <= 22) {
        if (totalPrice > 100 && totalPrice < 200) {
            totalPrice = totalPrice - (totalPrice * 0.15);
        } else if (totalPrice > 200) {
            totalPrice = totalPrice - (totalPrice * 0.25);
        }
    }

    
    if (dayFromDecBeforeChristmas <= 15) {
        let additionalDiscount = 0.10;
        totalPrice = totalPrice - (totalPrice * additionalDiscount);
    }

    console.log(totalPrice.toFixed(2));

}

pastryShop([ 'Souffle', '20', '24', '' ])