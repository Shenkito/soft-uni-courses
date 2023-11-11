function combinations (input) {
    let number = Number(input[0]);
    let totalValidCombinations = 0;

    for (let x1 = 0; x1 <= number; x1++) {
        for (let x2 = 0; x2 <= number; x2++) {
            for (let x3 = 0; x3 <= number; x3++) {
                
                let result = x1 + x2 + x3;

                if (result === number) {
                    totalValidCombinations++;
                }

            }
        }
    }
    console.log(totalValidCombinations);
}

combinations(["5"]);