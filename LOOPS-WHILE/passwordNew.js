function passwordNew(input) {

    let index = 0 // почвам от индекс 0
    let username = input[index]; // на нулев 0 индекс имам Наков
    index++; // увеличавам тоест взимам другата входна данна
    let password = input[index]; // индексът вече е 1 взима паролата на 1 индекс
    index++; // увеличава тоест взима следващата входна данна
    let enteredPassword = input[index]; // индексът е вече 2 там е data ("Pass")
    index++; // взимам следващия индекс

    while (enteredPassword !== password) { // индексът тук вече е 3 докато въведената парола е разлиан от password да иска нова парола примерно.
        enteredPassword = input[index]; // паролата тук е 1324 тя е различна връща обратно проверката и взима вече 4ти индекс вече паролата е 1234 която е вярната влиза в 5тия индекс но приключва.
        index++; //
    }

    console.log(`Welcome ${username}!`);


}

passwordNew(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);