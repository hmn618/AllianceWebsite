<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2016/8/1
 * Time: 11:45
 */
//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../serv/conn/conn.php");
require_once("../../safe/safe.php");

// user 表
// 获取账号信息
$username = $_POST['username'];
$nickname = $_POST['nickname'];
$email = $_POST['email'];
$password = $_POST['password'];

// individual_member_basic 表
// 基本信息
$name = $_POST['name'];
$sex = $_POST['sex'];
$birthday = $_POST['birthday'];
$cardtype = $_POST['cardtype'];
$cardnum = $_POST['cardnum'];
$photodir = $_POST['photodir'];

// 工作经历
$title = $_POST['title'];
$workunit = $_POST['workunit'];
$unittype = $_POST['unittype'];
$profession = $_POST['profession'];

// 学习经历
$degree = $_POST['degree'];
$school = $_POST['school'];

// 联系方式
$mobile = $_POST['mobile'];
$addr = $_POST['addr'];
$post = $_POST['post'];

// individual_member_work（个人会员工作信息表）
// 研究/工作领域
$searchcontent = $_POST['searchcontent'];

// 专业特长/主要业绩
$contribute = $_POST['contribute'];

// individual_member_stdy（个人会员科研信息表）
// 社会/学术兼职
$social_academic_job = $_POST['social_academic_job'];

// 去重操作
$sql = "SELECT id FROM user WHERE name=?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $username);
$id = "";
$stmt->bind_result($id);
$stmt->execute();
$stmt->store_result();
$used = $stmt->num_rows;
if($used) {
    $json = "{\"SUCCESS\":\"false\", \"MSG\": \"用户名已经存在！\"}";
    echo $json;
    exit;
}

// 插入账号信息
$sql = "INSERT INTO user(name, nickname, pwd, email, identity) VALUES(?,?,?,?, 11)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ssss", $username, $nickname, $password, $email);
$stmt->execute();

// 绑定账号信息到个人会员
$sql = "INSERT INTO individual_member_basic(band, name, sex, birthday, cardtype, cardnum, photodir, title, workunit, unittype, profession, degree, school, mobile, addr, post) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ssssssssssssssss", $username, $name, $sex, $birthday, $cardtype, $cardnum, $photodir, $title, $workunit, $unittype, $profession, $degree, $school, $mobile, $addr, $post);
$stmt->execute();

// 插入数据到 individual_member_work（个人会员工作信息表）
$sql = "INSERT INTO individual_member_work(band, searchcontent, contribute) VALUES(?,?,?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("sss", $username, $searchcontent, $contribute);
$stmt->execute();

// 插入数据到 individual_member_stdy（个人会员科研信息表）
$sql = "INSERT INTO individual_member_stdy(band, social_academic_job) VALUES(?,?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ss", $username, $social_academic_job);
$stmt->execute();

$json = "{\"SUCCESS\":\"true\", \"MSG\": \"信息录入成功，等待审核！\"}";
echo $json;
