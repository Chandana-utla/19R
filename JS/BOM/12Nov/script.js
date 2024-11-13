function time() {
    let alarmTime = new Date();
    alarmTime.setHours(22);
    alarmTime.setMinutes(27);
    alarmTime.setSeconds(0); 
 
    let diff;
    let interval = setInterval(function () {
        let currentTime = new Date();
        diff = alarmTime - currentTime
        if (currentTime >= alarmTime) {
            clearInterval(interval); 
            alert("Alarm is ringing.......");
        }
    }, diff);
}

time();
// call
let a={
    id:1,
    age:22,
    name:"Chandana"
}

let b=function (p,q,r,s,t,u,v){
    console.log(this.name + " " + p + " " + q + " " + r + " " + s + " " + t + " " + u + " " + v);
}

b.call(a,"Jyooo","prassu","sravs","tej","sai","pavan","ganesh")


// apply
let c = {
    id: 1,
    age: 22,
    name: "Chandana"
};

let d = function (x, y, z, a, b) {
    console.log(x + " " + y + " " + z + " " + a + " " + b);
};

d.apply(c, ["Jyooo", "sravs", "teju", "sai", "pavan"]);


// bind

let e={
    id:1,
    age:22,
    name:"Chandana"
}

let f=function (w,x,y,z,){
    console.log(this.name + " " + w +" " + x + " " + y + " " + z);
}

let g = f.bind(e,["Jyooo","sravs","tej"],["sai","jeevan"],["shiva","deepu"],[12345,67891])
g()

// function time() {
//     let alarmTime = new Date();
//     alarmTime.setHours(22);
//     alarmTime.setMinutes(51);
//     alarmTime.setSeconds(0);
 
//     let currentTime = new Date();
//     let diff = alarmTime - currentTime;

//     // If the difference is positive, set the timeout
//     if (diff > 0) {
//         setTimeout(function () {
//             // Play an alarm sound
//             let audio = new Audio("Tic-Tac-Mechanical-Alarm-Clock-2-chosic.com_.mp3");  // Specify the path to your audio file
//             audio.play();
            
//             // Show an alert
//             alert("Alarm is ringing.......");
//         }, diff);
//     // } else {
//     //     // If the time has already passed, alert immediately
//     //     alert("The specified time has already passed.");
//     // }
// }
// }

// time();
