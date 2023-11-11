function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    switch (city) {
        case "Sofia":
        if (sales >= 0 && sales <= 500) {
            commission = 0.05;
            let earned = ((sales * commission).toFixed(2));
            console.log(earned);
        } else if (sales >= 500 && sales <= 1000) {
            commission = 0.07;
            let earned = ((sales * commission).toFixed(2));
            console.log(earned);
        } else if (sales >= 1000 && sales <= 10000) {
            commission = 0.08;
            let earned = ((sales * commission).toFixed(2));
            console.log(earned);
        } else if (sales > 10000) {
            commission = 0.12;
            let earned = ((sales * commission).toFixed(2));
            console.log(earned);
        } else {
            console.log("error");
        }
        break;
        case "Varna":
        if (sales >= 0 && sales <= 500) {
            commission = 0.045;
            let earned = ((sales * commission).toFixed(2));
            console.log(earned);
        } else if (sales >= 500 && sales <= 1000) {
            commission = 0.075;
            let earned = ((sales * commission).toFixed(2));
            console.log(earned);
        } else if (sales >= 1000 && sales <= 10000) {
            commission = 0.1;
            let earned = ((sales * commission).toFixed(2));
            console.log(earned);
        } else if (sales > 10000) {
            commission = 0.13;
            let earned = ((sales * commission).toFixed(2));
            console.log(earned);
        } else {
            console.log("error");
        }
        break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commission = 0.055;
                let earned = ((sales * commission).toFixed(2));
                console.log(earned);
            } else if (sales >= 500 && sales <= 1000) {
                commission = 0.08;
                let earned = ((sales * commission).toFixed(2));
                console.log(earned);
            } else if (sales >= 1000 && sales <= 10000) {
                commission = 0.12;
                let earned = ((sales * commission).toFixed(2));
                console.log(earned);
            } else if (sales > 10000) {
                commission = 0.145;
                let earned = ((sales * commission).toFixed(2));
                console.log(earned);
            } else {
                console.log("error");
            }
            break;
        default: console.log("error");
        break;

        
    }
}

tradeCommissions(["Kaspichan",
"-50"]);