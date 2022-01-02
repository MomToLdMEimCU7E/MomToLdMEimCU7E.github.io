$("#submit").click(function(){
    var formObject = {};
    var formArray = $("#postInfo").serializeArray();
    $.each(formArray,function(i,item){
        formObject[item.name]=item.value;
    });
    $.ajax({
        type:"get",
        url:"../data/posts.json",
        dataType:'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(formObject),
        success: function(data){
            alert("提交成功");
        },
        error: function(){
            alert("提交失败");
        }
    })
})