// function clickFun(){
//     setTimeout(function  (){ 
// let imgs=document.getElementById("div11");
// imgs.innerHTML=`<img src="https://th.bing.com/th/id/OIF.25BQ5rAPHo7mqbmeHe2hFA?w=215&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7">`
// imgs.style.borderRadius="50px";
// imgs.style.transition="1s ease-in 2s"

//     },2000)
// }
function clickFun(){
    setTimeout(function (){ 
        let imgs = document.getElementById("div11");
        imgs.innerHTML = `<img id="image" src="https://th.bing.com/th/id/OIF.25BQ5rAPHo7mqbmeHe2hFA?w=215&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" style="transition: 2s ease-in; border-radius: 0px;">`;

        let imgEle = document.getElementById("image");
        
        setTimeout(function () {
            imgEle.style.borderRadius = "50px";
        }, 10);

    }, 2000);
}
