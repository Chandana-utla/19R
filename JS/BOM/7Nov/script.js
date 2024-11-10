var error=document.querySelector("p")

function validateForm(){
    let name=document.getElementById("name").value.trim();
    let password=document.getElementById("p").value.trim();
    let passwordConfirm=document.getElementById("Cp").value.trim();

    let n_p="/^[a-zA-Z]$/";

    if(!n_p.test(name)){
        error.textContent="name not matched the format pls use only characters in caps and smalls"
    }

    let p_p="/^[a-zA-Z0-9_]$/"
    if(password.length<8){
        error.textContent="password should be a 8 char length";
        console.log(error)
    }else if(!p_p.test(password)){
        error.textContent="unmatched format";
        console.log(error)
    }else{
        console.log("aa")
    }

    if(password !== passwordConfirm){
        error.textContent="password dont match with each other"
    }
    
}
