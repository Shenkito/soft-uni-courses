function num100To200(input) {

    let num = Number(input[0]);

    if (num < 100) {
        console.log("Less than 100");
    }else if (num >= 100 , num <=200) { // Тук вместо "," мога да ползвам логическото И && за да изпиша два num`a.
        console.log("Between 100 and 200")
    }else if (num > 200) {
        console.log("Greater than 200")
    }
    
}

num100To200(["95"]);