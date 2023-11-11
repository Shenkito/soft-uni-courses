function sizeTriangle (input) {
    let size = Number(input[0]);
    let hight = Number(input[1]);
    let area = size * hight / 2;
    area = area.toFixed(2); // Тук с крайния резултат който е формулата за AREA , викам пиша команда toFixed(2) , за да добавя две нули след крайния резултат .00 , като (2) са нулите който искаме да добавим. 
    console.log(area);
}

sizeTriangle([20, 30]);


function sizeTrapezoid(input) {
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let area = (b1 + b2) * h / 2;
    area = area.toFixed(2); // Тук по същия начин добавих нулата 0 която искам в края вместо 73.5 с командата .toFixed(2) стана 73.50
    console.log(area);
}

sizeTrapezoid([8, 13, 7]);


function celToFar(input) {
    let cel = Number(input[0]);
    let far = (cel *(9/5)) + 32; // Туй за да намеря формулата за обръщане на градуси в фарен. потърсих в Google.
    console.log(far.toFixed(2)); // След това тук добавих директно към конзол лог функцията за добавяне на нула като отново ми трябваха две нули вместо 77 , да стане 77.00
}

celToFar([25]);