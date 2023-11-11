function cinemaTickets(input) {

    let index = 0;

    let movieName = input[index];
    index++;

    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;

    while (movieName !== "Finish") {

        let spacesAvailable = Number(input[index]);
        index++

        let ticketType = input[index];
        index++;

        let ticketsSold = 0;

        while (ticketType !== "End") {

            ticketsSold += 1;

            if (ticketType === "student") {
                studentTicket++;
            } else if (ticketType === "standard") {
                standardTicket++;
            } else if (ticketType === "kid") {
                kidTicket++;
            }

            if (ticketsSold === spacesAvailable) {
                break;
            }
            
            ticketType = input[index];
            index++;
        }

        let percentTaken = (ticketsSold / spacesAvailable) * 100;
        
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        movieName = input[index];
        index++;

    }

    let totalTicketsSold = studentTicket + standardTicket + kidTicket;
    console.log(`Total tickets: ${totalTicketsSold}`);

    let studentTicketPercent = (studentTicket / totalTicketsSold) * 100;
    let standardTicketPercent = (standardTicket / totalTicketsSold) * 100;
    let kidTicketPercent = (kidTicket / totalTicketsSold) * 100;

    console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketPercent.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);