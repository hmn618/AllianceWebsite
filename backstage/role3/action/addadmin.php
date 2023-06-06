<?php
/**
  *功能：从数据库中读取通知公告。
  *输出：公告信息。
  *作者：张城城
  *开发时间：2016.7.22
*/
//设置中文字符编码
header('Content-type: text/json; charset=utf-8');
//包含文件和安全文件
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

	$companyname=$_POST['companyname'];
  session_start();	
	if(!isset($_SESSION['managername'])){
		$json = "{\"SUCCESS\":\"flase\", \"MSG\": \"用户资料未完善\"}";
		echo $json;	
	}
	else{
		$managername=$_SESSION['managername'];
		$sql="SELECT 1 FROM corporate_employee_hash WHERE managername=? and coporatename=?";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("ss",$managername,$companyname);	
		$stmt->execute();
		$stmt->store_result();
		$isused = $stmt->num_rows;
		$stmt->close();
		if($isused){
			$json = "{\"SUCCESS\":\"flase\", \"MSG\": \"该公司已被绑定过\"}";
			echo $json;	
		}
		else{
			$sql="INSERT INTO corporate_employee_hash(managername,coporatename,shenhe) values(?,?,0)";
		
			$stmt = $mysqli->prepare($sql);
			$stmt->bind_param("ss",$managername,$companyname);	
			$stmt->execute();
			$stmt->close();
			
			$json = "{\"SUCCESS\":\"true\", \"MSG\": \"成功添加\"}";
			echo $json;	
			$mysqli->close();
			exit;
		}
	}
?>