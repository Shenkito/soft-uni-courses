// •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// •	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
// Резултатът да се закръгли до 3 цифри след десетичната запетая. 



function areaFigures(input) {
    let figure = input[0];

    if(figure === "square") {
        let a = Number(input[1]);
        console.log((a * a).toFixed(3));
    } else if(figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        console.log((a * b).toFixed(3));
    } else if(figure === "circle") {
        let radius = Number(input[1]);
        console.log((Math.PI * Math.pow(radius , 2)).toFixed(3));
    } else if(figure === "triangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        console.log((a * b / 2).toFixed(3));
    }

}
areaFigures(["triangle","4.5","20"]);

