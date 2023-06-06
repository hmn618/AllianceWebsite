<?php
header('Content-type: text/json; charset=utf-8');

//上传图片
$picname = $_FILES['photoUpload']['name'];
$picsize = $_FILES['photoUpload']['size'];
$pic_path = "";
$pic_path2 = "";
if ($picname != "") {
    if ($picsize > 1024000) { //限制上传大小
        $json = "{\"SUCCESS\":\"false\", \"MSG\": \"图片大小不能超过10M\"}";
        echo $json;
        exit;
    }
    $type = strrchr($picname, '.'); //限制上传格式
    if ($type != ".gif" && $type != ".jpg" && $type != ".png" && $type != ".jpeg" && $type != ".GIF" && $type != ".JPG" && $type != ".PNG" && $type != ".JPEG") {
        $json = "{\"SUCCESS\":\"false\", \"MSG\": \"图片格式不正确！请重新上传\"}";
        echo $json;
        exit;
    }
    if (!is_dir("../../upload/img")) {     // is_dir()函数判断指定的文件夹是否存在
        mkdir("../../upload/img");         // mkdir()函数创建文件夹
    }
    $rand = rand(100, 999);
    $pics = date("YmdHis") . $rand . $type; //命名图片名称
    //上传路径
    $pic_path = stripslashes("../../upload/img/" . $pics);
    $pic_path2 = stripslashes("../../upload/img/" . $pics);
    move_uploaded_file($_FILES['photoUpload']['tmp_name'], $pic_path);
}
$size = round($picsize / 1024, 2); //转换成kb
$arr = array(
    'name' => $pic_path2,
    'pic' => $pics,
    'size' => $size
);
echo json_encode($arr); //输出json数据
