var a=[1,2,3,4,"Chandu",{id:1,name:"jhdjeh"}]
 for (Chandu in a )
 {
     console.log(a[Chandu]);
     
 }
 console.log("-------------");
 for (Chandu in a )
 {
    console.log(Chandu);
    
 }
 console.log("---------------------");
 for (Chandu of a){
     console.log(a["Chandu"]); 
   
 }
for (Chandu of a){
   console.log(Chandu);   
}
 console.log("------------");
 var b={name1:"Chandu",batch:19}
 for ( Chandu in b){
    console.log(Chandu);
   
 }
console.log("---------");
 for ( Chandu in b){
   console.log(b[Chandu]);
    
 }
console.log("------");
 for ( Chandu in b){
    console.log(Chandu + " :" +b[Chandu]);
  
}
 for(name1 in b)
 {
     console.log(name1);
 }

var c = [1, 2, 3, [11, 22, 33], {id: 1, age: 26}];
for (item of c) {
  if (typeof item === 'object' && item.age !== undefined) {
    console.log(item.age);
  }
}
const t=[1,2,3]
for(i=t.length-1;i>=0;i--){
    console.log(t[i]); 
  }
 var x= [1,2,3,4,5,{id:1,age:25},[1,2,3]]
 for( z=x.length-1;z>=0;z--){
        console.log(x[z]);   
 }
 