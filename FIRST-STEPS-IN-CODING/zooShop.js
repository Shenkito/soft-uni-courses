function zooShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let allCost = (dogFood * 2.50) + (catFood * 4);
    console.log(allCost);
}

zooShop([5, 4])