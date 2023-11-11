function oldBooks(input) {
    let bookSearched = input[0]; // Книгата която търся тя е на индекс 0 от входните данни.

    let index = 1; // индекс е 1 зашото 0 е вече взет.
    let currentBook = input[index]; // текущата ми книга която ще е от индекс 1.
    index++; // и тъй като вече съм я взел за да не взема същата после , инкрементирам индекса !!!

    let booksChecked = 0; // това са ми книгите който съм провирил.

    while (currentBook !== "No More Books") { // докато текущата книга е различно от No More Books цикъла се повтаря
        if (currentBook === bookSearched) { // ако текущата ми книга е равна на книгата която търся то тогава
            console.log(`You checked ${booksChecked} books and found it.`) // логвам книгата.
            return; // ползвам ретърн защото вече съм открил другата и вече не търся прекратява целия код. ако беше break то тогава ще прекратя само скоупа на while циклъла и ще чете кода отдолу.
        }

        booksChecked++; // инкрементирам тъй като съм проверил книга

        currentBook = input[index]; // взимам следаваща книга от текущия индекс
        index++; // и веднага инкрементирам индекса за да не взема същата а следващата
    }

    console.log("The book you search is not here!");
    console.log(`You checked ${booksChecked} books.`);
}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"]);