
let arr = [1, 2, 3, 4];
console.log(arr.length);  // Output: 4

//Add an element to the end of an array:
arr.push(5);
console.log(arr);  

//Remove the last element from an array:
arr.pop();
console.log(arr);  

//Add an element to the beginning of an array:
arr.unshift(0);
console.log(arr); 

//Remove the first element from an array:
arr.shift();
console.log(arr); 

//Reverse the elements in an array:
arr.reverse();
console.log(arr); 

//Find the index of a specific value in an array:
let index = arr.indexOf(3);
console.log(index);  

//Check if a certain value exists in an array:
let exists = arr.includes(3);
console.log(exists); 

//Sort the elements of an array in ascending order:
arr.sort((a, b) => a - b);
console.log(arr);  

//Convert an array to a string using commas as separators:
let str = arr.join(',');
console.log(str);  

//Add an element to the end of an array, then remove the first element:
arr.push(5);
arr.shift();
console.log(arr);  

//Reverse an array and then join the elements into a string:
let reversedStr = arr.reverse().join(',');
console.log(reversedStr);  

//Sort an array in ascending order, then remove the last element:
arr.sort((a, b) => a - b);
arr.pop();
console.log(arr);  

//Add two elements at the beginning of an array, remove the first element, and find the length of the array:
arr.unshift(-1, 0);
arr.shift();
console.log(arr.length); 

//Combine two arrays, sort the combined array, and then remove the last element:
let arr2 = [6, 7, 8];
let combinedArr = arr.concat(arr2).sort((a, b) => a - b);
combinedArr.pop();
console.log(combinedArr); 