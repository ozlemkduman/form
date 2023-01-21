const inputEmail = document.querySelector(".inputEmail");
const inputFullName = document.querySelector(".inputFullName");
const inputPhone = document.querySelector(".inputPhone");
const inputPassword = document.querySelector(".inputPassword");
const inputPassword2 = document.querySelector(".inputPassword2");
const inputTextArea = document.querySelector(".inputTextArea");
const formMainArea = document.querySelector(".formMainArea");
const buttonLoad = document.querySelector(".buttonLoad");

formMainArea.addEventListener("submit", function () {
  saveLocal();
  console.log("ds");
});

function getInputName(input) {
  let getName = input.name;
  return getName;
}
function getInputValue(input) {
  let value = input.value;
  return value;
}

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

  let keyTotal = [
    loadJsonFullName,
    loadJsonEmail,
    loadJsonPhone,
    loadJsonPassword,
    loadJsonPassword2,
    loadJsonAddress,
  ];
  return keyTotal;
}
let keyLocal = loadLocal();

function loadButton() {
  if (
    localStorage.getItem(
      "email",
      "fullName",
      "phoneNumber",
      "password",
      "password2",
      "address"
    ) != null
  ) {
    console.log("hey");
    inputEmail.setAttribute("value", JSON.parse(localStorage.getItem("email")));
    inputFullName.setAttribute(
      "value",
      JSON.parse(localStorage.getItem("fullName"))
    );
    inputPhone.setAttribute(
      "value",
      JSON.parse(localStorage.getItem("phoneNumber"))
    );
    inputPassword.setAttribute(
      "value",
      JSON.parse(localStorage.getItem("password"))
    );
    inputPassword2.setAttribute(
      "value",
      JSON.parse(localStorage.getItem("password2"))
    );
    inputTextArea.setAttribute("value", JSON.parse(localStorage.getItem("address")));
  }
}

buttonLoad.addEventListener("click", function () {
  loadButton();
});

function saveLocal() {
  const setEmail = localStorage.setItem(
    getInputName(inputEmail),
    JSON.stringify(getInputValue(inputEmail))
  );

  const setFullname = localStorage.setItem(
    getInputName(inputFullName),
    JSON.stringify(getInputValue(inputFullName))
  );

  const setPhone = localStorage.setItem(
    getInputName(inputPhone),
    JSON.stringify(getInputValue(inputPhone))
  );

  const setPassword = localStorage.setItem(
    getInputName(inputPassword),
    JSON.stringify(getInputValue(inputPassword))
  );

  const setPassword2 = localStorage.setItem(
    getInputName(inputPassword2),
    JSON.stringify(getInputValue(inputPassword2))
  );

  const setTextArea = localStorage.setItem(
    getInputName(inputTextArea),
    JSON.stringify(getInputValue(inputTextArea))
  );
}
