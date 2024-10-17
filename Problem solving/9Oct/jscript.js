//Valid triangle or not
let side1 = +prompt("Enter the length of the first side:");
let side2 = +prompt("Enter the length of the second side:");
let side3 = +prompt("Enter the length of the third side:");

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("Valid triangle.");
} else {
    console.log("Invalid triangle.");
}
//2. Prime Number Checker

let num = +prompt("Enter a number:");

let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break; 
        }
    }
}

if (isPrime) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}


//3. Largest of Three Numbers

let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");
let num3 = +prompt("Enter the third number:");

let largest = num1;

if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}

console.log("The largest number is: " + largest);
//4. Leap Year Checker

let year = +prompt("Enter a year:");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
//5. program to check  divisibility by 3 and 5.

let number = +prompt("Enter a number:");

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(number);
}

//6. LCM Calculator

let num11 = +prompt("Enter the first number:");
let num22 = +prompt("Enter the second number:");

let max = (num11 > num22) ? num11 : num22;

while (true) {
    if (max % num11 === 0 && max % num22 === 0) {
        console.log("LCM of " + num11 + " and " + num22 + " is " + max);
        break;
    }
    max++;
}
//7. GCD Calculator

let num111 = +prompt("Enter the first number:");
let num222 = +prompt("Enter the second number:");

while (num222 !== 0) {
    let temp = num2;
    num222 = num111 % num222;
    num111 = temp;
}

console.log("GCD is " + num111);

//8. Simple Calculator

let n1 = +prompt("Enter the first number:");
let n2 = +prompt("Enter the second number:");
let operation = prompt("Enter an operation (+, -, *, /):");

let result;

switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operation.");
        break;
}

if (result !== undefined) {
    console.log("The result is: " + result);
}