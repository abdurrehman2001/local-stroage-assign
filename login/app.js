function login(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    localStorage.setItem("Email",email.value.toLowerCase())
    localStorage.setItem("Password",password.value.toLowerCase())
    // for(i = 0 ; )
 
    // email.value = ""
    // password.value = ""
}