function weekendOrWorkingDay(input) {
    let dayOfWeek = input[0];

    switch (dayOfWeek) {
        case "Monday":
            console.log("Working day"); // Тук вместо да пиша на всеки ред отделно , мога да naпиша само case'овете до "Friday" и там ще напиша console.log("Working Day") и break'a зашото от Пон до Петък са работни дни и в случая се чете до последния break. Case "Saturday" и "Sunday" по същия начин на Sunday. Така казано можем да обеденим няколко кейса за едно и също значение.
            break;
        case "Tuesday":
            console.log("Working day");
            break;
        case "Wednesday":
            console.log("Working day");
            break;
        case "Thursday":
            console.log("Working day");
            break;
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
            console.log("Weekend");
            break;
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}

weekendOrWorkingDay([""])