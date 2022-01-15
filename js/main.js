let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
$.getJSON("../data/posts.json","",function(result){
  var dataArr = result.data;
  var str = "";
  for(var postobj of dataArr){
    str+='<div class="post">';
    str+='<div class="date">';
    str+='<i class="far fa-clock"></i>';
    str+='<span>'+postobj.createdtime+'</span>';
    str+='</div>';
    str+='<h3 class="title">'+postobj.title_s+'</h3>';
    str+='<p class="text">'+postobj.content_s+'</p>';
    str+='<div class="links"><a href="#" class="user"><i class="far fa-user"></i><span>by 夏梦</span></a><a href="edit.html" class="icon"><i class="iconfont icon-xiugai"></i><span>修改</span></a><a href="delete.html" class="icon"><i class="iconfont icon-shanchu"></i><span>删除</span></a></div></div>';
  }
  $("#posts_content").html(str);
})
