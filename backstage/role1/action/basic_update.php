<?php
/*功能：读取用户基本信息存入数据库
 *输入：ajax表单
 *输出：json
 *作者：赵文骏
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
	// 基本信息
	$name 	  = $_POST['name'];
	$sex 	  = $_POST['sex'];
	$birthday = $_POST['birthday'];
	$cardtype = $_POST['cardtype'];
	$cardnum  = $_POST['cardnum'];
	$nation	  = $_POST['nation'];
	$party	  = $_POST['party'];
	$photodir = $_POST['photodir'];
	// 工作经历
	$workunit = $_POST['workunit'];
	$subunit  = $_POST['subunit'];
	$unittype = $_POST['unittype'];
	$unitlocation = $_POST['unitlocation'];
	$profession   = $_POST['profession'];
	$title 		  = $_POST['title'];
	$profession_state = $_POST['profession_state'];
	$workexperience   = $_POST['workexperience'];
	
	// 学习经历
	$degree   = $_POST['degree'];
	$school   = $_POST['school'];
	$graduate = $_POST['graduate'];
	$major	  = $_POST['major'];
	$field    = $_POST['field'];
	$worktime = $_POST['worktime'];
	$paper 	  = $_POST['paper'];
	$studyexperience = $_POST['studyexperience'];
	
	// 联系方式
	$mobile = $_POST['mobile'];
	$email  = $_POST['email'];
	$addr   = $_POST['addr'];
	$post   = $_POST['post'];
	$tel    = $_POST['tel'];
	$fax    = $_POST['fax'];
	$hometel= $_POST['hometel'];
	$homeaddr = $_POST['homeaddr'];
	$homepost = $_POST['homepost'];
	
	// 账户信息
	$banknum  = $_POST['banknum'];
	$bank     = $_POST['bank'];
	
	// 其他联系人
	$contacter = $_POST['contacter'];
	$contactertel = $_POST['contactertel'];
	

		
		//插入新记录
		$sql = "UPDATE individual_member_basic SET name=?,sex=?,birthday=?,cardnum=?,cardtype=?,nation=?,party=?,photodir=?,workunit=?,subunit=?,unittype=?,unitlocation=?,profession=?,title=?,profession_state=?,workexperience=?,degree=?,school=?,graduate=?,major=?,field=?,worktime=?,paper=?,studyexperience=?,mobile=?,email=?,addr=?,post=?,tel=?,fax=?,homeaddr=?,homepost=?,hometel=?,banknum=?,bank=?,contacter=?,contactertel=?,shenhe=if(ROUND(shenhe%100/10)=0,shenhe+10,shenhe) WHERE band=?";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("ssssssssssssssssssssssisssssssssssssss",$name,$sex,$birthday,$cardnum,$cardtype,$nation,$party,$photodir,$workunit,$subunit,$unittype,$unitlocation,$profession,$title,$profession_state,$workexperience,$degree,$school,$graduate,$major,$field,$worktime,$paper,$studyexperience,$mobile,$email,$addr,$post,$tel,$fax,$homeaddr,$homepost,$hometel,$banknum,$bank,$contacter,$contactertel,$band);
		$stmt->execute();
		//$stmt->close();	
		
		/*	
		$sql = "UPDATE individual_member_basic SET shenhe=if(ROUND(shenhe%100/10)=0,shenhe+10,shenhe) WHERE band=？";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("s",$band);
		$stmt->execute();		
		$stmt->close();
	   */
	$json = "{\"SUCCESS\":\"true\", \"MSG\": \"成功更新\"}";
	echo $json;

	$mysqli->close();
	exit;
?>