<?php
/*
 *功能：查询文章的详细信息并列表
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
$id = $_POST['id'];
$sql  = "SELECT maintitle,subtitle,author,coverpic,abstract,content,link FROM article where id = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->bind_result($maintitle, $subtitle, $author, $coverpic, $abstract, $content, $link);
$stmt->execute();
$stmt->store_result();

class tmp {
        var $MAINTITLE;
        var $SUBTITLE;
        var $AUTHOR;
        var $COVERPIC;
        var $ABSTRACT;
        var $CONTENT;
        var $LINK;
    };

    $json = array(
			'SUCCESS' => true,
			'DATA' => new tmp()
		);


    while($stmt->fetch()) {
        $obj = new tmp();
        $obj->MAINTITLE = htmlspecialchars($maintitle);
        $obj->SUBTITLE = htmlspecialchars($subtitle);
        $obj->AUTHOR = htmlspecialchars($author);
        $obj->COVERPIC = htmlspecialchars($coverpic);
        $obj->ABSTRACT = htmlspecialchars($abstract);
        $obj->CONTENT = $content;
        $obj->LINK = htmlspecialchars($link);

    }

    $json['DATA'] = $obj;
    echo json_encode($json, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);



