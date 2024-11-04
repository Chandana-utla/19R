function fun(number, min, max) {
    return Math.max(min, Math.min(number, max));
}
console.log(fun(-3, 1, 10));

console.log(Math.floor(Math.random() * 5) + 5)
let randomValue = Math.floor(Math.random() * 5) + 5;
console.log(randomValue);  

function roundUp(num) {
    return num % 1 === 0 ? num : Math.ceil(num);
}


console.log(roundUp(5.1)); 
console.log(roundUp(5.0)); 
console.log(roundUp(7.8)); 

const combined = [...[1, 2, 3], ...[4, 5, 6]];
console.log(combined); 

const [a, b] = [10, 20, 30, 40];

console.log(a);
console.log(b);

const { name, age } = { name: "Alice", age: 25, city: "New York" };

console.log(name); 
console.log(age);

const { person: { address: { city } } } = { person: { name: "Eve", address: { city: "Paris" } } };

console.log(city);
const combinedArray = [...[1, 2, 3], ...[4, 5, 6]];
console.log(combinedArray);

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}


console.log(sum(1, 2, 3, 4)); 
console.log(sum(5, 10, 15));  

const person = { name: "John", age: 30 };
const clonedPerson = { ...person, city: "New York" };

console.log(clonedPerson);
