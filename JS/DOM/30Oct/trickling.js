document.getElementById("parent").addEventListener("click", function () {
    alert("Parent clicked during capturing!");
}, true); 
document.getElementById("child").addEventListener("click", function () {
    alert("Child clicked during capturing!");
}, true);  

document.getElementById("innerChild").addEventListener("click", function () {
    alert("Inner Child clicked during capturing!");
}, true); 