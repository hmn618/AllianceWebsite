<?php
/*功能：从数据库读取发布作者
 *输入：ajax表单
 *输出：json
 *作者：张城城
 *开发时间：2016.7.29
 *最后修改时间：2016.7.29
*/

//设置中文字符编码
header("Content-type: text/json; charset=utf-8");
//包含文件包和安全包
require_once("../../../serv/conn/conn.php");
require_once("../../../safe/safe.php");

   session_start();
   $band = $_SESSION['user'];
  // echo $band;
  // exit;
$sql="SELECT name FROM corporate_member WHERE band = ?";
$result=$mysqli->prepare($sql);
$result->bind_param("s",$band);
$result->bind_result($name);
$result->execute();
$result->store_result();
$isused=$result->num_rows;


if(!$isused){
	$json = "{\"SUCCESS\":\"false\", \"MSG\": \"作者错误\"}";
    echo $json;
    exit;
}
$json=array(
       'SUCCESS'=>true,
	   'DATA'=>array()
);
class tmp{
	var $NAME;
}
while($result->fetch()){
	  $obj=new tmp();
	  $obj->NAME=$name;
	  array_push($json['DATA'],$obj);
}

$result->close();
$mysqli->close();
echo json_encode($json, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

/*






class tmp{
	var NAME;
}
while($result->fetch()){
	  $obj=new tmp();
	  $obj->NAME=$name;
	  array_push($json['DATA'],$obj);
}
$mysqli->close();
echo json_encode($json, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

*/
?>