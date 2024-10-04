let string1 = "chandana";
let reversedString1 = "";
for (let i = string1.length - 1; i >= 0; i--) {
    reversedString1 += string1[i];
}
console.log("Original string 1: " + string1);
console.log("Reversed string 1: " + reversedString1);


function add()
{
    var c=20;
    console.log(c);
    
}
add();
console.log(c);

var c= [1,2,3,4,5,{id:1,age:25},[1,2,3]]
for (item of c) {
  if (typeof item === 'object' && item.age !== undefined) {
    console.log(item.age);
  }
}

var d = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];

for (let i = 0; i < d.length; i++) {
  let item = d[i];
  if (typeof item === 'object' && item.age !== undefined) {
    console.log(item.age);
  }
}
