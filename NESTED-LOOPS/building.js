function building (input) {

    let countFloors = Number(input[0]);
    let countRooms = Number(input[1]);
    let result = "";

    for (let floor = countFloors; floor >= 1; floor--) {
        for (let rooms = 0; rooms < countRooms; rooms++) {
            if (floor === countFloors) {
                if (rooms === countRooms -1) {
                    result = result + "L" + floor + rooms;
                } else {
                    result = result + "L" + floor + rooms + " ";
                }
            } else if (floor % 2 === 0) {
                if (rooms === countRooms -1) {
                    result = result + "O" + floor + rooms;
                } else {
                    result = result + "O" + floor + rooms + " ";
                }
            } else {
                if (rooms === countRooms -1) {
                    result = result + "A" + floor + rooms;
                } else {
                    result = result + "A" + floor + rooms + " ";
                }
            }
        }
        console.log(result);
        result = "";
    }
}


building(["6", "4"]);