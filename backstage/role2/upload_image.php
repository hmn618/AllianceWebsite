<?php
/**功能：上传图片
 * 作者：刘庆
 * 开发时间：2016.7.19
 * 最后修改时间：2016.7.19
 */
//设置中文字符编码
header("Content-type: text/html; charset=utf-8");
//包含文件包和安全包
require_once("../../serv/conn/conn.php");
require_once("../../safe/safe.php");

	//包含一个文件上传类《细说PHP》中的上传类
	include "../fileupload.class.php";

	$up = new fileupload;
	//设置属性(上传的位置， 大小， 类型， 名是是否要随机生成)
	$up -> set("path", "../../upload/img");
	$up -> set("maxsize", 2000000);
	$up -> set("allowtype", array("gif", "png", "jpg","jpeg"));
	$up -> set("israndname", true);

	//使用对象中的upload方法， 就可以上传文件， 方法需要传一个上传表单的名子 pic, 如果成功返回true, 失败返回false
	if($up -> upload("upload_image")) {
	    $filename = $up -> getFileName();
		$filename = "upload/img/".$filename;
        // 将 logo 路径保存到数据库
        session_start();
        $band     = $_SESSION['user'];
        $sql = "UPDATE corporate_member SET logo = ? WHERE band=?";
        $stmt = $mysqli->prepare($sql);
        $stmt->bind_param("ss",$filename, $band);
        $stmt->execute();
        $stmt->close();
        $mysqli->close();

        // SESSION中放入logo的地址
        $_SESSION['logo_filename']=$filename;
        header("Location: basic.php");
        //确保重定向后，后续代码不会被执行
        exit;
	} else {
        	echo "<script>alert(\"logo 上传失败！\");</script>";
	}
