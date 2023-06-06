<?php
/*功能：读取企业基本信息存入数据库
 *输入：ajax表单
 *输出：json
 *作者：刘庆
 *开发时间：2016.7.14
 *最后修改时间：2016.7.14
*/

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");
    session_start();
	$band     = $_SESSION['user'];

	$represent1_name   = $_POST['represent1_name'];
	$represent1_pos    = $_POST['represent1_pos'];
	$represent1_tel    = $_POST['represent1_tel'];
	$represent1_fax    = $_POST['represent1_fax'];
	$represent1_flied  = $_POST['represent1_flied'];
	$represent1_mail   = $_POST['represent1_mail'];
	$represent1_brief  = $_POST['represent1_brief'];

    $represent2_name   = $_POST['represent2_name'];
    $represent2_pos    = $_POST['represent2_pos'];
    $represent2_tel    = $_POST['represent2_tel'];
    $represent2_fax    = $_POST['represent2_fax'];
    $represent2_flied  = $_POST['represent2_flied'];
    $represent2_mail   = $_POST['represent2_mail'];
    $represent2_brief  = $_POST['represent2_brief'];

	// 插入新记录
	$sql = "UPDATE corporate_member SET represent1_name=?,represent1_pos=?,represent1_tel=?,represent1_fax=?,represent1_flied=?,represent1_mail=?,represent1_brief=?,represent2_name=?,represent2_pos=?,represent2_tel=?,represent2_fax=?,represent2_flied=?,represent2_mail=?,represent2_brief=? WHERE band = ?";
	$stmt = $mysqli->prepare($sql);
	$stmt->bind_param("sssssssssssssss",$represent1_name,$represent1_pos,$represent1_tel,$represent1_fax,$represent1_flied,$represent1_mail,$represent1_brief,$represent2_name,$represent2_pos,$represent2_tel,$represent2_fax,$represent2_flied,$represent2_mail,$represent2_brief,$band);
	$stmt->execute();
	$stmt->close();

	$json = "{\"SUCCESS\":\"true\", \"MSG\": \"成功添加\"}";
	echo $json;

	$mysqli->close();
	exit;