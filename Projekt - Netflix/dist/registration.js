"use strict";
// Elements references
const registrationForm = document.querySelector(".registration-form");
const firstName = document.getElementById("first-name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
//  Password matching validation
registrationForm.addEventListener("input", () => {
    if (password.value !== "" && passwordConfirm.value !== "") {
        if (password.value === passwordConfirm.value) {
            password.classList.add("valid");
            passwordConfirm.classList.add("valid");
            password.classList.remove("invalid");
            passwordConfirm.classList.remove("invalid");
        }
        else {
            password.classList.add("invalid");
            passwordConfirm.classList.add("invalid");
            password.classList.remove("valid");
            passwordConfirm.classList.remove("valid");
        }
    }
    else if (password.value !== "" || passwordConfirm.value !== "") {
        password.classList.add("invalid");
        passwordConfirm.classList.add("invalid");
        password.classList.remove("valid");
        passwordConfirm.classList.remove("valid");
    }
    else {
        password.classList.remove("valid", "invalid");
        passwordConfirm.classList.remove("valid", "invalid");
    }
});
// Processing form submission with password match check
registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (password.value !== passwordConfirm.value) {
        alert("Hesla se neshodují.");
        return;
    }
    // console.log("Registrace úspěšná:");
    // console.log({
    //   jmeno: firstName.value,
    //   prijmeni: surname.value,
    //   email: email.value,
    // });
    alert("Registrace proběhla úspěšně.");
    registrationForm.reset();
    password.classList.remove("valid");
    passwordConfirm.classList.remove("valid");
});
