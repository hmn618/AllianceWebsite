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



session_start();
$name=$_SESSION['user'];
$identity=$_SESSION['user_status'];
		
$json = "{\"SUCCESS\":\"true\",\"NAME\":\"".$name."\",\"ID\":\"".$identity."\"}";
echo $json;		
		

	exit;
?>