function bestPlayer(input) {

    let index = 0;

    let player = input[index];
    index++;

    let goals = Number(input[index]);
    index++;

    let mostGoals = Number.MIN_SAFE_INTEGER

    while (player !== `END`) {

        if (goals > mostGoals) {

            playerName = player;

            mostGoals = goals
        }

        if (goals >= 10) {
            break;
        }

        player = input[index];
        index++;

        goals = Number(input[index]);
        index++;
    }

    console.log(`${playerName} is the best player!`);

    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }
}

bestPlayer(['Neymar', '2', 'Ronaldo', '1', 'Messi', '3', 'END']);