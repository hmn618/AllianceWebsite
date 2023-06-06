<?php
/*功能：登录数据库
 *输入：ajax表单
 *输出：sql语句
 *作者：赵文骏
 *开发时间：2016.7.5
 *最后修改时间：2016.7.5
*/

//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../serv/conn/conn.php");
require_once("../safe/safe.php");


	//读取ajax表单内容
	$name = $_POST['name'];
	$pwd = $_POST['pwd'];

	//查询账号是否存在	
	$sql = "SELECT identity ,pwd FROM user WHERE name = ?";
	$stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s",$name);
	$stmt->bind_result($identity,$oripassword);
	
	$stmt->execute();
	$stmt->store_result();

	if($stmt->num_rows == 0) {
        	$json = "{\"SUCCESS\":\"false\", \"MSG\": \"账户不存在\"}";
        	echo $json;
        	exit;
    	}

	while($stmt->fetch()) {
        if($oripassword != $pwd) {
            $json = "{\"SUCCESS\":\"false\", \"MSG\": \"密码错误\"}";
            echo $json;
            exit;
        }
        else {
			session_start();
			$_SESSION['user']=$name;
			$_SESSION['identity']=$identity;           
            $json = "{\"SUCCESS\":\"true\", \"MSG\": \"登录成功\",\"ID\": \"".$identity."\"}";
            echo $json;
        }
    }
	
    $stmt->close();	
	$mysqli->close();		
	exit;

?>
