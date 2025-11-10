
let usinp = document.getElementById("user")
let psinp = document.getElementById("password")

let iuser = document.querySelector(".fas.fa-user")
let ipswr = document.querySelector(".fas.fa-lock")
let button = document.getElementById("sub")

let sign  = document.getElementById("SI")
let LG    = document.getElementById("LG")
let title = document.querySelector(".title")
let repswrd = document.getElementById("password two")
let containor = document.querySelector(".containor")

// user input
usinp.onkeyup = function(){
    if(usinp.value.length > 0){
        iuser.style.color = "white"
    }

    else{
        iuser.style.color = "black"
    }

}
// user input \\



// password input
psinp.oninput=function(){
    if(psinp.value.length >= 8){
        ipswr.style.color = "white"
        button.style.backgroundColor = "aqua"
    }

    else{
        ipswr.style.color = "black"
        button.style.backgroundColor = "gray"
    }

    checkInputs();
}


psinp.onkeyup = function(){

    if(psinp.value.length >= 0){
        ipswr.classList.add("fa-eye-slash");


            ipswr.onclick = function() {
                if(psinp.value.length >= 0){
                    if (psinp.type === "password") {
                        psinp.type   = "text"; 
                        repswrd.type = "text"; 
                        ipswr.classList.remove("fa-eye-slash");
                        ipswr.classList.add("fa-eye"); 
                    } 

                    else { 
                        psinp.type   = "password";
                        repswrd.type = "password";
                        ipswr.classList.remove("fa-eye"); 
                        ipswr.classList.add("fa-eye-slash"); 
                    } 
                };
                }
    }
    
    else{
        ipswr.classList.remove("fa-eye-slash");
        ipswr.classList.remove("fa-eye");
        ipswr.classList.add("fas","fa-lock")
    }
}


psinp.onblur = function(){
    if(psinp.value.length === 0){
        psinp.type = "password"
        ipswr.classList.remove("fa-eye-slash");
        ipswr.classList.remove("fa-eye");
        ipswr.classList.add("fas","fa-lock")
    }
}
// password input \\



// submit
button.onclick = function(){
    let username = usinp.value
    let password = psinp.value
    console.log(username)
    console.log(password)
}

function checkInputs() {
    if (usinp.value.length > 0 && psinp.value.length >= 8) {
        button.disabled = false;
        button.style.backgroundColor = "aqua"; 
        return true;
    } else {
        button.disabled = true; 
        button.style.backgroundColor = "gray";
        return false;
    }
}
// استدعاء الدالة كل مرة المستخدم يكتب فيها
usinp.oninput = checkInputs;



let mood = "Log in"
console.log(`start mood is "${mood}"`)

sign.onclick = function switcH(){
    if(mood ==="Log in"){
        mood = "Sign in"
        title.innerHTML = "Sign in"
        LG.innerHTML = "Log in ?"
        usinp.placeholder = "Enter a User name";
        psinp.placeholder = "Enter a Password";
        repswrd.hidden = false
        containor.style.height = "550px"
        repswrd.style.marginTop = "10px"
        console.log(`the mood is "${mood}"`)
    }

    else {
        mood = "Log in"
        title.innerHTML = "Log in"
        LG.innerHTML = "Sign in ?"
        usinp.placeholder = "User name";
        psinp.placeholder = "Password";
        repswrd.hidden = true
        containor.style.height = "500px"
        console.log(`the mood is "${mood}"`)
    }
}

