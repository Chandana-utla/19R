// let input=document.getElementById("input")
// console.log(input.value);

// function colorChange(x){
//     if(x.key === "Enter"){
//         document.body.style.backgroundColor=input.value
//     }else{
//         document.body.style.backgroundColor="white" 
//     }
// }

let password=document.querySelector("input")
let icon=document.getElementById("icon")

icon.onclick=function (){
   if(password.type === "password"){
     password.type="text"
    icon.className="fa-solid fa-eye"
   }else{
     password.type="password"
    icon.className="fa-solid fa-eye-slash"
   }
}