<?php
//data/users/islogin.php
header("Content-Type:application/json");
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid==null)
	echo json_encode(["ok"=>0]);
else{
	$sql="select uname,upwd,email,img from nba_user where uid=$uid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	echo json_encode(["ok"=>1,"uname"=>$row[0],"upwd"=>$row[1],"email"=>$row[2],"img"=>$row[3]]);
}