function password(input) {

    // препоръчително да започна така let index = 0;
    //                                let name = input[index];
    //                                index++; след всяко прочитане инкрементирам променливата;
    //                                let realPassword = input[index];
    //                                index++; инкрементирам отново.
    //                                let enteredPass = input[index];
    //                                index++; пак инкрементирам
    //                                while (realPassword !== enteredPass) {
    //                                   enteredPass = input[index];
    //                                   index++; 
    //                                }
    //                                console.log(....)

    let username = input[0]; // имам име от нулев индекс
    let password = input[1]; // имам паролата на първи идекс

    let data = input[2]; // въведени пароли
    let index = 3; // индекса ми почва от 3 тоест "1324"

    while (data !== password) { // докато въведената парола е различна от истинската
        data = input[index]; // тук взима текущия индекс по ред
        index++; // и след това взимам другия
    }

    console.log(`Welcome ${username}!`);



}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);