let count = 0;
let str1;

$(".dianji").click(function(){
    if(check()==false){
        return false;
    }
    $("form div").eq(count).css("display","none");
    $("form div").eq(count+1).css("display","block");
    $(".get_phone").html(str1);
    // if(count==0){
    //     sendyzm($(".sendyzm"));
    // }
    if(count==2){
        $(this).css("display","none");
        $(".liji").css("display","block");
    }
    count++;
});

$("#phonenum_wj").blur(function(){
    if(check()==false){
        return false;
    }
});

$("#phonenum_wj").focus(function(){
    $(".error1_wj").html("");
    $(".error1_wj").css("display","none");
    $(this).css("border-color","#dadada");
    return false;
});

function check(){
    
    str1 = $("#phonenum_wj")[0].value;
    // let str2 = $("#mima1")[0].value;
    let reg1 = /^\d{11}$/;
    // let reg2 = /\S{6}/;
    if($("#phonenum_wj")[0].value==""){
        $("#phonenum_wj").css("border-color","red");
        $(".error1_wj").html("邮箱或者手机号码不能为空");
        $(".error1_wj").css("display","block");
        return false;
    }else if(reg1.test(str1)==false){
        $("#phonenum_wj").css("border-color","red");
        $(".error1_wj").html("您填写的不是邮箱或者手机号码");
        $(".error1_wj").css("display","block");
        return false;
    }else{
        var par1 = {"phone":str1};
        $.post("loginCheck.php",par1,function($result){
			// if($result=="1"){
			// 	location.href="index.html";
            // }
            if($result=="0"){
				$(".jiancha").html("登录失败，账号名或密码错误");
                $(".jiancha").css("display","block");
                return false;
			}
	    });
    }
}