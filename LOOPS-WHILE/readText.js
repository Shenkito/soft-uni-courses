function readText(input) {
    
    let index = 0 // създавам си променлива индекс да почва от 0 тоест Nakov
    let text = input[index]; // тук правя променлива която взима имената от входните ми данни като input[index]
    index++; // за да мога да взимам всеки следващ индекс
    
    while (text !== "Stop") { // докато текста е различен от Стоп
        console.log(text); // да чете
        text = input[index]; // вземи следващата входна данна
        index++; // ако не инкрементирам индекса влизам в безкраен цикъл
    }


}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);