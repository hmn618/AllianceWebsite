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

	$id=$_POST['id'];
	$maintitle=$author=$content=$link=$updata="";
	$type=0;
	$sql="select maintitle, author, content, link, updata, type from article where id=?";
	$result=$mysqli->prepare($sql);
	$result->bind_param("i",$id);
	$result->execute();
	$result->bind_result($maintitle,$author,$content,$link,$updata,$type);
	$result->store_result();
	
	if($result->num_rows==0){
		$json="{\"SUCCESS\":\"false\", \"MSG\": \"当前文章不存在\"}";
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
		var $CONTENT;
		var $LINK1;
		var $UPDATA;
		var $TYPE;
	};
	
	While($result->fetch()){
		$obj=new tmp();
		$obj->MAINTITLE=$maintitle;
		$obj->AUTHOR=$author;
		$obj->CONTENT=$content;
		$obj->LINK1=$link;
		$obj->UPDATA=htmlspecialchars(substr($updata,0,10));
		$obj->TYPE=$type;
		array_push($json['DATA'],$obj);
		
	}
   echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
?>