window.onload = function(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var input = document.getElementsByTagName("input");
    // 全选
    btn1.onclick = function(){
        // 如何通过js操作复选框
        for(var i=0;i<input.length;i++){
            input[i].checked = true;
        }
    };
    // 不选
    btn2.onclick = function(){
        // 如何通过js操作复选框
        for(var i=0;i<input.length;i++){
            input[i].checked = false;
        }
    };
    // 反选
    btn3.onclick = function(){
        // 如何通过js操作复选框
        for(var i=0;i<input.length;i++){
            if(input[i].checked == true){
                input[i].checked = false;
            }else{
                input[i].checked = true;
            }
        }
    };
}