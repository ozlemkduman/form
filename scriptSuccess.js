const userInfo = document.querySelector(".userInfo");

const liName = document.getElementById("liName");
const liMail = document.getElementById("liMail");
const liPhone = document.getElementById("liPhone");
const liPassword = document.getElementById("liPassword");
const liPassword2 = document.getElementById("liPassword2");
const liAddress = document.getElementById("liAddress");

const list = document.querySelector(".list");

const buttonLoadSuccess = document.querySelector(".buttonLoadSuccess");

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

function mainForm() {
  infoList();
  userInfo.textContent = `Merhaba ${keyLocal[0]}  Kaydınız başarı ile alınmıştır. 101 masası kurulduğunda tarafınıza bilgi iletilecektir. Şeytanınız bol olsun dileriz... 
  "Türkiye 101 oynayanlar federasyonu "`;
}

function infoList() {
  list.style.display = "block";
  liName.textContent = `İsim: ${keyLocal[0]}`;
  liMail.textContent = `Mail: ${keyLocal[1]}`;
  liPhone.textContent = `Telefon: ${keyLocal[2]}`;
  liPassword.textContent = `Şifre: ${keyLocal[3]}`;
  liPassword2.textContent = `Şifre Doğrulama: ${keyLocal[4]}`;
  liAddress.textContent = `Adres: ${keyLocal[5]}`;
}



buttonLoadSuccess.addEventListener("click", function () {
  getParams();
  console.log();
});

function getParams() {

  // "?" ile url 2 ayrı değeri olan diziye  dönüşür. çünkü "?" işareti 1 tane vardır. queryString değişkeni bu dizinin 1 indisini değer alır. yani soru işaretinden sonraki kısmı.
var queryString =document.URL.split("?")[1]; 

//burada "&" karakteriyle kesilen değerlerden yeni dizi oluşturuyoruz.
var params = queryString.split("&");

// obje oluşturma
var paramValues = {};

for (var i = 0; i < params.length; i++) { //paramsın uzunluğu esas alınır 
  var keyValue = params[i].split("="); //burada her değer "=" işareti ile kesilen yeni diziler oluşur
  var key = decodeURIComponent(keyValue[0]); // keyValue'nun 1. elemanı yani 0 indisi key sayılır.
  var value = decodeURIComponent(keyValue[1]); // keyValue'nun 2. elemanı yani 1 indisi key sayılır.
  paramValues[key] = value; // paramValues objesinde "key" isimli key in valuesu buradaki value olarak atanır
}

// Output the resulting object with parameter values
console.log(paramValues);
console.log(queryString);
console.log(params);
console.log(keyValue);
console.log(paramValues);

}



mainForm();
