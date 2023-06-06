<?php
/*
 *功能：查询文章的详细信息并列表
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
$type = $_POST['type'];
$size = 8;
$i=0;
$sql  = "SELECT id,maintitle,author,creatime,ispost FROM article where type = ? AND isdelete = 0 order by ispost ASC,creatime DESC";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("i",$type);
$stmt->execute();
$stmt->bind_result($id,$maintitle,$author,$creatime,$ispost);

$stmt->store_result();
if($stmt->num_rows==0){
		$json="{\"SUCCESS\":\"false\", \"MSG\": \"当前无文章\"}";
		echo $json;
		exit;
	}
	$json=array(
	   "SUCCESS" => true,
	   "DATA" => array()
	);
	class tmp{
		var $ID;	
		var $MAINTITLE;
		var $AUTHOR;
		var $CREATIME;
		var $ISPOST;
	};
	while($stmt->fetch())
	{
		$obj=new tmp();
		$obj->ID = $id;
		$obj->MAINTITLE = htmlspecialchars($maintitle);
		$obj->AUTHOR =	htmlspecialchars($author);
		$obj->CREATIME = htmlspecialchars(substr($creatime,0,10));
		$obj->ISPOST = $ispost;
		array_push($json['DATA'],$obj);
	}
	echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
?>