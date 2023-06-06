<?php
/*功能：检查用户登出
 *输入：
 *输出：
 *作者：赵文骏
 *开发时间：2016.7.15
 *最后修改时间：2016.7.15
*/
    session_start();
	session_destroy();
	$url = "../index.html";
	header("Location:".$url);
?>