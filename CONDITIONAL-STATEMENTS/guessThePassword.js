function guessThePass(input) {

    let wrongPass = input[0];
    let realPass = "s3cr3t!P@ssw0rd";

    if (wrongPass === realPass) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");

}

}
guessThePass("qwerty");