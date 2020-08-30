const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_check = document.getElementById("password_check");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

checkInputs = () => {
  const userValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value;
  const passwordCheckValue = password_check.value;
  if (userValue === "") {
    //add error class
    setErrorFor(username, "username cannot be blank");
  } else {
    successFor(username);
  }
  if (emailValue === "") {
    //add error class
    setErrorFor(email, "email cannot be blank");
  } else {
    if (validateEmail(emailValue)) {
      successFor(email);
    } else {
      setErrorFor(email, "Email is not Valid");
    }
  }
  if (passwordValue === "") {
    //add error class
    setErrorFor(password, "password cannot be empty");
  } else {
    successFor(password);
  }
  if (passwordCheckValue === "") {
    //add error class
    setErrorFor(password_check, "password cannot be blank");
  } else if (passwordCheckValue !== passwordValue) {
    setErrorFor(password_check, "Password did not match");
  } else {
    successFor(password_check);
  }
};

setErrorFor = (element, message) => {
  const formControl = element.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
};
successFor = (element) => {
  const formControl = element.parentElement;
  formControl.className = "form-control success";
};

validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
