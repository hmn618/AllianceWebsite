<?php
/*
功能：把封面图片存储到指定的文件夹
 *输入：封面图片
 *输出：封面图片的地址
 *作者：张城城、刘庆
 *开发时间：2016.7.15
 *最后修改时间：2016.7.15

*/
header('Content-type: text/json; charset=utf-8');
//这个是用于向数据库添加一篇新的文章的时候用的action
//参数如下:
//TITLE：标题，SUBTITLE：副标题，AUTHOR：作者，COVERPIC：封面的图片地址
//SUMMARY：摘要，LABEL：标签，CONTENT：内容及正文，LINK：原文链接, TYPE: 图文还是音视频
//如果添加成功，返回的SUCCESS为true，否则为false
//MSG为携带的信息
//采用POST方式发送数据
/*
    session_start();
    if(!isset($_SESSION['ACCOUNT'])) {
        $json = "{\"SUCCESS\":false, \"MSG\": \"未登录\"}";
        echo $json;
        exit;
    }
*/
session_start();
//$AUTHOR = $_SESSION["user"];
$TYPE = null;
if (isset($_POST['type'])) {
    $TYPE = $_POST['type'];

}
$query_id = null;
if (isset($_POST['query_id'])) {
    $query_id = $_POST["query_id"];
}
if (isset($_POST['TITLE']) && isset($_POST['SUBTITLE']) && isset($_POST['AUTHOR'])
    && isset($_POST['COVERPIC']) && isset($_POST['SUMMARY'])
    && isset($_POST['CONTENT']) && isset($_POST['LINK'])
) {
    $TITLE = $_POST['TITLE'];
    $SUBTITLE = $_POST['SUBTITLE'];
    $COVERPIC = $_POST['COVERPIC'];
	$AUTHOR=$_POST['AUTHOR'];
    $SUMMARY = $_POST['SUMMARY'];
    //   $LABEL = $_POST['LABEL'];
    $CONTENT = $_POST['CONTENT'];
    $LINK = $_POST['LINK'];
    $TYPE = $_POST['type'];
    //session_start();
    //$GROUPS = $_SESSION['GROUPS'];
} else {
    $json = "{\"SUCCESS\":false, \"MSG\":\"参数错误\"}";
    echo $json;
    exit;
}

require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

if (!$mysqli->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $mysqli->error);
    exit;
}
// 如果 query_id 不为空，则表示 update 操作，否则为 insert 操作
if ($query_id != null) {
    $sql = "UPDATE article SET MAINTITLE=?, SUBTITLE=?, AUTHOR=?, COVERPIC=?, ABSTRACT=?,
                                        CONTENT=?, LINK=?, UPDATA=NOW(), TYPE=? WHERE ID = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("sssssssii", $TITLE, $SUBTITLE, $AUTHOR, $COVERPIC, $SUMMARY, $CONTENT, $LINK, $TYPE, $query_id);
    $stmt->execute();
    $json = "{\"SUCCESS\":true, \"MSG\":\"更新成功！\"}";
} else {
	$sql = "SELECT 1 FROM article WHERE MAINTITLE=?";
	$stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s",$TITLE);
	$stmt->execute();
	$stmt->store_result();
	$isused = $stmt->num_rows; 
	if(!$isused){
	    $sql = "INSERT INTO article (MAINTITLE, SUBTITLE, AUTHOR, COVERPIC, ABSTRACT,
	                                    CONTENT, LINK, CREATIME, UPDATA, TYPE)
	                        VALUES(?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)";
	    $stmt = $mysqli->prepare($sql);
	    $stmt->bind_param("sssssssi", $TITLE, $SUBTITLE, $AUTHOR, $COVERPIC, $SUMMARY, $CONTENT, $LINK, $TYPE);
	    $stmt->execute();
	    $json = "{\"SUCCESS\":true, \"MSG\":\"插入成功！\"}";
	}
	else
		$json = "{\"SUCCESS\":false, \"MSG\":\"文章已存在！\"}";	
}
echo $json;
$stmt->close();
$mysqli->close();
exit;
