function trekkingMania(input) {

    let countGroups = Number(input[0]);
    let musala = 0; // Тук ще запазвам хората който ще се качват на върха . който все още не знам броя.
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= countGroups; i++) { // i ми почва от 1 , защото на 0 индекс имам countGroups , та докато i ми е по-малко или равно на countGropus искам да увеличавам с едно.
        let alpinists = Number(input[i]); // Тук алпинистите са ми от i което значи че почвам от индекс 1.

        if (alpinists <= 5) { // Тук почвам проверките , тоест ако броя на алпинистите ми е по малък или равен на 5
            musala = musala + alpinists; // В променливата musala която е с начална стойност 0 по горе , ще се добавят броя алпинисти. Същото е и с долните проверки.
        } else if (alpinists >= 6 && alpinists <= 12) {
            monblan = monblan + alpinists;
        } else if (alpinists >= 13 && alpinists <= 25) {
            kilimanjaro = kilimanjaro + alpinists;
        } else if (alpinists >= 26 && alpinists <= 40) {
            k2 = k2 + alpinists;
        } else if (alpinists >= 41) {
            everest = everest + alpinists;
        }
    
    }

    let totalAlpinists = musala + monblan + kilimanjaro + k2 + everest; // Тук вече като знам на кой връх колко алпинисти ще се качват мога да намеря общия им брой като ги събирам.
    let musalaPercent = musala / totalAlpinists * 100; // За да видя в проценти тук , хората който ще качват musala ги деля на общия брой който намерих на горния ред и умножавам * по 100 , така намирам процента.
    let monblanPercent = monblan / totalAlpinists * 100;
    let kilimanjaroPercent = kilimanjaro / totalAlpinists * 100;
    let k2percent = k2 / totalAlpinists * 100;
    let everestPercent = everest / totalAlpinists * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);


}

trekkingMania([
"10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);