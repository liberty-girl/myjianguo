$(".close").click(function(){
	$(".register").css("display","none");
});

let str1;
$(".ceshi").focus(function(){
	str1 = $(this).prop("placeholder");
	$(this).attr("placeholder","");
	$(this).css("color","black");
});

$(".ceshi").blur(function(){
	$(this).attr("placeholder",str1);
	$(this).css("color","#bbb");
});

let count2=0;
$("#agree_r").click(function(){	
	if(count2%2==0){
		$(this).css("border","solid 1px #ddd");
		$(this).children().css("display","none");
	}else{
		$(this).css("border","solid 1px #cf1d1b");
		$(this).children().css("display","block");
	}
	count2++;
});

let str11;
let str22;
$(".zhuce").click(function(){
	str11 = $("#phonenum_r")[0].value;
	str22 = $("#mima1_r")[0].value;
	let reg11 = /^\d{11}$/;
	let reg22 = /\S{6}/;
	//非空判断
	if($("#phonenum_r")[0].value=="" || reg11.test(str11)==false){
		$(".jiancha_r").html("请检查手机号");
		$(".jiancha_r").css("display","block");
		return false;
	}else if($("#mima1_r")[0].value=="" || reg22.test(str22)==false){
		$(".jiancha_r").html("请至少输入6位以上的密码");
		$(".jiancha_r").css("display","block");
		return false;
	}else if($("#mima1_r")[0].value!=$("#mima2")[0].value){
		$(".jiancha_r").html("两次输入的密码不一致");
		$(".jiancha_r").css("display","block");
		return false;
	}else if(count2%2!=0){
		$(".jiancha_r").html("您需要同意《坚果服务协议》");
		$(".jiancha_r").css("display","block");
		return false;
	}else{
		let xhr = new XMLHttpRequest();

		xhr.open("post","regSave.php",true);

		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="-1"){
					$(".jiancha_r").html("手机号已被注册");
					$(".jiancha_r").css("display","block");
				}else if(xhr.responseText=="0"){
					$(".jiancha_r").html("注册失败");
					$(".jiancha_r").css("display","block");
				}else if(xhr.responseText=="1"){
					$(".jiancha_r").html("注册成功请<a href='login.html'>登录</a>");
					$(".jiancha_r").css("display","block");
				}
			}
		}
		//post方式：设置请求头
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//post方式：把传给服务器端数据（键值对）放在send函数的参数里
		let sendstr = `phonenum=${$("#phonenum_r")[0].value}&pass=${$("#mima1_r")[0].value}`;
		xhr.send(sendstr);
	}
});

$(".sendyzm_r").click(function(){
	let str1 = $("#phonenum_r")[0].value;
	let reg1 = /^\d{11}$/;
	if(str1=="" || reg1.test(str1)==false){
		$(this).prev().css("border-color","red");
	}else{
		$(this).prev().css("border-color","#dadada");
		sendyzm($(".sendyzm_r"),$("#phonenum_r"),$(".jiancha_r"),59);
	}
});