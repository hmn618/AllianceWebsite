<?php
/*功能：把封面图片存储到指定的文件夹
 *输入：封面图片
 *输出：封面图片的地址
 *作者：张城城
 *开发时间：2016.7.15
 *最后修改时间：2016.7.15
*/
    header('Content-type: text/json; charset=utf-8');
/*
    session_start();
    if(!isset($_SESSION['ACCOUNT'])) {
        $json = "{\"SUCCESS\":false, \"MSG\": \"未登录\"}";
        echo $json;
        exit;
    }
*/

$action = $_GET['act'];
if($action=='delimg'){ //删除图片
    $filename = $_POST['imagename'];
    if(!empty($filename)){
        unlink('files/'.$filename);
        echo '1';
    }else{
        echo '删除失败.';
    }
}else{ //上传图片
    $picname = $_FILES['photoUpload']['name'];
    $picsize = $_FILES['photoUpload']['size'];
	$pic_path;
	$pic_path2;
    if ($picname != "") {
        if ($picsize > 1024000) { //限制上传大小
            echo '图片大小不能超过1M';
            exit;
        }
        $type = strrchr($picname, '.'); //限制上传格式
        if ($type != ".gif" && $type != ".jpg" && $type != ".png" && $type != ".jpeg") {
        	echo $type;
            echo '图片格式不对！';
            exit;
        }
        if(!is_dir("../../../uploadImage")){     // is_dir()函数判断指定的文件夹是否存在
            mkdir("../../../uploadImage");         // mkdir()函数创建文件夹
        }
        $rand = rand(100, 999);
        $pics = date("YmdHis") . $rand . $type; //命名图片名称
        //上传路径
        $pic_path = stripslashes("../../../upload/img/". $pics);
        $pic_path2 = stripslashes("upload/img/". $pics);
        move_uploaded_file($_FILES['photoUpload']['tmp_name'], $pic_path);
    }
    $size = round($picsize/1024,2); //转换成kb
    $arr = array(
        'name'=>$pic_path2,
        'pic'=>$pics,
        'size'=>$size
    );
    echo json_encode($arr); //输出json数据
}
?>
