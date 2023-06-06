<?php
/*功能：检查权限
 *输入：
 *输出：
 *作者：赵文骏
 *开发时间：2016.7.20
 *最后修改时间：2016.7.20
*/
	session_start();
	//设置中文字符编码
	header("Content-type: text/html; charset=utf-8");
    //包含文件包和安全包
    require_once("../../../serv/conn/conn.php");
    require_once("../../../safe/safe.php");
    $name = $_SESSION['user'];
	$sql = "SELECT 1 FROM corporate_member WHERE band = ? and shenhe >= 100";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s",$name);
    $stmt->bind_result($shenhe);
    $stmt->execute();
    $stmt->store_result();
	$used = $stmt->num_rows;
	$stmt->close();		
	if(!$used){
		$json =	"{\"SUCCESS\":\"true\", \"MSG\":\"抱歉，您无权访问，请等待审核\"}";
		echo $json;
	}
	else{
		$json =	"{\"SUCCESS\":\"false\"}";
		echo $json;
	}
?>