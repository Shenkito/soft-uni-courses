function accountBalance(input) {

    let deposit = input[0];
    let index = 1;
    let balance = 0;

    while (deposit !== "NoMoreMoney") {
        let ammount = Number(deposit);
        
        if (ammount < 0) {
            console.log("Invalid operation!")
            break;
        }
        balance = balance + ammount;
        console.log(`Increase: ${ammount.toFixed(2)}`);
        deposit = input[index];
        index++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);

}


accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);