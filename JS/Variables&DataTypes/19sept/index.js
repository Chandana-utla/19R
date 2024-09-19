var Dad;
var Mom;
var me;
var sister;
var fam={parent1:'father',parent2:'mother',child1:'me',child2:'sister',details:{members:4,parents:2,children:2}};
Dad={name:'Venu',age:45,occupation:'Gold-smith'};
Mom=[{name:'indira',age:42,children:2},{child1:'chandu',child2:'chikki'}];
me={name:'Chandu',age:22,student:'yes'};
sister={name:'omsree',student:'yes',dept:'ECE'};
console.log(Dad);
console.log(Mom);
console.log(me);
console.log(sister);
console.log(Dad.name);
console.log(Mom[0]['age']);
console.log(fam.details.members)

var c=20;
console.log(c);

let b=10;
console.log(b);

const a=30;
console.log(a);

{
    var q=40;
    console.log(q);
}
{
    let w=40;
    console.log(w);
    console.log(q)

}
{
    const e=40;
    console.log(e);
   // console.log(w);w is not defined
}


