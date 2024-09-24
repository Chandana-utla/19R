let greeting1 = "  Hello";
let greeting2 = "World  ";
let char = "a";
let extraText = "additional";
let sentence = "hello there , how are you";

// 1. Remove spaces, concatenate two strings, and convert to uppercase
let cleanGreeting1 = greeting1.trim(); 
let cleanGreeting2 = greeting2.trim(); 
let upperCombined = (cleanGreeting1 + cleanGreeting2).toUpperCase();
console.log("1. Combined and Uppercase:", upperCombined);

// 2. Extract middle portion, get last index of extracted string, and convert it to lowercase
let message = "Hello all,Iam Chandana";
let middleExtract = message.substring(6, 12); 
let lastIndexExtracted = middleExtract.length - 1;
let lowerMiddle = middleExtract.toLowerCase();
console.log("2. Extracted Middle:", middleExtract);
console.log("3. Last Index:", lastIndexExtracted);
console.log("4. Lowercase Middle:", lowerMiddle);

// 3. Concatenate single character with a string, convert to uppercase, and extract second last char
let charCombined = (char + cleanGreeting1).toUpperCase(); 
let secondLastCharacter = charCombined.charAt(charCombined.length - 2);
console.log("5. Second Last Character:", secondLastCharacter);

// 4. Extract first 3 chars of greeting1 and last 3 chars of greeting2, concatenate and capitalize first & last char
let firstThree = cleanGreeting1.substring(0, 3); 
let lastThree = cleanGreeting2.slice(-3); 
let combinedShort = firstThree + lastThree;
let formattedShort = combinedShort.charAt(0).toUpperCase() + combinedShort.slice(1, -1) + combinedShort.charAt(combinedShort.length - 1).toUpperCase();
console.log("6. Formatted Short String:", formattedShort);

// 5. Trim the sentence, capitalize first and last chars, extract part, and concatenate with another string
let trimmedSentence = sentence.trim();
let sentencePart = trimmedSentence.substring(6, 15);
let formattedSentence = trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1, -1) + trimmedSentence.charAt(trimmedSentence.length - 1).toUpperCase();
let result = formattedSentence + extraText;
console.log("7. Trimmed, Formatted, and Concatenated:", result);

// 6. Find the index of the word "are" in the sentence
let indexAre = sentence.indexOf("are"); 
console.log("8. Index of 'are':", indexAre);
