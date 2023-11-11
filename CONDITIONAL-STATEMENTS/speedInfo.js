function speedInfo(input) {
    let theSpeed = Number(input[0]);

    if (theSpeed <= 10) {
        console.log("slow");
    }else if (theSpeed >= 10 , theSpeed <= 50) {
        console.log("average");
    }else if (theSpeed >= 50 , theSpeed <= 150) {
        console.log("fast");
    }else if (theSpeed >= 150 , theSpeed <= 1000) {
        console.log("ultra fast");
    }else {
        console.log("extremely fast");
    }
}

speedInfo(["8"]);