<?php
/*功能：检查是否注册结束，断网等情况的安全措施
 *输入：
 *输出：
 *作者：赵文骏
 *开发时间：2016.7.5
 *最后修改时间：2016.7.5
*/

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
	session_start();
	if($_SESSION['reged']){	
		$json =	"{\"reged\":1}";
		echo $json;
	}
	else{
		$json =	"{\"reged\":0}";
		echo $json;
	}
?>