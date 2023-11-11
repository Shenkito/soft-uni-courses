function histogram(input) {

    let numsCount = Number(input[0]); // тук по условие числата който ще получа са общо 3
    let currentNum = 0;

    let p1Count = 0; // тук от доллната проверка ще ми идват числата който са я преминали като true , тоест ако текущо ми число е по малко < от 200 то ще злезе в тази променлива.
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;


    for (let i = 1; i <= numsCount; i++) { // с този цикъл i ми почва от едно , докато i ми е по малко или равно на общия брой на числата който съм получил като вход тоест 3 , да ми се увеличава с едно +1
        currentNum = Number(input[i]); // и след това тази променлива която съм създал в началото на кода по-горе да ми влиза числото което се върти в горния ред , тоест първо число от вход , второ число от вход и трето число от вход. Взимам числото на текущия индекс.

        if (currentNum < 200) {
            p1Count = p1Count + 1; // може и така p1Count++; // ако числото ми е true и то е по=малко < от 200 , то ще се добави в p1Count и както виждаме горев в началото от 0 то ще стане 1
        } else if (currentNum < 400) {
            p2Count = p2Count + 1;
        } else if (currentNum < 600) {
            p3Count = p3Count + 1;
        } else if (currentNum < 800) {
            p4Count = p4Count + 1;
        } else {
            p5Count = p5Count +1;
        }
    }

    let p1Percent = (p1Count / numsCount) * 100; // Общата стойност тоест числата който са влезли в тази променлива ги деля / на общата стойност на входа ми тоест числата който получавам по вход и след това умножавам * по 100 за да намеря процента.
    let p2Percent = (p2Count / numsCount) * 100;
    let p3Percent = (p3Count / numsCount) * 100;
    let p4Percent = (p4Count / numsCount) * 100;
    let p5Percent = (p5Count / numsCount) * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);

}

histogram(["3", "1", "2", "999"]);