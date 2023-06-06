<?php
/*
 *功能：查询企业会员并列表
 *输入：文章类型
 *输出：
 *作者：赵文骏
 *开发时间：2016.7.25
 *最后修改时间：2016.7.25
*/
header('Content-type: text/json; charset=utf-8');
//包含文件包和安全包
require_once("../../serv/conn/conn.php");
require_once("../../safe/safe.php");

//
$sql  = "SELECT id,name,status,logo,introduction FROM corporate_member where shenhe >= 100";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->bind_result($id,$name,$status,$logo,$introduction);

$stmt->store_result();
if($stmt->num_rows==0){
		$json="{\"SUCCESS\":\"false\", \"MSG\": \"当前无记录\"}";
		echo $json;
		exit;
	}
	$json=array(
	   "SUCCESS" => true,
	   "DATA" => array()
	);
	class tmp{
		var $ID;	
		var $NAME;
		var $STATUS;
		var $LOGO;
		var $INTRODUCTION;
	};
	while($stmt->fetch())
	{
		$obj=new tmp();
		$obj->ID = $id;
		$obj->NAME = $name;
		$obj->STATUS =	$status;
		$obj->LOGO = $logo;
		$obj->INTRODUCTION = $introduction;
		array_push($json['DATA'],$obj);
	}
	echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
?>