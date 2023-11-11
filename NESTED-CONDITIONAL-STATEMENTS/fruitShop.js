function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana") {
                let toPayBanana = quantity *2.50;
                console.log(toPayBanana.toFixed(2));
            } else if (fruit === "apple") {
                let toPayApple = quantity * 1.20;
                console.log(toPayApple.toFixed(2));
            } else if (fruit === "orange") {
                let toPayOrange = quantity * 0.85;
                console.log(toPayOrange.toFixed(2))
            } else if (fruit === "grapefruit") {
                let toPayGrapefruit = quantity * 1.45;
                console.log(toPayGrapefruit.toFixed(2));
            } else if (fruit === "kiwi") {
                let toPayKiwi = quantity * 2.70;
                console.log(toPayKiwi.toFixed(2));
            } else if (fruit === "pineapple") {
                let toPayPineapple = quantity * 5.50;
                console.log(toPayPineapple.toFixed(2));
            } else if (fruit === "grapes") {
                let toPayGrapes = quantity * 3.85;
                console.log(toPayGrapes.toFixed(2));
            } else {
                console.log("error");
            }
        break;
        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                let toPayBanana = quantity * 2.70;
                console.log(toPayBanana.toFixed(2));
            } else if (fruit === "apple") {
                let toPayApple = quantity * 1.25;
                console.log(toPayApple.toFixed(2));
            } else if (fruit === "orange") {
                let toPayOrange = quantity * 0.90;
                console.log(toPayOrange.toFixed(2))
            } else if (fruit === "grapefruit") {
                let toPayGrapefruit = quantity * 1.60;
                console.log(toPayGrapefruit.toFixed(2));
            } else if (fruit === "kiwi") {
                let toPayKiwi = quantity * 3.00;
                console.log(toPayKiwi.toFixed(2));
            } else if (fruit === "pineapple") {
                let toPayPineapple = quantity * 5.60;
                console.log(toPayPineapple.toFixed(2));
            } else if (fruit === "grapes") {
                let toPayGrapes = quantity * 4.20;
                console.log(toPayGrapes.toFixed(2));
            } else {
                console.log("error");
            }
        break;
        default: console.log("error")



    }

}

fruitShop(["tomato",
"Monday",
"0.5"]);
