<?php
/*
 *功能：修改用户密码
 *输入：
 *输出：
 *作者：赵文骏
 *开发时间：2016.7.18
 *最后修改时间：2016.7.18
*/
header('Content-type: text/json; charset=utf-8');
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

	$name = $_POST['name'];
	$pwd = $_POST['pwd'];
	
	$sql = "SELECT 1 FROM user WHERE name = ?";
	$stmt = $mysqli->prepare($sql);
	$stmt->bind_param("s",$name);
	
	$stmt->execute();
	$stmt->store_result();
	$isused = $stmt->num_rows;
	$stmt->close();	
	
	if($isused){
		$sql  = "UPDATE user SET pwd=? where name = ?";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("ss",$pwd,$name);
		$stmt->execute();
		$stmt->close();	
				
		$json = "{\"SUCCESS\":\"true\", \"MSG\": \"修改成功\"}";
		echo $json;		
	}
	else{
		$json = "{\"SUCCESS\":\"false\", \"MSG\": \"账号不存在\"}";
		echo $json;	
	}	
?>