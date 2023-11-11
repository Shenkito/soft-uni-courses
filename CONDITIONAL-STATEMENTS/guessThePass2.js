function guessPass2(input) {

    let pass = input[0];
    let realPass = "s3cr3t!P@ssw0rd";

    if (pass === realPass) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!");
    }

}

guessPass2(["s3cr3t!P@ssw0rd"]);