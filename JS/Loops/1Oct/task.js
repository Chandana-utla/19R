let day = prompt("Enter day number (1-7): ");
day = parseInt(day);

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}
let month = prompt("Enter month number (1-12): ");
month = parseInt(month);

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}
let number = 1;
while (number <= 10) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}
let countdown = 10;
while (countdown >= 0) {
    console.log(countdown);
    countdown--;
}
let result = "";
for (let i = 1; i <= 10; i++) {
    result += i + " ";
}
let day1 = prompt("Enter day number (1-7): ");
day = parseInt(day1);

if (!isNaN(day) && day >= 1 && day <= 7) {
    switch (day1) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
    }
} else {
    console.log("Invalid input! Please enter a number between 1 and 7.");
}
