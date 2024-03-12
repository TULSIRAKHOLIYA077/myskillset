function myFun() {
  var a = document.getElementById("password").value;
  var b = document.getElementById("confirm-password").value;

  if(a==""){
    document.getElementById("messages").textContent="Please fill this field";
    return false;
  }

  if(a==b){
    document.getElementById("messages").textContent="Password Matched. Password validation Successful.";
    return false;

  }

  if(a!=b){
    document.getElementById("messagess").textContent="Password didn't match. Password validation unsuccessful";
    return false;

  }

}
