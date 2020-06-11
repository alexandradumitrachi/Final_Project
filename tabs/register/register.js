const username = document.getElementById("usernamee");
const email = document.getElementById("theMail");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const fname = document.querySelector("#fName");
const checkbox = document.getElementById("check1");
const psw = document.getElementById("psw");
const pswC = document.getElementById("pswC");
const phone = document.querySelector("#phone");
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const letters = /^[A-Z][-'a-zA-Z]+$/;
const lettersFirst = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/;
const form = document.querySelector("#form");
const submitBtn = document.querySelector("#btn");

const paragraphAlert = document.createElement("p");
paragraphAlert.textContent = "Please enter a username.";
document.querySelector("#prepend1").prepend(paragraphAlert);
paragraphAlert.classList.add("faulty");

const emailAlert = document.createElement("p");
emailAlert.textContent = "Please enter a valid email address.";
document.querySelector("#prepend2").prepend(emailAlert);
emailAlert.classList.add("faulty");

const fNameAlert = document.createElement("p");
fNameAlert.textContent = "Please enter a Name.";
document.querySelector("#prepend3").prepend(fNameAlert);
fNameAlert.classList.add("faulty");

const pswAlert = document.createElement("p");
pswAlert.textContent = "Please enter a Valid Password.";
document.querySelector("#prepend4").prepend(pswAlert);
pswAlert.classList.add("faulty");

const pswCAlert = document.createElement("p");
pswCAlert.textContent = "Please verify your password.";
document.querySelector("#prepend5").prepend(pswCAlert);
pswCAlert.classList.add("faulty");

const phoneAlert = document.createElement("p");
phoneAlert.textContent = "Please enter a phone.";
document.querySelector("#prepend6").prepend(phoneAlert);
phoneAlert.classList.add("faulty");

const faultyUsername = () => {
  if (username.value.length < 4) {
    return (paragraphAlert.style.display = "block");
  } else if (username.value.length > 4) {
    faultyUsername.preventDefault();
  }
  return (paragraphAlert.style.display = "none");
};

username.addEventListener("input", faultyUsername);

const faultyEmail = () => {
  if (emailFormat.test(email.value) === false) {
    return (emailAlert.style.display = "block");
  } else {
    return (emailAlert.style.display = "none");
  }
};

email.addEventListener("input", faultyEmail);

const faultyFName = () => {
  if (lettersFirst.test(fname.value) === false) {
    return (fNameAlert.style.display = "block");
  } else {
    return (fNameAlert.style.display = "none");
  }
};

fname.addEventListener("input", faultyFName);

const faultyPsw = () => {
    if (password.test(psw.value) === false) {
      return (pswAlert.style.display = "block");
    } else {
      return (pswAlert.style.display = "none");
    }
  };
  
  psw.addEventListener("input", faultyPsw);

const faultyPswC = () => {
    if (psw.value === pswC.value) {
      return (pswCAlert.style.display = "none");
    } else {
      return (pswCAlert.style.display = "block");
    }
  };
  
  pswC.addEventListener("input", faultyPswC);  

const faultyPhone = () => {
  if (phone.value.length < 10) {
    return (phoneAlert.style.display = "block");
  } else if (phone.value.length > 10) {
    return (phoneAlert.style.display = "none");
  }
};

phone.addEventListener("input", faultyPhone);

submitBtn.addEventListener("click", function (e) {
  if (username.value.length < 4) {
    e.preventDefault();
  } else if (phone.value.length < 10) {
    e.preventDefault();
  } else if (lettersFirst.test(fname.value) === false) {
    e.preventDefault();
  } else if (emailFormat.test(email.value) === false) {
    e.preventDefault();
  } else if(password.test(psw.value) === false){
    e.preventDefault();
  } else if(psw.value !== pswC.value){
    e.preventDefault();
}
});

function checkCheckBoxes(theForm) {
	if (theForm.checkbox.checked == false){
		alert ('You didn\'t accept the Terms of Use & Privacy Policy!');
		return false;
	} else { 	
		return true;
	}
}