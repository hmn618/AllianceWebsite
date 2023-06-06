<?php
/*功能：检查用户是否登录
 *输入：
 *输出：
 *作者：赵文骏
 *开发时间：2016.7.15
 *最后修改时间：2016.7.15
*/
	session_start();
	if (!isset($_SESSION['user'])) {
		$url = "../../login/login.html";
		header("Location:".$url);
	}
	$user=$_SESSION['user']
?>