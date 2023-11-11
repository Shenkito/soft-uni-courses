function readingBook(input) {
    let currentBookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToFinishBook = Number(input[2]);

    let totalTimeToReadTheBook = currentBookPages / pagesPerHour;
    let totalTime = totalTimeToReadTheBook / daysToFinishBook;
    console.log(totalTime);
}

readingBook([212 , 20 , 2]);