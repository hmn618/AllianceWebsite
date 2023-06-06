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
require_once("../../serv/conn/conn.php");
require_once("../../safe/safe.php");

	
	session_start();
	$band = _SESSION['band'];
	//工作信息
	$workquality = $_POST['workquality'];
	$keyword = $_POST['keyword'];
	$searchcontent = $_POST['searchcontent'];
	$contribute = $_POST['contribute'];
	$honor = $_POST['honor'];
	//国际学科
	$subjectname11 = $_POST['subjectname11'];
	$subjectnum11 = $_POST['subjectnum11'];
	$similar11 = $_POST['similar11'];
	$interest11 = $_POST['interest11'];
	$subjectname12 = $_POST['subjectname12'];
	$subjectnum12 = $_POST['subjectnum12'];
	$similar12 = $_POST['similar12'];
	$interest12 = $_POST['interest12'];
	$subjectname13 = $_POST['subjectname13'];
	$subjectnum13 = $_POST['subjectnum13'];
	$similar13 = $_POST['similar13'];
	$interest13 = $_POST['interest13'];
	$subjectname14 = $_POST['subjectname14'];
	$subjectnum14 = $_POST['subjectnum14'];
	$similar14 = $_POST['similar14'];
	$interest14 = $_POST['interest14'];
	
	//教育学科
	$subjectname21 = $_POST['subjectname21'];
	$subjectnum21 = $_POST['subjectnum21'];
	$similar21 = $_POST['similar21'];
	$interest21 = $_POST['interest21'];
	$subjectname22 = $_POST['subjectname22'];
	$subjectnum22 = $_POST['subjectnum22'];
	$similar22 = $_POST['similar22'];
	$interest22 = $_POST['interest22'];
	$subjectname23 = $_POST['subjectname23'];
	$subjectnum23 = $_POST['subjectnum23'];
	$similar23 = $_POST['similar23'];
	$interest23 = $_POST['interest23'];
	$subjectname24 = $_POST['subjectname24'];
	$subjectnum24 = $_POST['subjectnum24'];
	$similar24 = $_POST['similar24'];
	$interest24 = $_POST['interest24'];
	
	//基金学科
	$subjectname31 = $_POST['field6'];
	$subjectnum31 = $_POST['field7'];
	$similar31 = $_POST['field8'];
	$interest31 = $_POST['field9'];
	$subjectname32 = $_POST['field6'];
	$subjectnum32 = $_POST['field7'];
	$similar32 = $_POST['field8'];
	$interest32 = $_POST['field9'];
	$subjectname33 = $_POST['field6'];
	$subjectnum33 = $_POST['field7'];
	$similar33 = $_POST['field8'];
	$interest33 = $_POST['field9'];
	$subjectname34 = $_POST['field6'];
	$subjectnum34 = $_POST['field7'];
	$similar34 = $_POST['field8'];
	$interest34 = $_POST['field9'];
	
	//行业列表
	$serveFleid11 = $_POST['field9'];
	$serveFleid12 = $_POST['field9'];
	$serveFleid13 = $_POST['field9'];
	$serveFleid14 = $_POST['field9'];
	$serveFleid21 = $_POST['field9'];
	$serveFleid22 = $_POST['field9'];
	$serveFleid23 = $_POST['field9'];
	$serveFleid24 = $_POST['field9'];
	$serveFleid31 = $_POST['field9'];
	$serveFleid32 = $_POST['field9'];
	$serveFleid33 = $_POST['field9'];
	$serveFleid34 = $_POST['field9'];

	//插入新记录
	$sql = "INSERT INTO individual_member_basic (band, workquality, keyword, searchcontent, contribute, honor, subjectname11, subjectnum11, similar11, interest11, subjectname12, subjectnum12, similar12, interest12, subjectname13, subjectnum13, similar13, interest13, subjectname14, subjectnum14, similar14, interest14, subjectname21, subjectnum21, similar21, interest21, subjectname22, subjectnum22, similar22, interest22, subjectname23, subjectnum23, similar23, interest23, subjectname24, subjectnum24, similar24, interest24, subjectname31, subjectnum31, similar31, interest31, subjectname32, subjectnum32, similar32, interest32, subjectname33, subjectnum33, similar33, interest33, subjectname34, subjectnum34, similar34, interest34,serveFleid11,serveFleid12,serveFleid13,serveFleid14,serveFleid21,serveFleid22,serveFleid23,serveFleid24,serveFleid31,serveFleid32,serveFleid33,serveFleid34) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	$stmt = $mysqli->prepare($sql);
	$stmt->bind_param("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", $band, $workquality, $keyword, $searchcontent, $contribute, $honor, $subjectname11, $subjectnum11, $similar11, $interest11, $subjectname12, $subjectnum12, $similar12, $interest12, $subjectname13, $subjectnum13, $similar13, $interest13, $subjectname14, $subjectnum14, $similar14, $interest14, $subjectname21, $subjectnum21, $similar21, $interest21, $subjectname22, $subjectnum22, $similar22, $interest22, $subjectname23, $subjectnum23, $similar23, $interest23, $subjectname24, $subjectnum24, $similar24, $interest24, $subjectname31, $subjectnum31, $similar31, $interest31, $subjectname32, $subjectnum32, $similar32, $interest32, $subjectname33, $subjectnum33, $similar33, $interest33, $subjectname34, $subjectnum34, $similar34, $interest34,serveFleid11,serveFleid12,serveFleid13,serveFleid14,serveFleid21,serveFleid22,serveFleid23,serveFleid24,serveFleid31,serveFleid32,serveFleid33,serveFleid34);
	$stmt->execute();
	$stmt->close();	
	
	$json = "{\"SUCCESS\":\"true\", \"MSG\": \"成功添加\"}";
	echo $json;

	$mysqli->close();
	exit;
?>