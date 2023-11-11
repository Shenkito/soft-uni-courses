function examPreparation(input) {
    let index = 0; // почвам от нулев индекс
    let badGradesAllowed = Number(input[index]); // на 0 нулев индекс имам брой позволени лоши оценки
    index++; // след като съм ползвал индекса , го инкрементирам той става 1

    let examName = input[index]; // тук вече взимам името от индекс 1;
    index++; // пак инкрементирам индекса за да мога да ползвам следващия. Тоест индекс 2

    let examGrade = Number(input[index]); // тук взимам оценката която е изкарана от индекс 2 , тоест примерно 3ка както в случая
    index++; // и веднага инкрементирам индекса тоест индекс 3.

    let badGrades = 0; // променлива която все още не знам и ще проврявам

    let gradesSum = 0; // ----------
    let gradesCount = 0; // ---------

    let lastExam = ''; // 




    while (examName !== "Enough") { // докато не стигна Enough цикъла да ще продължава.

        lastExam = examName; // така тук вече ако съм стигнал Enough то променливата която съм създал в началото ще приеме данните на предната задача преди Enough.

        if (examGrade <= 4) { // ако оценката е по малка или равна на 4
            badGrades++; // променливата ще се увеличи с едно тоест една лоша оценка повече
        }

        if (badGrades === badGradesAllowed) { // ако броя на лоши оценки е равен на лошите оценки който мога да направя
            console.log(`You need a break, ${badGrades} poor grades.`); // То тогава логвам.
            return;
        }

        gradesSum += examGrade; // към общата стойност на оценките която първоначално съм обявил като променлива с стойност 0 се добавя всяка оценка от изпита
        gradesCount++; // колко оценки съм получил тоест 1,2,3,4,....

        examName = input[index]; // и вече тук искам да взема следващия изпит от индекса който съм обявил преди това тоест мисля , че 3
        index++; // веднага инкреметирам и индекса ми става 4.

        examGrade = Number(input[index]); // и тук взимам оценката от изпита която е на индекса който вече съм взел тоест 4;
        index++; // и пак инкрементирам тоест индекс става 5 ако случайно имам следващи входове.
    }

    let avgGrade = gradesSum / gradesCount; // извън скоупа на While пресмятам средната оценка 

    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastExam}`);


}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);