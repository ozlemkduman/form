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
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    
    if (emailValue==""||emailValue.match(validRegex)){
        e.preventDefault();
        error(inputEmail,"Please write an email");
    }else {
        e.preventDefault();
        success(inputEmail);
        
    }
    if(fullNameValue==""){
        e.preventDefault();
        error(inputFullName,"Please write an Full Name");
    }else{
        e.preventDefault();
        success(inputFullName);
    }
    if(phoneValue.length<=0||phoneValue.length>7 ||phoneValue!=Number){
        e.preventDefault();
        error(inputPhone,"Please write an Phone Number 7 character");
    }else{
        e.preventDefault();
        success(inputPhone);
    }
    if(passwordValue.length==0 || passwordValue.length>8 ){
        e.preventDefault();
        error(inputPassword,"Please write an Password");
    }else{
        e.preventDefault();
        success(inputPassword);
    }
    if(password2Value!=passwordValue){
        e.preventDefault();
        error(inputPassword2,"Please write same password");
    }else{
        e.preventDefault();
        success(inputPassword2);
    }
    if(textAreaValue.length<20){
        e.preventDefault();
        error(textAreaAddress,"Please write 20 character");
    }else{
        e.preventDefault();
        success(textAreaAddress);
    }
});

function error(input,errorText){
    
    errorMessage.innerText=errorText;
    errorMessage.style.color="red";
    input.className="error";
}

function success(input){
    input.className="success";
    errorMessage.style.color="red";
    errorMessage.innerText="Success";
}