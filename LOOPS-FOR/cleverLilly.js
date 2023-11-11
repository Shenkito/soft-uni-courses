function cleverLilly(input) {

    let ageLilly = Number(input[0]); // 10
    let priceWashMachine = Number(input[1]); // 170.00
    let pricePerToy = Number(input[2]); // 6
    
    let recievedMoney = 0; // тук първо си направих променлива която е получените пари от четните рожденни дни тъй като на тях Лили получава пари а на нечетните играчки проверката е по=долу в If`a
    let evenBirthdayMoney = 10; // за първия си четен рд тоест 2рия тя получава 10лв. както и за всеки следващ четен.

    for (let i = 1; i <= ageLilly; i = i + 1) { // i почва от 1 тоест първия рд на Лили , до достигане на сегашните 10 години на Лили добавям +1

        if (i % 2 === 0) { // тук взимам i за проверката на четен или нечетен рождения ден е защото for`a ми ще върти от 1вия рожден ден до 10тия
            recievedMoney = recievedMoney + (evenBirthdayMoney - 1); // тук вече ползвам горе споменатата променлива , след като for`a ми стигне втория рожден ден 10те лв ще се добавят тук а - 1 е парите който брат и взимал всяка година в кято тя получавала пари тоест на всеки четен рд.
            evenBirthdayMoney = evenBirthdayMoney + 10;
        } else {
            recievedMoney = recievedMoney + pricePerToy; // за нечетен тя получава играчка която е на стойност 6лв. затова към променливата с получените параи се добавя цената на играчката.
        }
    
    }

if (recievedMoney >= priceWashMachine) {
    let moneyLeft = recievedMoney - priceWashMachine;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
} else {
    let moneyNeed = priceWashMachine - recievedMoney;
    console.log(`No! ${moneyNeed.toFixed(2)}`);
}

}

cleverLilly(["21",
"1570.98",
"3"]);