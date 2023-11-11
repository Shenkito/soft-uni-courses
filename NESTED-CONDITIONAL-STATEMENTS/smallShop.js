function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    switch (city) {
        case "Sofia":
            if (product === "coffee") {
                let total = quantity * 0.50;
                console.log(total);

            } else if (product === "water") {
                let total = quantity * 0.80;
                console.log(total);

            } else if (product === "beer") {
                let total = quantity * 1.20;
                console.log(total);

            } else if (product === "sweets") {
                let total = quantity * 1.45;
                console.log(total);

            } else if (product === "peanuts") {
                let total = quantity * 1.60;
                console.log(total);

            }
        break;
        case "Plovdiv":
            if (product === "coffee") {
                let total = quantity * 0.40;
                console.log(total);

            } else if (product === "water") {
                let total = quantity * 0.70;
                console.log(total);

            } else if (product === "beer") {
                let total = quantity * 1.15;
                console.log(total);

            } else if (product === "sweets") {
                let total = quantity * 1.30;
                console.log(total);

            } else if (product === "peanuts") {
                let total = quantity * 1.50;
                console.log(total);

            }
        break;
        case "Varna":
            if (product === "coffee") {
                let total = quantity * 0.45;
                console.log(total);

            } else if (product === "water") {
                let total = quantity * 0.70;
                console.log(total);

            } else if (product === "beer") {
                let total = quantity * 1.10;
                console.log(total);

            } else if (product === "sweets") {
                let total = quantity * 1.35;
                console.log(total);

            } else if (product === "peanuts") {
                let total = quantity * 1.55;
                console.log(total);

            }
        break;
    }




}


smallShop(["sweets","Sofia","2.23"]);