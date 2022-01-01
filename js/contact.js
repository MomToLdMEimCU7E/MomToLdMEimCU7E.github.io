var btn=document.querySelector('button')
    var textarea=document.querySelector('textarea')
    var ul=document.querySelector('ul')
    btn.onclick=function () {
        if (textarea.value==''){
            alert('请输入内容')
            return false
        }else{
            var li=document.createElement('li')
            li.innerHTML=textarea.value+"<a href='javascript:;'>删除</a>"
            ul.insertBefore(li,ul.children[0])
            var as=document.querySelectorAll('a')
            for (var i=0;i<as.length;i++){
                as[i].onclick=function () {
                    ul.removeChild(this.parentNode)
                }
            }
        }
    }