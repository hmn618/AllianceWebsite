<?php
/*
 *功能：企业会员查询发布的新闻信息
 *输入：文章类型
 *输出：文章json信息
 *作者：赵文骏、刘庆
 *开发时间：2016.7.20
 *最后修改时间：2016.7.20
*/
header('Content-type: text/json; charset=utf-8');
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");
session_start();
$type = $_POST['type'];
 $band= $_SESSION['user'];
$sql="SELECT name FROM corporate_member WHERE band = ?";
$result=$mysqli->prepare($sql);
$result->bind_param("s",$band);
$result->bind_result($name);
$result->execute();
$result->store_result();
$isused=$result->num_rows;
$result->fetch();
$author=$name;

$i = 0;
$sql = "SELECT id,maintitle,author,creatime,ispost FROM article where type = ? AND author = ? AND isdelete = 0 order by ispost ASC,creatime DESC";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("is", $type, $author);
$stmt->execute();
$stmt->bind_result($id, $maintitle, $author, $creatime, $ispost);

$stmt->store_result();
if ($stmt->num_rows == 0) {
    $json = "{\"SUCCESS\":\"false\", \"MSG\": \"当前无文章！\"}";
    echo $json;
    exit;
}
$json = array(
    "SUCCESS" => true,
    "DATA" => array()
);

class tmp
{
    var $ID;
    var $MAINTITLE;
    var $AUTHOR;
    var $CREATIME;
    var $ISPOST;
}

;
while ($stmt->fetch()) {
    $obj = new tmp();
    $obj->ID = $id;
    $obj->MAINTITLE = htmlspecialchars($maintitle);
    $obj->AUTHOR = $author;
    $obj->CREATIME = htmlspecialchars(substr($creatime, 0, 10));
    $obj->ISPOST = $ispost;
    array_push($json['DATA'], $obj);
}
echo json_encode($json, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
