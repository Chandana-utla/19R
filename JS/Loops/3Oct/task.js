var x= [1,2,3,4,5,{id:1,age:25},[1,2,3]]
for( z=x.length-1;z>=0;z--){
       console.log(x[z]);   
}

var c= [1,2,3,4,5,{id:1,age:25},[1,2,3]]
for (item of c) {
  if (typeof item === 'object' && item.age !== undefined) {
    console.log(item.age);
  }
}
let string1 = "chandana";
// Reverse the first string manually
let reversedString1 = "";
for (let i = string1.length - 1; i >= 0; i--) {
    reversedString1 += string1[i];
}
console.log("Original string 1: " + string1);
console.log("Reversed string 1: " + reversedString1);
