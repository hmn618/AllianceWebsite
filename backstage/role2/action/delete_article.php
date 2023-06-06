<?php
/*功能：删除和发布文章
 *输入：ajax表单
 *输出：json
 *作者：赵文骏、刘庆
 *开发时间：2016.7.14
 *最后修改时间：2016.7.14
*/

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

// 基本信息
$id = $_POST['id'];
echo $id;
$sql = "UPDATE article SET isdelete=1 WHERE id=?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$stmt->close();

$json = "{\"SUCCESS\":\"true\", \"MSG\": \"删除成功！\"}";
echo $json;
$mysqli->close();
exit;
