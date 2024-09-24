//Question1
let str1 = "JavaScript";
let ind="c";
let midIndex=str1.indexOf(ind);
let middleChar = str1[midIndex]; 
console.log(middleChar.toUpperCase());


//Question2
let str2 = "hello world";
let upperStr = str2.toUpperCase(); 
console.log(upperStr.length);

//Question3
let str3 = "JavaScript";
let pos = 4; 
let ch = str3.charAt(pos); 
console.log(ch); 
console.log(ch.charCodeAt(0));


//Question4
let str4 = "   HelloWorld   ";
let trimedStr = str4.trim(); 
let slicedStr1 = trimedStr.slice(1, 4); 
console.log(slicedStr1);

//Question5
let str5 = "Hello";
let str6 = "WORLD";
let result2 = str1 + " " + str2.toLowerCase(); 
console.log(result2);


//Question6
let str7 = "   HelloWorld";
let trim = str7.trimStart(); 
let slicedString = trim.slice(1); 
console.log(slicedString);


//Question7
let str8 = "JavaScript";
let position = 3; 
let char = str8.charAt(position); 
console.log(char.toUpperCase());


//Question8
let str9 = "Hello   ";
let str10 = "World";
let trimmedStr1 = str1.trimEnd(); 
let result = trimmedStr1 + " " + str2; 
console.log(result);


//Question9
let input = "   HelloWorld   ";
let trimmedStr = input.trim(); 
let upperString = trimmedStr.toUpperCase(); 
let slicedStr = upperString.slice(1, 5); 
console.log(slicedStr); 

//Question10
let string1 = "HELLO";
let string2 = "WORLD";
let lowerStr1 = string1.toLowerCase();
let lowerStr2 = string2.toLowerCase();
let concatenated = lowerStr1 + " " + lowerStr2;
let firstChar = concatenated.charAt(0); 
console.log(firstChar);