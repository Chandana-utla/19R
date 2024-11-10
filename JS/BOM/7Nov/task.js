function sub() {
  let userName = document.getElementById("name").value.trim();
  let userEmail = document.getElementById("email")
  let userPassword = document.getElementById("password").value.trim();
  let c_password = document.getElementById("c_pass").value.trim();

  if(userName.length<4){
      alert("check the format of username")
  }
  else if(userPassword.length<8){
      alert("check the format of userpassword")
  }
  window.location.href="output.txt"
}