function signup(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let number = document.getElementById("number")
    let address = document.getElementById("address")
    localStorage.setItem("Name",name.value)
    localStorage.setItem("Name",email.value)
    localStorage.setItem("Name",password.value)
    localStorage.setItem("Name",number.value)
    localStorage.setItem("Name",address.value)
}