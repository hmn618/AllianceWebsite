<?php
/*
 *功能：查询企业的详细信息并列表
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

$sql  = "SELECT id,name,addr,tel,shenhe FROM corporate_member where shenhe>=10";
$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->bind_result($id,$name,$addr,$tel,$shenhe);

$stmt->store_result();
if($stmt->num_rows==0){
		$json="{\"SUCCESS\":\"false\", \"MSG\": \"未查询到企业\"}";
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
		var $ADDR;
		var $TEL;
		var $SHENHE;
	};
	while($stmt->fetch())
	{
		$obj=new tmp();
		$obj->ID = $id;
		$obj->NAME = $name;
		$obj->ADDR = $addr;
		$obj->TEL = $tel;
		$obj->SHENHE = $shenhe;
		array_push($json['DATA'],$obj);
	}
	echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
?>