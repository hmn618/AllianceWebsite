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

$professor_name = $_POST["professor_name"];
$sql  = "SELECT name,photodir, sex,birthday, title, school, degree, mobile, email, cardnum, workunit, unittype, profession FROM individual_member_basic where name=?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $professor_name);
$stmt->bind_result($name,$photodir, $sex,$birthday, $title, $school, $degree, $mobile, $email, $cardnum, $workunit, $unittype, $profession);
$stmt->execute();
$stmt->store_result();
$stmt->fetch();
$stmt->close();

$json = array('SUCCESS'=>true,'name'=>$name,'photodir'=>$photodir,'sex'=>$sex,'birthday'=>$birthday,'title'=>$title,'school'=>$school,'degree'=>$degree,'mobile'=>$mobile,'email'=>$email,'cardnum'=>$cardnum,'workunit'=>$workunit,'unittype'=>$unittype,'profession'=>$profession);
echo json_encode($json, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
