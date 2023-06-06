<?php
/*功能：将已填写过的个人基本信息读到前端
 *输入：ajax表单
 *输出：json
 *作者：赵文骏
 *开发时间：2016.7.15
 *最后修改时间：2016.7.15
*/

	//设置中文字符编码
	header("Content-type: text/html; charset=utf-8");
	//包含文件包和安全包
	require_once("../serv/conn/conn.php");
	require_once("../safe/safe.php");
	
	session_start();
	if(isset($_SESSION['client'])){
		$user =  $_SESSION['client'];	
	}
	else
		$user = $_SESSION['user'];		
	
	//查找信息
	if(isset($_POST['pwd'])){
		$pwd=$_POST['pwd'];
		$sql = " UPDATE user SET pwd=? WHERE name= ?";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("ss",$pwd,$user);
	}
	else if(isset($_POST['email'])){
		$email =$_POST['email'];
		$sql = " UPDATE user SET email=? WHERE name= ?";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("ss",$email,$user);
	}
	else if(isset($_POST['nickname'])){
		$nickname=$_POST['nickname'];
		$sql = " UPDATE user SET nickname= ? WHERE name= ?";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("ss",$nickname,$user);
	}
	$stmt->execute();
	$stmt->close();	
	$json =	"{\"SUCCESS\":\"true\", \"MSG\":\"修改成功\"}";
	echo $json;
?>