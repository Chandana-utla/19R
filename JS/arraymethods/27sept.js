var a=[1,2,3,4,5]
var b=["q","w","e",{id:"chandu",age:22},{id1:"Chikki",name1:"ch1"},true,undefined,66]
var c=a.concat(b)
console.log(c);
var cLen=c.length;
console.log(cLen);
var slicedPart=c.slice(3,8)
console.log(slicedPart);
var indexx=slicedPart.indexOf("e")
console.log(indexx);

var indexx1=slicedPart.indexOf("66")
console.log(indexx1);

var indexx2=slicedPart.indexOf(77)
console.log(indexx2);

//to add at starting of an  array
slicedPart.unshift(23);
console.log(slicedPart);
//console.log(slicedPart.unshift()); results 6
console.log(slicedPart);
slicedPart.unshift(23,56,12,"Hello")
console.log(slicedPart);
slicedPart.unshift("")
console.log(slicedPart);



//to remove an element from starting  of an array 
slicedPart.shift();
console.log(slicedPart);
//console.log(slicedPart.shift()); 23 output 

//to add at an end of an array
slicedPart.push("kjhkrj")
console.log(slicedPart);
//console.log(slicedPart.push("54546565")); 12 output


//to remove element from the end of an array
slicedPart.pop();
console.log(slicedPart);
//console.log(slicedPart.pop()) e output
slicedPart.pop();
//console.log(slicedPart.pop()) w output

//includes

console.log(slicedPart.includes("q"))
console.log(slicedPart.includes(""))

//split()
// console.log(slicedPart);
var c="Hey hello jroj rijgri rjgorij"
var b=c.split(" ")
console.log(b);

//join 
var b1=slicedPart.join();
console.log(b1);

//reverse

var k=slicedPart.reverse();
console.log(k);





