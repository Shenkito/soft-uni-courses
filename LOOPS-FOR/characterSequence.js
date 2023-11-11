function characterSequence(input) {
    let word = input[0]; // Тук ми е входа който получавам тоест "softuni"
    let textLength = word.length; // Тук общата дължина от символи в входа ми , като функцията е името на променливата ми "word" и добавям .length
    
    for (let i = 0; i < textLength; i+= 1) { // i ми е нула защото почвам от 0 , докато i е по-малко от дължината на входа ми , i да се увеличава с едно като това може да се изпише и i = i + 1. 
        console.log(word[i]); // Логвам входната ми променлива с [i] за да изпълня и for`a. Тази задача е добър пример за печатане на нов ред!!!
    }
}

characterSequence(["softuni"]);