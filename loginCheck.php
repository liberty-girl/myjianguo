<?php
    header("Content-type:text/html;charset=utf-8");
    //1.接收前端数据
    $phonenum = $_POST['phonenum'];
    $password = $_POST['pass'];
    //2.处理
    //1).连接数据库
    $conn = mysql_connect("localhost","root","root");
    if(!$conn){
        echo("数据库出错".mysql_error());
    }else{
        //2).选择库
        mysql_select_db("mybd1908",$conn);
        //3).执行sql语句
        $sqlstr = "select * from vip where phonenum='$phonenum' and pass='$password'";
        $result = mysql_query($sqlstr,$conn);
        $rows = mysql_num_rows($result);
        if($rows>0){
            mysql_close($conn);
            $result = 1;//登录成功
        }else{
            $result = 0;//登录失败
        }
        echo $result;
    }
?>