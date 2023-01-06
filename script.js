const buttonSend=document.querySelector(".buttonSend");
const buttonForm=document.querySelector(".buttonForm");
const inputEmail=document.querySelector(".inputEmail")
const inputFullName=document.querySelector(".inputFullName")
const inputPhone=document.querySelector(".inputPhone")
const inputPassword=document.querySelector(".inputPassword")
const inputPassword2=document.querySelector(".inputPassword2")
const textAreaAddress=document.querySelector(".textAreaAddress")
let errorMessage=document.querySelector(".errorMessage");

buttonSend.addEventListener("click", function (e){
    e.preventDefault();
    const emailValue=inputEmail.value.trim();
    const fullNameValue=inputFullName.value.trim();
    const phoneValue=inputPhone.value.trim();
    const passwordValue=inputPassword.value.trim();
    const password2Value=inputPassword2.value.trim();
    const textAreaValue=textAreaAddress.value;

    
});
