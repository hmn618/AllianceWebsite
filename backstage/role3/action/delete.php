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

	$companyname=$_POST['companyname'];

	$sql="delete from corporate_employee_hash where coporatename=?";

	$stmt = $mysqli->prepare($sql);
  $stmt->bind_param("s",$companyname);
	$stmt->execute();
	$stmt->close();

	$json = "{\"SUCCESS\":\"true\", \"MSG\": \"删除成功\"}";
		echo $json;	
	$mysqli->close();
	exit;

?>