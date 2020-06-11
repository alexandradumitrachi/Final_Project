function show(){
    var x = document.getElementById("psw");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}
const submitBtn = document.querySelector("#btn");

const email = document.getElementById("theMail");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailAlert = document.createElement("p");
emailAlert.textContent = "Please enter a valid email address.";
document.querySelector("#fault1").prepend(emailAlert);
emailAlert.classList.add("faulty");

const psw = document.getElementById("psw");
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const pswAlert = document.createElement("p");
pswAlert.textContent = "Please enter a Valid Password.";
document.querySelector("#fault2").prepend(pswAlert);
pswAlert.classList.add("faulty");

const faultyEmail = () => {
    if (emailFormat.test(email.value) === false) {
      return (emailAlert.style.display = "block");
    } else {
      return (emailAlert.style.display = "none");
    }
  };
  
  email.addEventListener("input", faultyEmail);

  const faultyPsw = () => {
    if (password.test(psw.value) === false) {
      return (pswAlert.style.display = "block");
    } else {
      return (pswAlert.style.display = "none");
    }
  };
  
  psw.addEventListener("input", faultyPsw);

  submitBtn.addEventListener("click", function (e) {
    if (emailFormat.test(email.value) === false) {
      e.preventDefault() + alert ('You didn\'t complete all the required fields');
    } else if(password.test(psw.value) === false){
      e.preventDefault() + alert ('You didn\'t complete all the required fields');
    }
  });