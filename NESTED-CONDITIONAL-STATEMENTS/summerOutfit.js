function summerOutfit(input) {

    let temperature = Number(input[0]);
    let partOfDay = input[1];

    switch (partOfDay) {
        case "Morning":
            if (temperature >= 10 && temperature <= 18) {
                let outfit = "Sweatshirt";
                let shoes = "Sneakers";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            break;

            } else if (temperature > 18 && temperature <= 24) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            break;

            } else if (temperature >= 25) {
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            }
            break;
        case "Afternoon":
            if (temperature >= 10 && temperature <= 18) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            break;

            } else if (temperature > 18 && temperature <= 24) {
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            break;

            } else if (temperature >= 25) {
                let outfit = "Swim Suit";
                let shoes = "Barefoot";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
            }
            break;
            case "Evening":
                if (temperature >= 10 && temperature <= 18) {
                    let outfit = "Shirt";
                    let shoes = "Moccasins";
                    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
    
                } else if (temperature > 18 && temperature <= 24) {
                    let outfit = "Shirt";
                    let shoes = "Moccasins";
                    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                break;
    
                } else if (temperature >= 25) {
                    let outfit = "Shirt";
                    let shoes = "Moccasins";
                    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
                }
                break;
                default: console.log();
            


    }
}

summerOutfit(["10",
"Evening"])
