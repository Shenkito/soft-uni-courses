function building(input) {

  let countFloor = Number(input[0]);
  let countRoom = Number(input[1]);

  let result = "";

  for (let floor = countFloor; floor >= 1; floor--) {
    for (let room = 0; room < countRoom; room++) {
      if (floor === countFloor) {
        result += `L${floor}${room} `;
      } else if (floor % 2 === 0) {
        result += `O${floor}${room} `;
      } else {
        result += `A${floor}${room} `;
      }
    }
    result += "\n";
  }
  console.log(result);

}

building(["6", "4"]);