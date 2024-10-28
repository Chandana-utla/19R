//Given an array of numbers [2, 4, 6, 8, 10], use the reduce method to calculate the total sum of the values in the array.
let a=[2, 4, 6, 8, 10]
let b=(a.reduce((i,y)=>i+y,0))
console.log(b)
//Given an array of numbers [1, 3, 5, 7], use the reduce method to calculate the total product of the values in the array.
let c=[1, 3, 5, 7]
let d=(c.reduce((i,y)=>i*y))
console.log(d)
//Given an array of lowercase words ['apple', 'banana', 'cherry'], use the map method to create a new array where each word is converted to uppercase.
let e=['apple', 'banana', 'cherry']
let f=e.map(i=>i.toUpperCase())
console.log(f)
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 10.
let g=[1, 2, 3, 4, 5]
let h=g.map(i=>i*10)
console.log(h)

//Given an array of objects representing people:
// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Sarah', age: 30 },
//   { name: 'Mike', age: 35 }
// ];

//Use the map method to create an array of just the ages.
 const people = [
   { name: 'John', age: 25 },
   { name: 'Sarah', age: 30 },
   { name: 'Mike', age: 35 }
 ];
 let ages=people.map(i=>i.age)
 console.log(ages)
 

//Given an array of fruits ['apple', 'banana', 'cherry'], use the forEach method to log each fruit to the console.
let fruits=['apple', 'banana', 'cherry']
fruits.forEach((element) => console.log(element));

//Given an array of numbers [1, 2, 3, 4, 5, 6], use the forEach method to count how many numbers in the array are even and log the count.
const numbers = [1, 2, 3, 4, 5, 6];
let evenCount = 0;

numbers.forEach(function(number) {
  if (number % 2 === 0) {
    evenCount++;
  }
});

console.log(evenCount)

