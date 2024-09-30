//Program to print 10 numbers using for loop and write same program using while and do-while loop.
//using for loop
console.log("Printing 1-10 numbers using for loop");
for(var a=1;a<=10;a++)
{

    console.log(a);
    
}
//using while loop
var i=1
console.log("Printing 1-10 numbers using while loop");
while(i<=10){
console.log(i);
i++;
}
//using do-while loop
var j=1;
console.log("Printing 1-10 numbers using do-while loop");
do{
console.log(j);
j++;
}while(j<=10);

//Program to print even numbers using for loop and write same program using while and do-while loop
console.log("Printing even numbers using for loop");
for (var q = 2; q <= 10; q += 2) {
    console.log(q);
  }
//using while loop
console.log("Printing even numbers using while loop");
var m = 2;
while (m <= 10) {
  console.log(m);
  m+= 2;
}
//using do-while loop
console.log("Printing even numbers using do-while loop");
var n = 2;
do {
  console.log(n);
  n += 2;
} while (n <= 10);


//Program to print odd numbers using for loop and write same program using while and do-while loop
console.log("Printing odd numbers using for loop");
for(var l=1;l<=10;l+=2)
{
    console.log(l);
    
}
//using while loop
console.log("Printing odd numbers using while loop");
var q=1
while(q<=10){
console.log(q);
q+=2;
}
//using do-while loop
var o=1;
console.log("Printing odd numbers using do while loop");
do{
console.log(o);
o+=2;
}while(o<=10);


//Program to console the marks grade D using conditional statements and the marks for D grade is b/w the 35 and 45 ?
// Prompt the user to enter the marks
var marks = 41
if (marks >=80  && marks <= 100) {
  console.log("Grade: A");
} 
else if (marks >=60  && marks <= 79) {
    console.log("Grade: B");
  }
  else if (marks >=45  && marks <= 59) {
    console.log("Grade: C");
  }
 else if (marks >=35  && marks <= 44) {
    console.log("Grade: D");
  }
else {
  console.log("Fail");
}
