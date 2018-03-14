<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
$uname = $_REQUEST["uname"];
$upwd = $_REQUEST["upwd"];
$email = $_REQUEST["email"];
if($uname ==""||$upwd == ""||$email == ""){
	echo "请确认信息完整性";
}else{
	$sql = "INSERT INTO  nba_user(uname,upwd,email) VALUES('$uname','$upwd','$email')";
	$result = mysqli_query($conn,$sql);
//	$row = mysqli_fetch_row($result);
//	console.log($row);
	if(!$result){
		echo "注册不成功";
	}else{
		echo "注册成功";
	}
}
