<?php
/*功能：读取企业基本信息更新数据库
 *输入：ajax表单
 *输出：json
 *作者：刘庆、
 *开发时间：2016.7.14
 *最后修改时间：2016.8.1
*/

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");
session_start();
$band = $_SESSION['user'];
$sql = "SELECT name,type,addr,postcode,homepage,tel,fax,status,field,logo,faren_name,faren_tel,faren_mail,fuzeren_name,fuzeren_tel,fuzeren_mail,contactor1_name,contactor1_tel,contactor1_mail,contactor2_name,contactor2_tel,contactor2_mail,contactor3_name,contactor3_tel,contactor3_mail,introduction FROM corporate_member WHERE band = ?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $band);
$stmt->bind_result($name, $type, $addr, $postcode, $homepage, $tel, $fax, $status, $field, $logo, $faren_name, $faren_tel, $faren_mail, $fuzeren_name, $fuzeren_tel, $fuzeren_mail, $contactor1_name, $contactor1_tel, $contactor1_mail, $contactor2_name, $contactor2_tel, $contactor2_mail, $contactor3_name, $contactor3_tel, $contactor3_mail, $introduction);
$stmt->execute();
$stmt->store_result();
$stmt->fetch();
$stmt->close();

$json = array('SUCCESS'=>true,'name'=>$name,'type'=>$type,'addr'=>$addr,'postcode'=>$postcode,'homepage'=>$homepage,'tel'=>$tel,'fax'=>$fax,'status'=>$status,'field'=>$field,'logo'=>$logo,'faren_name'=>$faren_name,'faren_tel'=>$faren_tel,'faren_mail'=>$faren_mail,'fuzeren_name'=>$fuzeren_name,'fuzeren_tel'=>$fuzeren_tel,'fuzeren_mail'=>$fuzeren_mail,'contactor1_name'=>$contactor1_name,'contactor1_tel'=>$contactor1_tel,'contactor1_mail'=>$contactor1_mail,'contactor2_name'=>$contactor2_name,'contactor2_tel'=>$contactor2_tel,'contactor2_mail'=>$contactor2_mail,'contactor3_name'=>$contactor3_name,'contactor3_tel'=>$contactor3_tel,'contactor3_mail'=>$contactor3_mail,'introduction'=>$introduction);
echo json_encode($json, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

?>