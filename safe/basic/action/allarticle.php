<?php
/**
  *功能：从数据库中读取通知公告。
  *输出：公告信息。
  *作者：张城城
  *开发时间：2016.7.19
*/
//设置中文字符编码
header('Content-type: text/json; charset=utf-8');
//包含文件和安全文件
require_once("../../serv/conn/conn.php");
require_once("../../safe/safe.php");
//定义变量
	$maintitle=$update1=$abstract="";
	$id=0;
	$i=0;
	$type=$_POST['type'];
//查询数据库中的新闻
	$sql="SELECT maintitle,id,abstract,updata from article where type=? and isdelete=0 and ispost=1 order by updata DESC";
	$result=$mysqli->prepare($sql);
	$result->bind_param("i",$type);
	$result->execute();
	$result->bind_result($maintitle,$id,$abstract,$update1);
	
	$result->store_result();
	if($result->num_rows==0){
		$json="{\"SUCCESS\":\"false\", \"MSG\": \"当前无文章\"}";
		echo $json;
		exit;
	}
	$json=array(
	   "SUCCESS" => true,
	   "DATA" => array()
	);
	class tmp{
		var $MAINTITLE;
		var $ID;
		var $ABSTRACT;
		var $UPDATA;
	};
	while($result->fetch()){
		$obj=new tmp();
		$obj->MAINTITLE=htmlspecialchars($maintitle);
		$obj->ID=$id;
		$obj->ABSTRACT=htmlspecialchars($abstract);
		$obj->UPDATA=htmlspecialchars(substr($update1,0,10));
		array_push($json['DATA'],$obj);
		$i++;
	}
	
	echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);

?>