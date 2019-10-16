$(".close").click(function(){
	$(".login").css("display","none");
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

let count=1;
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

$(".forget1").click(function(){
	$(".login").css("display","none");
	$(".register").css("display","block");
});

$(".login_top").children().click(function(){
	let inde = $(".login_top").children().index(this);
	$(".denglu").attr("class","denglu");
	$(".denglu").eq(inde).attr("class","denglu denglu1");
});


$(".logina").click(function(){
	let num = $(".denglu1 input").length;
	for(let i=0;i<num;i++){
		if($(".denglu1 input").eq(i).val()==""){
			$(".denglu1 input").eq(i).css("border-color","red");
		}else{
			$(".denglu1 input").eq(i).css("border-color","#dadada");
		}
	}
	// //1.创建对象
	// let xhr = new XMLHttpRequest();
	// //2.设置请求参数
	// xhr.open("post","loginCheck.php",true);
	// //3.设置回调函数
	// xhr.onreadystatechange = function(){
	// 	if(xhr.readyState==4 && xhr.status==200){
	// 		if(xhr.responseText=="1"){
	// 			addCookie("phonenum",$("#phonenum")[0].value,7);//键，值，保存时间
	// 			location.href="index.html";
	// 		}else{
	// 			$(".jiancha").html("登录失败，账号名或密码错误");
	// 			$(".jiancha").css("display","block");
	// 		}
	// 	}
	// }
	// //post方式，设置请求头
	// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	// //post方式：把传给服务器端数据（键值对）放在send函数的参数里面
	// let sendstr = `phonenum=${$("#phonenum")[0].value}&pass=${$("#mima1")[0].value}`;
	// xhr.send(sendstr);


	// $.ajax({
	//   url: "loginCheck.php",
	//   type:"post",
	//   data: `phonenum=${$("#phonenum")[0].value}&pass=${$("#mima1")[0].value}`,
	//   success: function($result){
	// 	if($result=="1"){
	// 		addCookie("phonenum",$("#phonenum")[0].value,7);//键，值，保存时间
	// 		location.href="index.html";
	// 	}else{
	// 		$(".jiancha").html("登录失败，账号名或密码错误");
	// 		$(".jiancha").css("display","block");
	// 	}
	//   }
	// });

	var par = `phonenum=${$("#phonenum")[0].value}&pass=${$("#mima1")[0].value}`;
	$.post("loginCheck.php",par,function($result){
			if($result=="1"){
				if(count%2==0){
					addCookie("phonenum",$("#phonenum")[0].value,7);//键，值，保存时间
					location.href="index.html";
				}else{
					addCookie("phonenum",$("#phonenum")[0].value);//键，值，保存时间
					location.href="index.html";
				}
				
			}else{
				$(".jiancha").html("登录失败，账号名或密码错误");
				$(".jiancha").css("display","block");
			}
	});

});

$(".sendyzm").click(function(){
	let str1 = $("#phonenum1")[0].value;
	let reg1 = /^\d{11}$/;
	if(str1=="" || reg1.test(str1)==false){
		$(this).prev().css("border-color","red");
	}else{
		$(this).prev().css("border-color","#dadada");
		sendyzm($(".sendyzm"),$("#phonenum1"),$(".jiancha"),$(".sendyzm"),59);
	}
});