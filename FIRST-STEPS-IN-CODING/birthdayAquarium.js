function birthdayAquarium(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentSpace = Number(input[3]);

    let totalSpaceAquariumCm = lenght * width * height;
    let aquariumLiters = totalSpaceAquariumCm / 1000;
    let usedSpace = aquariumLiters * 0.17;
    let litersNeed = aquariumLiters - usedSpace;
    console.log(litersNeed);
}

birthdayAquarium([85, 75, 47, 17]);