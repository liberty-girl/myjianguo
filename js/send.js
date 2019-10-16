
//用ajax提交到后台的短信接口

function sendyzm(obj,get_num,xainshi,count1){
	var phone = get_num.val();
	if(!phone){
		get_num.css("border-color","red");
	}else{
		get_num.css("border-color","#dadada");
		$.ajax({
			type:"post",
			url:"",
			data:{"phonenum":phone},
			dataType:"JSON",
			async:"false",
			cache:"false",//不缓存此页面
			error:function(){
				xainshi.html("验证码发送失败，请重新发送");
				xainshi.css("display","block");
				return -1;
			},
		});
		setTime(obj,count1);
	}
}

function setTime(obj,count1){
	if(count1==0){
		obj.prop("disabled","true");
		obj.text("获取短信验证码");
		count1 = count1;
		return;
	}else{
		obj.prop("disabled","true");
		obj.text(""+count1+"s后重新发送");
		count1--;
	}
	setTimeout(function(){setTime(obj,count1)},1000);
}