$(".close").click(function(){
	$(".register").style.display = "none";
});

let str;
$(".ceshi").focus(function(){
	str = $(this).prop("placeholder");
	$(this).attr("placeholder","");
	$(this).css("color","black");
});

$(".ceshi").blur(function(){
	$(this).attr("placeholder",str);
	$(this).css("color","#bbb");
});

let count=0;
$("#agree").click(function(){	
	if(count%2==0){
		$(this).css("border","solid 1px #ddd");
		$(this).children().css("display","none");
	}else{
		$(this).css("border","solid 1px #cf1d1b");
		$(this).children().css("display","block");
	}
	count++;
});

$(".zhuce").click(function(){
	let str1 = $("#phonenum")[0].value;
	let str2 = $("#mima1")[0].value;
	let reg1 = /^\d{11}$/;
	let reg2 = /\S{6}/;
	//非空判断
	if($("#phonenum")[0].value=="" || reg1.test(str1)==false){
		$(".jiancha").html("请检查手机号");
		$(".jiancha").css("display","block");
		return false;
	}else if($("#mima1")[0].value=="" || reg2.test(str2)==false){
		$(".jiancha").html("请至少输入6位以上的密码");
		$(".jiancha").css("display","block");
		return false;
	}else if($("#mima1")[0].value!=$("#mima2")[0].value){
		$(".jiancha").html("两次输入的密码不一致");
		$(".jiancha").css("display","block");
		return false;
	}else if(count%2!=0){
		$(".jiancha").html("您需要同意《坚果服务协议》");
		$(".jiancha").css("display","block");
		return false;
	}else{
		let xhr = new XMLHttpRequest();

		xhr.open("post","regSave.php",true);

		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="-1"){
					$(".jiancha").html("手机号已被注册");
					$(".jiancha").css("display","block");
				}else if(xhr.responseText=="0"){
					$(".jiancha").html("注册失败");
					$(".jiancha").css("display","block");
				}else if(xhr.responseText=="1"){
					$(".jiancha").html("注册成功请<a href='login.html'>登录</a>");
					$(".jiancha").css("display","block");
				}
			}
		}
		//post方式：设置请求头
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//post方式：把传给服务器端数据（键值对）放在send函数的参数里
		let sendstr = `phonenum=${$("#phonenum")[0].value}&pass=${$("#mima1")[0].value}`;
		xhr.send(sendstr);
	}
});