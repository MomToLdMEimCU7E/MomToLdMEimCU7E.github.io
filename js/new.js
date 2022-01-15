function newText(){
    $.ajax({
        type:"POST",
        url:"../data/posts.json",
        dataType:'json',
        contentType: "application/json; charset=utf-8",
        data: $('#postInfo').serialize(),
        success: function(result){
            alert("提交成功");
            console.log(result);
        },
        error: function(){
            alert("提交失败");
        }
    })
}