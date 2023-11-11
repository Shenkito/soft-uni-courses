function depositCalc(input) {
    
    let sumDeposited = Number(input[0]);
    let timeDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let anualIntDec = annualInterestRate / 100;
    let totalSum = sumDeposited + timeDeposit * (sumDeposited * anualIntDec) / 12;
    console.log(totalSum);

}

depositCalc([200, 3, 5.7]);