<?php
header("Content-Type:application/json;charset=utf-8");
session_start();
require("init.php");
$uname = $_REQUEST["uname"];
$upwd = $_REQUEST["upwd"];
$code  =$_REQUEST["code"];
$cPattern = '/^[0-9]{4}$/';
if(!preg_match($cPattern,$code)){
	echo '{"code":-3,"msg":"验证码格式不正确"}';
	exit;
}
$_SESSION['code'];
if($code != $_SESSION['code']){
    echo '{"code":-4,"msg":"验证码错误，请重试"}';
    exit; //停止php执行
}
$uPattern = '/^[a-zA-Z0-9]{3,12}$/';
if(!preg_match($uPattern,$uname)){
	echo '{"code":-2,"msg":"用户名格式不正确"}';
	exit;
}
if(!preg_match($uPattern,$upwd)){
	echo '{"code":-3,"msg":"密码格式不正确"}';
	exit;
}
$sql = "SELECT uid from nba_user where uname= '$uname' and upwd ='$upwd'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
$uid = ($row[0] == null) ? 0 : $row[0];
$ip = $_SERVER["REMOTE_ADDR"];
$rs = "login success $uname ip:$ip";
if($row == null){
$rs = "login error $uname ip:$ip";
}
$sql1 =  " INSERT INTO t_log VALUES(";
$sql1 .= " null,$uid,'login',now(),'$rs')";
$result = mysqli_query($conn,$sql1);
if($row==null){
echo '{"code":-1,"msg":"用户名或密码有误"}';
}else{
echo '{"code":1,"msg":"登录成功"}';
$_SESSION["uid"] = $row[0];
}