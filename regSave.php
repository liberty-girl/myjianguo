<?php
	header("Content-type:text/html;charset=utf-8");
	//1.接受前端数据
	$phonenum = $_POST['phonenum'];
	$password = $_POST['pass'];
	//2.处理
	//1>连接数据库
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		echo("数据库出错".mysql_error());
	}else{
		//2>选择库
		mysql_select_db("mybd1908",$conn);
		//3>执行sql语句
		$sqlstr = "select * from vip where phonenum='$phonenum'";//查询该手机号在数据库中有没有
		$result = mysql_query($sqlstr,$conn);
		echo($result);
		$rows = mysql_num_rows($result);//获取结果的行数
		if($rows>0){
			mysql_close($conn);
			echo "-1";//手机号已被注册
		}else{
			$sqlstr = "insert into vip(phonenum,pass) values('$phonenum','$password')";
			$result = mysql_query($sqlstr,$conn);
			mysql_close($conn);
			//3.响应
			if($result!=1){
				echo "0";//注册失败用0
			}else{
				echo "-1";//注册成功用1
			}
		}
	}
?>