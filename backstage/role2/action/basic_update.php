<?php
/*功能：读取企业基本信息更新数据库
 *输入：ajax表单
 *输出：json
 *作者：刘庆、
 *开发时间：2016.7.14
 *最后修改时间：2016.7.14
*/

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

session_start();
$band = $_SESSION['user'];

$name = $_POST['name'];
$type = $_POST['type'];
$addr = $_POST['addr'];
$postcode = $_POST['postcode'];
$homepage = $_POST['homepage'];
$tel = $_POST['tel'];
$fax = $_POST['fax'];
$status = $_POST['status'];

$field = $_POST['field'];
$logo  = $_POST['photodir'];	// logo?
$faren_name = $_POST['faren_name'];
$faren_tel = $_POST['faren_tel'];
$faren_mail = $_POST['faren_mail'];
$fuzeren_name = $_POST['fuzeren_name'];
$fuzeren_tel = $_POST['fuzeren_tel'];
$fuzeren_mail = $_POST['fuzeren_mail'];

$contactor1_name = $_POST['contactor1_name'];
$contactor1_tel = $_POST['contactor1_tel'];
$contactor1_mail = $_POST['contactor1_mail'];
$contactor2_name = $_POST['contactor2_name'];
$contactor2_tel = $_POST['contactor2_tel'];
$contactor2_mail = $_POST['contactor2_mail'];
$contactor3_name = $_POST['contactor3_name'];
$contactor3_tel = $_POST['contactor3_tel'];
$contactor3_mail = $_POST['contactor3_mail'];
$introduction = $_POST['introduction'];
//$contactor_flag = $_POST['contactor_flag'];  // 到底要不要？

$result_name = $name;
$_SESSION['name'] = $result_name;
// 更新数据库
$sql = "UPDATE corporate_member SET name=?,type=?,addr=?,postcode=?,homepage=?,tel=?,fax=?,status=?,field=?,logo=?,faren_name=?,faren_tel=?,faren_mail=?,fuzeren_name=?,fuzeren_tel=?,fuzeren_mail=?,contactor1_name=?,contactor1_tel=?,contactor1_mail=?,contactor2_name=?,contactor2_tel=?,contactor2_mail=?,contactor3_name=?,contactor3_tel=?,contactor3_mail=?,introduction=?,shenhe=if(ROUND(shenhe%100/10)=0,shenhe+10,shenhe) WHERE band=?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("sssssssssssssssssssssssssss", $name, $type, $addr, $postcode, $homepage, $tel, $fax, $status, $field, $logo, $faren_name, $faren_tel, $faren_mail, $fuzeren_name, $fuzeren_tel, $fuzeren_mail, $contactor1_name, $contactor1_tel, $contactor1_mail, $contactor2_name, $contactor2_tel, $contactor2_mail, $contactor3_name, $contactor3_tel, $contactor3_mail, $introduction, $band);
$stmt->execute();
$stmt->close();
$mysqli->close();

$json = "{\"SUCCESS\":\"true\", \"MSG\": \"更新成功\"}";
echo $json;
