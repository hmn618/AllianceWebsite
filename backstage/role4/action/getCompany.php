<?php
/*
 *功能：查询专家的详细信息并列表
 *输入：文章类型
 *输出：
 *作者：赵文骏
 *开发时间：2016.7.18
 *最后修改时间：2016.7.18
*/
header('Content-type: text/json; charset=utf-8');
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

$company_name = $_POST["company_name"];
$sql  = "SELECT name,addr, type, homepage, status, field FROM corporate_member where name=?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $company_name);
$stmt->bind_result($name,$addr, $type,$homepage, $status, $field);
$stmt->execute();
$stmt->store_result();
$stmt->fetch();
$stmt->close();

$json = array('SUCCESS'=>true,'name'=>$name,'addr'=>$addr,'type'=>$type,'homepage'=>$homepage,'status'=>$status,'field'=>$field);
echo json_encode($json, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
