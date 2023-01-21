const inputEmail = document.querySelector(".inputEmail");
const inputFullName = document.querySelector(".inputFullName");
const inputPhone = document.querySelector(".inputPhone");
const inputPassword = document.querySelector(".inputPassword");
const inputPassword2 = document.querySelector(".inputPassword2");
const textArea = document.querySelector(".textArea");
const formMainArea = document.querySelector(".formMainArea");
const buttonLoad=document.querySelector(".buttonLoad");


formMainArea.addEventListener("submit", function () {
  
  saveLocal();
  console.log("ds");
});

function inputName(input) {
  let getName = input.name;
  return getName;
}
function inputValue(input) {
  let value = input.value;
  return value;
}

//form sayfası load işlemi
function loadLocal() {
  const getLocalEmail = localStorage.getItem("email");
  const loadJsonEmail = JSON.parse(getLocalEmail);

  const getLocalFullName = localStorage.getItem("fullName");
  const loadJsonFullName = JSON.parse(getLocalFullName);

  const getLocalPhone = localStorage.getItem("phoneNumber");
  const loadJsonPhone = JSON.parse(getLocalPhone);

  const getLocalPassword = localStorage.getItem("password");
  const loadJsonPassword = JSON.parse(getLocalPassword);

  const getLocalPassword2 = localStorage.getItem("password2");
  const loadJsonPassword2 = JSON.parse(getLocalPassword2);

  const getLocalAddress = localStorage.getItem("address");
  const loadJsonAddress = JSON.parse(getLocalAddress);

  let keyTotal= 
    [
    loadJsonFullName ,
    loadJsonEmail ,
    loadJsonPhone ,
    loadJsonPassword ,
    loadJsonPassword2 ,
    loadJsonAddress]
  ;
  return keyTotal;
}
let keyLocal=loadLocal();




buttonLoad.addEventListener("click",function(){
  
  if (localStorage.getItem("email") === null) {
    
    console.log("hey");
    

  }

})

function saveLocal() {
  const setEmail = localStorage.setItem(
    inputName(inputEmail),
    JSON.stringify(inputValue(inputEmail))
  );

  const setFullname = localStorage.setItem(
    inputName(inputFullName),
    JSON.stringify(inputValue(inputFullName))
  );

  const setPhone = localStorage.setItem(
    inputName(inputPhone),
    JSON.stringify(inputValue(inputPhone))
  );

  const setPassword = localStorage.setItem(
    inputName(inputPassword),
    JSON.stringify(inputValue(inputPassword))
  );

  const setPassword2 = localStorage.setItem(
    inputName(inputPassword2),
    JSON.stringify(inputValue(inputPassword2))
  );

  const setTextArea = localStorage.setItem(
    inputName(textArea),
    JSON.stringify(inputValue(textArea))
  );
}
