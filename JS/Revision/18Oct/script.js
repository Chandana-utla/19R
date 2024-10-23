// (if statements)
// Question-1

if(24>=18){
    console.log("eligible for vote")
}else{
    console.log("not eligible")
}

// Question-2
if(1){
    console.log("yes")
}else{
    console.log("no")
}

// Question-3
if([]){
    console.log("yes")
}else{
    console.log("no")
}

// Question-4
if({}){
    console.log("yes")
}else{
    console.log("no")
}

// Question-5
if(null){
    console.log("yes")
}else{
    console.log("no")
}

// Question-6
if(undefined){
    console.log("yes")
}else{
    console.log("no")
}

// Question-7
if(""){
    console.log("yes")
}else{
    console.log("no")
}

// Question-8
if("    "){
    console.log("yes")
}else{
    console.log("no")
}

// if else
// Question-9
const marks=150;
if(marks>100){
    console.log("Max marks are 100")
}else if(marks>=91 && marks<=100){
    console.log("A+")
}else if(marks>=70 && marks<=90){
    console.log("B")
}else if(marks>=50 && marks<=60){
    console.log("C")
}else{
    console.log("D")
}

// Question-10
const mark=45;
if(mark>100){
    console.log("Max marks are 100")
}else if(mark>=91 && mark<=100){
    console.log("A+")
}else if(mark>=70 && mark<=90){
    console.log("B")
}else if(mark>=50 && mark<=60){
    console.log("C")
}else{
    console.log("D")
}

// for loop
// Question-10
for(i=0;i<10;i++){
    console.log(i)
}

// Question-11
for(i=3;i<=9;i++){
    console.log(i)
}
console.log(i);

// Question-10
for(i=9;i>=2;i--){
    console.log(i)
}
console.log("Okkk")
console.log(i)

// While
// Question-11
i=10;

while(i>=9){
    console.log(i);
    i--;
}

// do-while
// Question-12
i=10;

do{
    console.log(i);
    i--;
}while(i>=5)

// Question-13
var a=["red","green","blue"]
console.log(a[1])

// Question-14
var a=["red","green","blue"]
console.log(a.length-1)

// Question-15
var a=["red","green","blue"]
a.length=0
console.log(a)

// Question-16
var a=["red","green","blue"]
a.length=0
a[1]=100
console.log(a)

// Question-17
var a=["red","green","blue"]
a=[]
console.log(a)

// Question-18
var a=["red","green","blue"]
a[3]=100;
a[4]=250;
a[0]="yellow";
console.log(a);

// Question-19
var a=["red","green","blue"]
a[3]=100;
a[4]=250;
a[0]="yellow";
a.length=3;
console.log(a);

// Question-20
var obj={
    id:1,
    age:22,
    job:"Developer"
}
console.log(obj)
console.log(obj.job)

// Question-21
var obj={
    id:1,
    age:22,
    job:"Developer"
}
console.log(obj)
obj.salary=35000;
obj.name="Chandu";
console.log(obj);

// Question-22
var obj={
    id:1,
    age:22,
    job:"Developer"
}
console.log(obj)
delete obj.age;
console.log(obj)

// Question-23
var a=10;
a=850;
console.log(a)