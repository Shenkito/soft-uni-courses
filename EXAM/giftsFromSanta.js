function giftsFromSanta(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let numbers = '';

    for (let i = m; i >= n; i--) {

        let currentNum = i;

        if (i % 2 === 0 && i % 3 === 0) {
            
            if (currentNum === s) {
                break;
            }
            
            numbers += `${currentNum} `
        }

        currentNum = 0;
    }

    console.log(numbers);
}

giftsFromSanta([ '1', '30', '15' ]);