<?php
/**
  *功能：从数据库中读取通知公告。
  *输出：公告信息。
  *作者：赵文骏
  *开发时间：2016.7.22
*/
//设置中文字符编码
header('Content-type: text/json; charset=utf-8');
//包含文件和安全文件
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");
    $json="{\"SUCCESS\":\"false\", \"MSG\": \"当前未存储个人信息\"}";
		echo $json;
		exit;
	session_start();
	$band=$_SESSION['user'];
	$sql="SELECT name,email,tel from corporate_manager where band=?";
	
    $stmt = $mysqli->prepare($sql);
	
	$stmt->bind_param("s",$band);	
    $stmt->bind_result($name,$email,$telphone);
	$stmt->execute();
	$stmt->store_result();
	$stmt->close();
	if($stmt->row_nums==0){
		$json="{\"SUCCESS\":\"false\", \"MSG\": \"当前未存储个人信息\"}";
		echo $json;
		exit;
	}
	$json=array{
		"SUCCESS"=>true,
		"DATA"=>array()
	};
	class tmp{
		var $NAME;
		var $EMAIL;
		var $TEL;
	};
	   while($stmt->fetch()){
		   $obj=new tmp();
		   $obj->NAME=$name;
		   $obj->EMAIL=$email;
		   $obj->TEL=$telphone;
		   array_push($json['DATA'],$obj);
	   }
	echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
	$stmt->close();	
	
?>