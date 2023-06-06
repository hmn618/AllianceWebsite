<?php
/*功能：读取用户账户信息存入数据库
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
	$name = $_POST['name'];
	$pwd = $_POST['pwd'];
	$nickname = $_POST['nickname'];	
	$email = $_POST['email'];
	

//查询账号是否被使用	
	$sql = "SELECT 1 FROM user WHERE name = ?";
	$stmt = $mysqli->prepare($sql);
	$stmt->bind_param("s",$name);
	
	$stmt->execute();
	$stmt->store_result();
	$isused = $stmt->num_rows;
    $stmt->close();	
	
	if($isused)
	{
		$json =	"{\"SUCCESS\":\"false\", \"MSG\":\"用户名已被使用\"}";
		echo $json;
	}
	else
	{
		//插入新条目
		$sql = "INSERT INTO user (name,nickname,pwd,email) VALUES(?,?,?,?)";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("ssss",$name,$nickname,$pwd,$email);
		$stmt->execute();
		$stmt->close();	
		
		$json = "{\"SUCCESS\":\"true\", \"MSG\": \"成功添加\"}";
		echo $json;		
		session_start();
		$_SESSION['user']=$name;
	}
	$mysqli->close();
	exit;
?>