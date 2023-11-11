function newHome(input) {

    let typeFlowers = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice; // Ако все още не знам стойоноста , мога да си я задам като променлива тук и в последствие да я променям както долу в кода.

    switch (typeFlowers) {
        
        case "Roses":
            totalPrice = countFlowers * 5;
            if (countFlowers > 80) {
                totalPrice = totalPrice * 0.90; // Тук ако са поръчани повече от 80 Рози , имам 10% отстъпка от крайната ценя което означава , че трябва да заплатя всичките останали 90%.
            }
        break;
        case "Dahlias":
            totalPrice = countFlowers * 3.80; // Тук също само , че имам 15% и плащам останалите 85%
            if (countFlowers > 90) {
                totalPrice = totalPrice * 0.85;
            }
        break;
        case "Tulips":
            totalPrice = countFlowers * 2.80; // Тук също.
            if (countFlowers > 80) {
                totalPrice = totalPrice * 0.85;
            }
        break;
        case "Narcissus":
            totalPrice = countFlowers * 3;
            if (countFlowers < 120) {
                totalPrice = totalPrice + (totalPrice * 0.15); // Тук ако купя по-малко от 120 , цената ми се дига с 15 процента.
            }
        break;
        case "Gladiolus":
            totalPrice = countFlowers * 2.50;
            if (countFlowers < 80) {
                totalPrice = totalPrice + (totalPrice * 0.20); // Тук също само , че с 20%
            }
        break;
        default:
            break;

    }
    if (totalPrice <= budget) {
        let moneyLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeed = totalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeed.toFixed(2)} leva more.`);
    }

    
}

newHome(["Tulips",
"88",
"260"]);