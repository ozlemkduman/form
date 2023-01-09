const buttonSend = document.querySelector(".buttonSend");
const buttonForm = document.querySelector(".buttonForm");
const inputEmail = document.querySelector(".inputEmail");
const inputFullName = document.querySelector(".inputFullName");
const inputPhone = document.querySelector(".inputPhone");
const inputPassword = document.querySelector(".inputPassword");
const inputPassword2 = document.querySelector(".inputPassword2");
const textAreaAddress = document.querySelector(".textAreaAddress");

const formMainArea = document.querySelector(".formMainArea");
const formUserArea = document.querySelector(".formUserArea");

const userInfo = document.querySelector(".userInfo");

formMainArea.addEventListener("submit", function (e) {

    submit();
});

function inputName(input) {
  let localName = input.name;
  return localName;
}

let userInfoArray = [];

//user objesi oluştur ve diziye ekle
function submit() {
  let userObject = {
    eMail: inputEmail.value,
    fullName: inputFullName.value,
  };

  userInfoArray.push(userObject);

  createNewUser();
}
console.log(userInfo)
//dizinin elemanı kadar yeni div oluştur
function createNewUser() {
  for (let user of userInfoArray) {
    let getUser = createNewdiv("user.content");
    userInfo.appendChild(getUser);
  }
}
//yeni div oluştur ve yeni oluşan userleri buna ekle

function createNewdiv(content) {
  let newDiv = document.createElement("div");
  userInfo.appendChild(newDiv);
  newDiv.textContent = content;
  return newDiv;
}

