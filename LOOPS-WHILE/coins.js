// ctrl + shift + L ако искам да маркирам всички повторения на дадена променлива и евентуално да я променя или изтрия а не едно по едно.

function coins(input) {
    let totalSum = Number(input[0]); // общата сума стотинки 1.23лв. тоест общото ресто което трябва да върна
    let exchangeLeft = Math.round(totalSum * 100); // тук от 1.23лв. стават 123 стотинки , умножавам по 100. Ако е 3.59лв. то тогава ще са 359 стотинки. Math.round закръгля числото.

    let coinsUsed = 0; // тук си създавам променлива която запазва колко стотинки съм използвал за да върна рестото.

    while (exchangeLeft > 0) { // докато не съм върнал цялото ресто да върти цикъла

        if (exchangeLeft >= 200) { // проверявам дали мога да върна 2лв тоест 200 стотинки
            exchangeLeft -= 200; // ако мога то тогава изваждам върнатото тоест exchangeLeft ще бъде равно = exchangeLeft = 200;
            coinsUsed++; // и тук декларирам , че съм върнал една монета като променливата която съм създал горе ще се увеличи с 1
        } else if (exchangeLeft >= 100) { // Тук същия принцип само , че проверявам дали мога да върна 1лв. тоест 100 стотинки..
            exchangeLeft -= 100;
            coinsUsed++; // този код може да бъде изведен накрая в цикъла а не след всеки случай.
        } else if (exchangeLeft >= 50) {
            exchangeLeft -= 50;
            coinsUsed++;
        } else if (exchangeLeft >= 20) {
            exchangeLeft -= 20;
            coinsUsed++;
        } else if (exchangeLeft >= 10) {
            exchangeLeft -= 10;
            coinsUsed++;
        } else if (exchangeLeft >= 5) {
            exchangeLeft -= 5;
            coinsUsed++;
        } else if (exchangeLeft >= 2) {
            exchangeLeft -= 2;
            coinsUsed++
        } else if (exchangeLeft >= 1) {
            exchangeLeft -= 1;
            coinsUsed++;
        }

        // примерно тук coinsUsed++;
    }

    console.log(coinsUsed);

}

coins(["1.23"]);