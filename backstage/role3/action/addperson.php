<?php
/**
  *功能：从数据库中读取通知公告。
  *输出：公告信息。
  *作者：张城城、赵文骏
  *开发时间：2016.7.24
*/
//设置中文字符编码
header('Content-type: text/json; charset=utf-8');
//包含文件和安全文件
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

	$name=$_POST['name'];
	$email=$_POST['email'];
	$telphone=$_POST['telphone'];
    session_start();
	$band=$_SESSION['user'];
	$sql="UPDATE corporate_manager SET name=?,email=?,tel=? where band=?";

	$stmt = $mysqli->prepare($sql);
	$stmt->bind_param("ssss",$name,$email,$telphone,$band);	
	$stmt->execute();
	$stmt->close();
	
	$json = "{\"SUCCESS\":\"true\", \"MSG\": \"成功添加\"}";
		echo $json;	
	$mysqli->close();
	exit;

?>