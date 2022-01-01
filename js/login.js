var logIn=document.querySelector('.submit');
var una=document.getElementById('username');
var pad=document.getElementById('password');
var rememberUserName=document.getElementById('remember1');
var rememberPassWord=document.getElementById('remember2');
var freeLogIn=document.getElementById("remember3");
var form=document.getElementById('form')
var username=localStorage.getItem('username');
var password=localStorage.getItem('password');

if (localStorage.getItem('stateCheckOne')==='true'){
    una.value=username;
    rememberUserName.checked=true;
}
if(localStorage.getItem('stateCheckTwo')==='true'){
    pad.value=password;
    rememberPassWord.checked=true;
}
if(localStorage.getItem('stateCheckThree')==='true'){
    getCookie();
}
rememberUserName.addEventListener('change',function () {
    if(this.checked){
        localStorage.setItem('stateCheckOne',this.checked);
    }else {
        localStorage.setItem('stateCheckOne',this.checked);
    }
})
rememberPassWord.addEventListener('change',function () {
    if(this.checked){
        localStorage.setItem('stateCheckTwo',this.checked);
    }else{
        localStorage.setItem('stateCheckTwo',this.checked);
    }
})
freeLogIn.addEventListener('change',function () {
    if(this.checked){
        localStorage.setItem('stateCheckThree',this.checked);
        setCookie();
    }else {
        localStorage.setItem('stateCheckThree',this.checked);
    }
})
logIn.addEventListener('click',function () {
    if((username === una.value) && (password === pad.value)){
        form.action='home.html';
    }
    else if((username === una.value) && (password !== pad.value)){
        alert('密码错误');
    }
    else if((username !== una.value) && (password === pad.value)){
        alert('用户名错误');
    }
    else {
        alert('用户名和密码错误');
    }
})
function setCookie() {
    let userName = username ;// 用户名
    let passWord = password ;//密码
    let cookieName = 'userInfo' // cookie名称
    let data = {
        username: userName,
        password: passWord
    }
    document.cookie = cookieName + '=' + JSON.stringify(data) + ';path=/;max-age=' + 24*60*60;
}

function getCookie() {
    let cookie = document.cookie
    let cookieName = 'userInfo' // cookie名称
    let arr = cookie.split('; ')
    let userInfo = null
    for (let i = 0; i < arr.length; i++) {
        let tempArr = arr[i].split('=')
        if (tempArr[0] === cookieName) {
            userInfo = JSON.parse(tempArr[1])
        }
    }
    if (userInfo) {
        window.location='home.html';
    } else {
    }
}