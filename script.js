const inputEmail = document.querySelector(".inputEmail");
const inputFullName = document.querySelector(".inputFullName");
const inputPhone = document.querySelector(".inputPhone");
const inputPassword = document.querySelector(".inputPassword");
const inputPassword2 = document.querySelector(".inputPassword2");
const textArea = document.querySelector(".textArea");
const formMainArea = document.querySelector(".formMainArea");

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
