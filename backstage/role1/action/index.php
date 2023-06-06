<?php
/*功能：后台index页面的信息打入
 *输入：
 *输出：账号的email、pwd、name、nickname、shenhe字段信息
 *作者：赵文骏
 *开发时间：2016.7.15
 *最后修改时间：2016.7.15
*/
	//设置中文字符编码
	header("Content-type: text/html; charset=utf-8");
    //包含文件包和安全包
    require_once("../../serv/conn/conn.php");
    require_once("../../safe/safe.php");
    $name = $_SESSION['user'];
    $sql = "SELECT email, nickname FROM user WHERE name = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s",$name);
    $stmt->bind_result($email,$nickname);
    $stmt->execute();
    $stmt->store_result();
    $stmt->fetch();
	$stmt->close();
	 
	//确认是否为第一次登录，如果是第一次登陆，在个人用户表中插入一条记录
	$sql = "SELECT shenhe FROM individual_member_basic WHERE band = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s",$name);
	$stmt->bind_result($shenhe);
    $stmt->execute();
    $stmt->store_result();
	$used = $stmt->num_rows;
    if(!$used)
	{
		$sql = "INSERT INTO individual_member_basic (band,shenhe) VALUES(?,0)";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("s",$name);
		$stmt->execute();
		$stmt->close();
		
		//个人研究表插入记录
		$sql = "INSERT INTO individual_member_stdy (band) VALUES(?)";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("s",$name);
		$stmt->execute();
		$stmt->close();
		
		//个人评审表插入记录
		$sql = "INSERT INTO individual_member_evl (band) VALUES(?)";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("s",$name);
		$stmt->execute();
		$stmt->close();
		
		//个人工作表插入记录
		$sql = "INSERT INTO individual_member_work (band) VALUES(?)";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("s",$name);
		$stmt->execute();
		$stmt->close();
		$shenhe=0;
	}	
	else
	{
		$stmt->fetch();
		$stmt->close();
	}
?>