<?php
/*功能：读取用户基本信息存入数据库
 *输入：ajax表单
 *输出：json
 *作者：赵文骏
 *开发时间：2016.7.14
 *最后修改时间：2016.7.14
*/

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

	
	session_start();
	$band = $_SESSION['user'];
	// 基本信息
	$name = $_POST['name'];
	$sex = $_POST['sex'];
	$cardnum = $_POST['cardnum'];
	$email = $_POST['email'];
	$tel = $_POST['tel'];
	
	//插入新记录
	$sql = "UPDATE system_manager SET name=?,sex=?,cardnum=?,email=?,tel=? WHERE band=?";
	$stmt = $mysqli->prepare($sql);
	$stmt->bind_param("ssssss",$name,$sex,$cardnum,$email,$tel,$band);
	$stmt->execute();
	$stmt->close();	
	
	$json = "{\"SUCCESS\":\"true\", \"MSG\": \"成功更新\"}";
	echo $json;

	$mysqli->close();
	exit;
?>