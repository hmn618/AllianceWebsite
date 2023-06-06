<?php
	/*功能：将已填写过的个人基本信息读到前端
 *输入：ajax表单
 *输出：json
 *作者：赵文骏
 *开发时间：2016.7.19
 *最后修改时间：2016.7.19
*/

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

session_start();
$user = $_SESSION['user'];		
//查找信息
$sql = " SELECT name,sex,tel,cardnum,email FROM system_manager WHERE band = ?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s",$user);
$stmt->bind_result($name,$sex,$tel,$cardnum,$email);
$stmt->execute();
$stmt->store_result();
$stmt->fetch();
$json = array('SUCCESS'=>true,'name'=>$name,'sex'=>$sex,'tel'=>$tel,'idcard'=>$cardnum,'email'=>$email);
echo json_encode($json, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
$stmt->close();	
?>
