window.onload=function () {
    document.getElementById('form').onsubmit=function () {
        return checkUserName() && checkEmail() && confirmPassword() && checkPassword();
    }
    document.getElementById('userName').onblur=checkUserName;
    document.getElementById('userPassword').onblur=checkPassword;
    document.getElementById('userConfirmPassword').onblur=confirmPassword;
        var checkbox=document.getElementById('check');
        var sub=document.getElementById('btn');
        var una=document.getElementById('userName');
        var paw=document.getElementById('userConfirmPassword');
        var form=document.getElementById("form");
        sub.addEventListener('click',function () {
            if (checkUserName() && checkEmail() && confirmPassword() && checkPassword() && checkbox.checked) {
                var val = una.value;
                var pas = paw.value;
                localStorage.setItem('username', val);
                localStorage.setItem('password', pas);
                form.action='index.html'
            }else
                alert('信息不完全');
        })
}

function checkUserName() {
    var username=document.getElementById('userName').value;
    var reg_username = /^([a-zA-Z0-9_-])/;
    var flag = reg_username.test(username);
    var s_username=document.getElementById('s_userName')
    if(flag){
        s_username.innerHTML=' 用户名合法';
        s_username.className='success';
    }else {
        s_username.innerHTML=' 用户名不合法';
        s_username.className='error';
    }
    return flag;
}

function checkPassword() {
    var password=document.getElementById('userPassword').value;
    var reg_password = /^\w{6,12}$/;
    var flag=reg_password.test(password);
    var s_userpassword=document.getElementById('s_userPassWord');
    if (flag){
        s_userpassword.innerHTML=' 密码合法';
        s_userpassword.className='success';
    }else{
        s_userpassword.innerHTML=' 密码不合法，请重新填写';
        s_userpassword.className='error';
    }
    return flag;
}

function confirmPassword() {
    var password=document.getElementById('userPassword').value;
    var confirmpassword=document.getElementById('userConfirmPassword').value;
    var s_confirmpassword=document.getElementById('s_userConfirmPassword');
    if((password!==confirmpassword)||confirmpassword.length===0){
        s_confirmpassword.innerHTML=' 上下密码不一致,请重新填写';
        s_confirmpassword.className='error';
        return false;
    }else {
        s_confirmpassword.innerHTML=' 上下密码一致';
        s_confirmpassword.className='success';
        return true;
    }
}
