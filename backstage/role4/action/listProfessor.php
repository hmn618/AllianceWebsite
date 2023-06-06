<?php
/*
 *功能：查询专家的详细信息并列表
 *输入：文章类型
 *输出：
 *作者：赵文骏
 *开发时间：2016.7.18
 *最后修改时间：2016.7.18
*/
header('Content-type: text/json; charset=utf-8');
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

//

$sql  = "SELECT id,name,sex,tel,email,shenhe FROM individual_member_basic where shenhe>=10";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->bind_result($id,$name,$sex,$tel,$email,$shenhe);

$stmt->store_result();
if($stmt->num_rows==0){
		$json="{\"SUCCESS\":\"false\", \"MSG\": \"未查询到专家\"}";
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
		var $SEX;
		var $TEL;
		var $EMAIL;
		var $SHENHE;
	};
	while($stmt->fetch())
	{
		$obj=new tmp();
		$obj->ID = $id;
		$obj->NAME = $name;
		$obj->SEX =	$sex;
		$obj->TEL = $tel;
		$obj->EMAIL = $email;
		$obj->SHENHE = $shenhe;
		array_push($json['DATA'],$obj);
	}
	echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
?>