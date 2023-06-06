<?php
/**
  *功能：从数据库中读取通知公告。
  *输出：公告信息。
  *作者：张城城
  *开发时间：2016.7.7
*/
//设置中文字符编码
header('Content-type: text/json; charset=utf-8');
//包含文件和安全文件
require_once("./serv/conn/conn.php");
require_once("./safe/safe.php");
/*
$json='{"SUCCESS":"false", "MSG": "当前无文章2"}';
		echo $json;
*/

//定义变量
	$maintitle=$author=$creatime=$update1=$abstract=$coverpic="";
	$id=0;
	$i=0;
	$type=$_POST['type'];
	$size=$_POST['size'];
//查询数据库中的新闻
	$sql="SELECT maintitle,author,creatime,id,coverpic,abstract,updata from article where type=? and isdelete=0 and ispost=1 order by creatime DESC";
	$result=$mysqli->prepare($sql);
	$result->bind_param("i",$type);
	$result->execute();
	$result->bind_result($maintitle,$author,$creatime,$id,$coverpic,$abstract,$update1);
	
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
		var $AUTHOR;
		var $MONTH;
		var $DAY;
		var $ID;
		var $ABSTRACT;
		var $UPDATA;
		var $COVERPIC;
	};
	while($result->fetch()&&$i<$size){
		$obj=new tmp();
		$obj->MAINTITLE=htmlspecialchars($maintitle);
		$obj->AUTHOR=htmlspecialchars($author);
		$obj->MONTH=htmlspecialchars(substr($creatime,5,2));
		$obj->DAY=htmlspecialchars(substr($creatime,8,2));
		$obj->ID=$id;
		$obj->ABSTRACT=htmlspecialchars($abstract);
		$obj->UPDATA=htmlspecialchars(substr($update1,0,10));
		$obj->COVERPIC=htmlspecialchars($coverpic);
		array_push($json['DATA'],$obj);
		$i++;
	}
	
	echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
?>