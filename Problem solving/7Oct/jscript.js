//question 1

var isRoomOccupied = prompt("Is anyone in the room? (yes/no)") === "yes";
var season = prompt("What season is it? (winter/summer)");
var isAnyoneHome = prompt("Is anyone home? (yes/no)") === "yes";

if (isRoomOccupied) {
    console.log("Lights are on.");
} else {
    console.log("Lights are turned off.");
}

if (season === "winter") {
    console.log("Temperature is set to 22°C.");
} else if (season === "summer") {
    console.log("Temperature is set to 18°C.");
} else {
    console.log("Temperature remains unchanged.");
}

if (isAnyoneHome) {
    console.log("Doors remain unlocked.");
} else {
    console.log("Doors are locked.");
}

//Question2

var mathScore = +prompt("Enter your Math score:");
var scienceScore = +prompt("Enter your Science score:");


    if (mathScore >= 50 && scienceScore >= 50) {
        console.log("Congratulations! You have graduated.");
    } else {
        console.log("Sorry, you did not graduate.");
    }

//question3

let ticketPrice =+prompt("Enter the ticket price (in Rs):");
let departsInMorning = confirm("Does the flight depart in the morning?");
let providesMeal = confirm("Does the flight provide a meal?");

if (ticketPrice < 500 && (departsInMorning || providesMeal)) {
    console.log("Buy the ticket.");
} else {
    console.log("Look for another flight.");
}

//question4

let laptopPrice = +prompt("Enter the laptop price (in Rs):");
let ram = parseInt(prompt("Enter the RAM (in GB):"));
let GCard = confirm("Does the laptop have a good graphics card?");

if (ram >= 8 && GCard && laptopPrice <= 80000) {
    console.log("Buy the laptop.");
} else {
    console.log("Look for another");
}

//question5

let attendancePercentage = +prompt("Enter the attendance percentage:");
let studentGrade = prompt("Enter the student's grade (A, B, C, etc.):");

if (attendancePercentage > 80 && (studentGrade === 'A' || studentGrade === 'B')) {
    console.log("The student can attend the class trip.");
} else {
    console.log("The student cannot attend the class trip.");
}
