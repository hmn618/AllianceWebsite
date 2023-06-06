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
    
	session_start();
	$managername=$_SESSION['managername'];
	$sql="SELECT id,coporatename,shenhe from corporate_employee_hash where managername=? ";

	$stmt = $mysqli->prepare($sql);
  $stmt->bind_param("s",$managername);	
  $stmt->bind_result($id,$coporatename,$shenhe);
	$stmt->execute();
	$stmt->store_result();

	
	if($stmt->num_rows==0){
		$json="{\"SUCCESS\":\"false\", \"MSG\": \"当前未绑定公司管理员\"}";
		echo $json;
		exit;
	}
	$json=array(
		"SUCCESS" => true,
		"DATA" => array()
	);
    class tmp{
		var $COMPANYNAME;
		var $ID;
		var $SHENHE;
		
	};
	while($stmt->fetch()){
		$obj=new tmp();
		$obj->COMPANYNAME=$coporatename;
		$obj->ID=$id;
		$obj->SHENHE=$shenhe;
		array_push($json['DATA'],$obj);
	}
	echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
	$stmt->close();
?>