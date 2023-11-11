function moving(input) {
    let index = 0;

    let width = Number(input[index]);
    index++
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let boxesToBeMoved = input[index];
    index++;

    let totalSpace = width * length * height;

    while (boxesToBeMoved !== "Done") {
        boxesToBeMoved = Number(boxesToBeMoved);

        totalSpace -= boxesToBeMoved;

        if (totalSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            return;
        }

        boxesToBeMoved = input[index];
        index++;
    }

    console.log(`${totalSpace} Cubic meters left.`);


}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"]);