<?php
/*���ܣ�����Ƿ�ע�����������������İ�ȫ��ʩ
 *���룺
 *�����
 *���ߣ����Ŀ�
 *����ʱ�䣺2016.7.5
 *����޸�ʱ�䣺2016.7.5
*/

//���������ַ�����
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