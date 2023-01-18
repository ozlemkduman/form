const userInfo= document.querySelector(".userInfo");

userInfo.textContent=`${loadLocal()} - mail adresiniz ile sisteme kaydınız oluşturulmuştur.`

function loadLocal(){
    const getLocal=localStorage.getItem("email");
    const loadJson=JSON.parse(getLocal);
    return loadJson;
}
