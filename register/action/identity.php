<?php
/*功能：更新数据库中的用户身份字段
 *输入：ajax表单
 *输出：sql语句
 *作者：赵文骏
 *开发时间：2016.7.5
 *最后修改时间：2016.7.5
*/

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../serv/conn/conn.php");
require_once("../../safe/safe.php");

//读取ajax表单内容
	$identity = $_POST['identity'];
	session_start();
	$_SESSION['user_status']=$identity;
	$name=$_SESSION['user'];
	
//查询账号是否被使用	
	$sql = "UPDATE user SET identity = ? WHERE name = ?";
	$stmt = $mysqli->prepare($sql);
	$stmt->bind_param("is",$identity,$name);
	
	$stmt->execute();
	$stmt->store_result();
	
	$json =	"{\"SUCCESS\":\"true\", \"MSG\":\"成功\"}";
	echo $json;
	
	$_SESSION['reged']=1;
	$stmt->close();	
	$mysqli->close();
	exit;
?>