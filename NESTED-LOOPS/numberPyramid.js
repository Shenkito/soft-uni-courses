function numberPyramid (input) {

    let num = Number(input[0]);
    let currentCounter = 1;
    let isBigger = false;
    let printLine = "";

    for (let rows = 1; rows <= num; rows++) {
        for (let nums = 1; nums <= rows; nums++) {

            if (currentCounter > num) {
                isBigger = true;
                break;
            }

            printLine += currentCounter + " ";
            currentCounter++

        }

        console.log(printLine);
        printLine = "";

        if(isBigger) {
            break;
        }

    }


}
numberPyramid(["15"]);