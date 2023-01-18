const inputEmail=document.querySelector(".inputEmail");
const inputFullName=document.querySelector(".inputFullName");
const inputPhone=document.querySelector(".inputPhone");
const inputPassword=document.querySelector(".inputPassword");
const inputPassword2=document.querySelector(".inputPassword2");
const formMainArea=document.querySelector(".formMainArea");

formMainArea.addEventListener("submit",function(){
    console.log("kes");
    saveLocal();
})

function inputName(input){
    let name=input.name;
    return name;
}
function inputValue(input){
    let value=input.value;
    return value;
}

function saveLocal(){
    localStorage.setItem(inputName(inputEmail),JSON.stringify(inputValue(inputEmail)));
}