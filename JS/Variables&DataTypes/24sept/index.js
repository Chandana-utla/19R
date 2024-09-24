
//object literals
var a={
    name:"Chandu",
    age:22
}
console.log(a);
console.log(Object.keys(a))
console.log(Object.values(a))
console.log(Object.entries(a))
console.log(Object.isExtensible(a));
console.log(Object.preventExtensions(a));
console.log(Object.isExtensible(a));

var abc={
    name:"qwerrty",
    val:"etvrt",
    age:12
}
console.log(abc);
delete abc.age;
console.log("After deleting age");

console.log(abc);



//creating obj using new keyword
var b=new Object()
b.name="Chikki"
b.age=20
console.log(b);
Object.freeze(b)
console.log(Object.isFrozen(b))
b.sal=238787;
console.log(b);
b.name="Omsree"
console.log(b);


//shorthand obj property
var name="utla"
var age=102
var fam={name,age}
console.log(fam);
Object.seal(fam)
console.log(Object.isSealed(fam))
fam.name="UTLAAA"
console.log("After being sealed");
console.log(fam);





