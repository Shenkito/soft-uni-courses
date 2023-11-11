function table(input) {

    let num = Number(input[0]);

    let numtToString = num.toString();

    for (let i = 1; i <= numtToString[2]; i++) {
        for (let j = 1; j <= numtToString[1]; j++) {
            for (let y = 1; y <= numtToString[0]; y++) {

                let result = i * j * y;

                console.log(`${i} * ${j} * ${y} = ${result}`);
            }
        }
    }
}

table(['324']);