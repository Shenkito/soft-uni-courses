function salary(input) {

    let countOpenedTab = Number(input[0]);
    let salary = Number(input[1]);
    let websites; // Тук създадох променлива за да мога после да я ползвам като Switch.

    for (let i = 2; i < input.length; i++) { // i ми стартира от 2 защото 0 ми е countOpenedTabs , 1 ми е salary , и чак тогава ми идват другите входове като искам да взема дължината им и докато стигна края да се увеличава с 1.
         websites = input[i]; // Тук websites ми е от i тоест (2) защото както казах от там почват по вход.

        switch (websites) {
            case "Facebook":
                salary = salary - 150;
            break;
            case "Instagram":
                salary = salary - 100;
            break;
            case "Reddit":
                salary = salary - 50;
            break;
        }

    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
    } else {
        console.log(`${salary}`)
    }

}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);