function architectProject(input) {
    let architectName = (input[0]);
    let numberOfProjects = (input[1]);
    let needTime = numberOfProjects * 3;
    let textToShow = (`The architect ${architectName} will need ${needTime} hours to complete ${numberOfProjects} project/s.`);
    console.log(textToShow);

}

architectProject(["George", 4, 3])