<?php
/**功能：读取企业扩展信息
 * 输入：ajax表单
 * 输出：json
 * 作者：刘庆、
 * 开发时间：2016.7.20
 * 最后修改时间：2016.7.20
 */

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");
session_start();
$band = $_SESSION['user'];
$sql = "SELECT represent1_name, represent1_pos, represent1_tel, represent1_fax, represent1_flied, represent1_mail, represent1_brief, represent2_name, represent2_pos, represent2_tel, represent2_fax, represent2_flied, represent2_mail, represent2_brief FROM corporate_member WHERE band = ?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $band);
$stmt->bind_result($represent1_name, $represent1_pos, $represent1_tel, $represent1_fax, $represent1_flied, $represent1_mail, $represent1_brief, $represent2_name, $represent2_pos, $represent2_tel, $represent2_fax, $represent2_flied, $represent2_mail, $represent2_brief);
$stmt->execute();
$stmt->store_result();
$stmt->fetch();
$stmt->close();

$json = array('SUCCESS'=>true,'represent1_name'=>$represent1_name,'represent1_pos'=>$represent1_pos,'represent1_tel'=>$represent1_tel,'represent1_fax'=>$represent1_fax,'represent1_flied'=>$represent1_flied,'represent1_mail'=>$represent1_mail,'represent1_brief'=>$represent1_brief,'represent2_name'=>$represent2_name,'represent2_pos'=>$represent2_pos,'represent2_tel'=>$represent2_tel,'represent2_fax'=>$represent2_fax,'represent2_flied'=>$represent2_flied,'represent2_mail'=>$represent2_mail,'represent2_brief'=>$represent2_brief);
echo json_encode($json, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
