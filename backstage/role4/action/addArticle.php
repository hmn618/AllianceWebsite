<?php
/*
功能：添加新文章、判重、修改文章
 *输入：封面图片
 *输出：封面图片的地址
 *作者：张城城 、赵文骏
 *开发时间：2016.7.15
 *最后修改时间：2016.7.15

*/
    header('Content-type: text/json; charset=utf-8');
    //这个是用于向数据库添加一篇新的文章的时候用的action
    //参数如下:
    //TITLE：标题，SUBTITLE：副标题，AUTHOR：作者，COVERPIC：封面的图片地址
    //SUMMARY：摘要，LABEL：标签，CONTENT：内容及正文，LINK：原文链接, TYPE: 图文还是音视频
    //如果添加成功，返回的SUCCESS为true，否则为false
    //MSG为携带的信息
    //采用POST方式发送数据
/*
    session_start();
    if(!isset($_SESSION['ACCOUNT'])) {
        $json = "{\"SUCCESS\":false, \"MSG\": \"未登录\"}";
        echo $json;
        exit;
    }
*/
    $TYPE=$_POST['type'];
    if(isset($_POST['TITLE']) && isset($_POST['SUBTITLE']) && isset($_POST['AUTHOR'])
        && isset($_POST['COVERPIC']) && isset($_POST['SUMMARY'])
        && isset($_POST['CONTENT']) && isset($_POST['LINK'])) {
        $TITLE = $_POST['TITLE'];
        $SUBTITLE = $_POST['SUBTITLE'];
        $AUTHOR = $_POST['AUTHOR'];
        $COVERPIC = $_POST['COVERPIC'];
        $SUMMARY = $_POST['SUMMARY'];
     //   $LABEL = $_POST['LABEL'];
        $CONTENT = $_POST['CONTENT'];
        $LINK = $_POST['LINK'];
		$UPDATE = $_POST['update'];
     //   $TYPE = $_POST['TYPE'];
		//session_start();
		//$GROUPS = $_SESSION['GROUPS'];
    }
    else {
        $json = "{\"SUCCESS\":false, \"MSG\":\"参数错误\"}";
        echo $json;
        exit;
    }
   
    include '../../../serv/conn/conn.php';
   

    if (!$mysqli->set_charset("utf8")) {
        printf("Error loading character set utf8: %s\n", $mysqli->error);
        exit;
     }
	
	//修改文章部分
	if($UPDATE){
		$sql = "UPDATE  article SET maintitle = ?,subtitle = ?,author= ?,coverpic = ?,abstract = ?,content = ?,link = ?,updata = NOW(),type = ? WHERE id = ?";
		$stmt = $mysqli->prepare($sql);
		//update既是更新标记，也是要修改文章的id
	    $stmt->bind_param("sssssssii", $TITLE, $SUBTITLE, $AUTHOR, $COVERPIC, $SUMMARY,
	                                   $CONTENT, $LINK, $TYPE,$UPDATE);
		$stmt->execute();
	    $json = "{\"SUCCESS\":true, \"MSG\":\"修改成功\"}";
	    echo $json;							   
	}
	//发布新文章部分
	else{
		
		
		//判重，文章题目不能重复
		$sql = "SELECT 1 FROM article WHERE maintitle = ?";
		$stmt = $mysqli->prepare($sql);
		$stmt->bind_param("s", $TITLE);
		$stmt->execute();
		$stmt->store_result();
		$isused = $stmt->num_rows;
	       $stmt->close();	
		if($isused){
			$json = "{\"SUCCESS\":true, \"MSG\":\"文章已存在\"}";
			echo $json;
		}
		else{
		    $sql = "INSERT INTO article (maintitle, subtitle, author, coverpic, abstract,
		                                    content, link, creatime, updata, type)
		                        VALUES(?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)";
		    $stmt = $mysqli->prepare($sql);
		    $stmt->bind_param("sssssssi", $TITLE, $SUBTITLE, $AUTHOR, $COVERPIC, $SUMMARY,
		                                   $CONTENT, $LINK, $TYPE);
		    $stmt->execute();
		    $json = "{\"SUCCESS\":true, \"MSG\":\"发布成功\"}";
		    echo $json;
		}
	}
	$stmt->close();
	$mysqli->close();	
	exit;
	
?>
