function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let moneyEarned = puzzleCount * 2.60 + dollsCount * 3 + teddyBearCount * 4.10 + minionsCount * 8.20 + truckCount * 2; // 680lv.
    let toysCount = puzzleCount + dollsCount + teddyBearCount + minionsCount + truckCount; // 135броя
    
    if (toysCount >= 50) {
        moneyEarned = moneyEarned * 0.75; // В задачата тук отсъпката е 25% , аз ползвам 75%(0.75) защото трябва да видя колко ще са ми парите след отстъпката. Логиката е , че отстъпката си е 25% , което означава , че от 100% като извадя 25% = 75% който ми остават в парите. Ако ползвам 0,25(25%) както е зададено по условие тогава , ще разбера колко пари е отстъпката и после трябва отделно да я извадя от изкараните пари. Това е логиката. И двада варянта са ок.
    }
    
    let moneyAfterRent = moneyEarned * 0.90; // Тук ползваме същата логика като горната. В задачата е зададено 10% от парите отиват за наем. Което означава , че парите умнощаваме по 0,90(90% който ни остават като пари след като сме платили 10%) И получавам парите който са останали о след плащането на наема.
    
    if (moneyAfterRent >= holidayPrice) {
        let moneyLeft = moneyAfterRent - holidayPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyLeft = holidayPrice - moneyAfterRent;
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`)
    }

}

toyShop(["40.8","20","25","30","50","10"]);