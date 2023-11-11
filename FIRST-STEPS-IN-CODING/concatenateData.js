function concatenateData(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let city = input[3]
    let concatenateData = `You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`;
    console.log(concatenateData)
}

concatenateData(["Ivelin", "Shenkov", 30, "Sliven"])