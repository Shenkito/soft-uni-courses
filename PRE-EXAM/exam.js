function exam(input) {

    let countStudents = Number(input[0]);
    let index = 1;

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;

    let gradesSum = 0;
    let averageSum = 0;

    for (let i = 1; i <= countStudents; i++) {

        let grade = Number(input[index])
        index++;

        

        if (grade >= 3 && grade <= 3.99) {
            group3++;
        } else if (grade >= 4 && grade <= 4.99) {
            group2++;
        } else if (grade >= 5) {
            group1++;
        } else if (grade < 3) {
            group4++
        }
        
        gradesSum = gradesSum + grade;
        averageSum = gradesSum / countStudents;
    }

let group3Percent = group3 / countStudents * 100;
let group2Percent = group2 / countStudents * 100;
let group1Percent = group1 / countStudents * 100;
let group4Percent = group4 / countStudents * 100;

console.log(`Top students: ${group1Percent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${group2Percent.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${group3Percent.toFixed(2)}%`);
console.log(`Fail: ${group4Percent.toFixed(2)}%`);
console.log(`Average: ${averageSum.toFixed(2)}`);



}

exam(['6','2','3','4','5','6','2.2']);