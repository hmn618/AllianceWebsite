<?php
    require_once("../checklogin.php");
$AUTHOR = $_SESSION["user"];
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>发布咨讯</title>
	<link href="../../css/notice.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="../../css/leftNav12.css" />
	<link rel="stylesheet" href="../../kindeditor/themes/default/default.css" />
	<link rel="stylesheet" href="../../kindeditor/plugins/code/prettify.css" />
	<script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
	<script src="../../js/jquery.form.js"></script>
	<script charset="utf-8" src="../../kindeditor/kindeditor.js"></script>
	<script charset="utf-8" src="../../kindeditor/lang/zh_CN.js"></script>
	<script charset="utf-8" src="../../kindeditor/plugins/code/prettify.js"></script>
	<script charset="utf-8" src="../../js/role2news.js"></script>
	<script type="text/javascript" src="../../js/role2CheckQuanxian.js"></script>
</head>

<body>

<div class="main">
	<div class="main_left">
		<div class="leftNav clearfix">
			<img src="../../img/企业会员/logo.png" alt="" class="backlogo" />
			<h1 id="leftName">后台管理系统</h1>
			<ul id="leftNav">
				<li id="shang"><a href="index.php">账号资料<img class="icon" src="../../img/企业会员/user.png" alt=""/></a></li>
				<li><a href="basic.php">基本信息</a></li>
				<li><a href="extend.php">扩展信息<img class="icon" src="../../img/企业会员/ex-info.png" alt=""/></a></li>
				<li><a href="#">提交材料<img src="../../img/企业会员/material.png" class="icon" alt=""/></a></li>
				<li class="active"><a href="publish_news.php">发布资讯<img src="../../img/企业会员/news.png" class="icon" alt=""/></a></li>
				<li><a href="publish_activities.php">发布活动<img src="../../img/企业会员/activity.png" class="icon" alt=""/></a></li>
			</ul>
		</div>
	</div>
	<div class="main_right">
		<div class="top">
			<div class="top_content">
				<span>企业会员：<?php echo $user;?></span>&nbsp;<img  id="logout" src="../../img/企业会员/exist.png">&nbsp;<span>退出</span>
			</div>
		</div>
		<div class="right_top">
			<div class="top_img">
				<img src="../../img/企业会员/index-pic.png">
			</div>
			<div class="top_text">
				<span>首页>后台管理>资讯管理</span>
			</div>
		</div>
		<div class="right_bottom">
		  <input type="file"  id="imgUpload" name="photoUpload" >
			<div class="content">
				<div class="content_top">					
					<div class="top_left">
						<a href="publish_news.php"><span>管理</span></a>
					</div>
					<div class="top_right">
						<a href="article.php"><span>发布资讯</span></a>
					</div>
				</div>
				
				<div class="content_bottom">
					<div class="bottom_left">
			
						<span>标题</span><br/><input type="text" id="title_text"><br/>
						<span>副标题（选填）</span><br/><input type="text" id="subtitle_text"></br>
						<span>作者（选填）</span><br/><input type="text" id="author_text" disabled="disabled" value=""><br/>
						<span>封面</span>
						<div class="bottom_btn" id="coverpic">
						
						<span id="addPicId" data-url="">本地上传</span>
						<input type="hidden" id="addPicId1">
						</div>
						<span>摘要</span><br/><textarea type="text" id="abstract_text"></textarea><br/>
						<p class="page">正文</p>
						<textarea  name="article.content1" cols="100" rows="8"></textarea>
						<p class="page1">原文链接（可选）</p><input type="text" id="link_text">
						<div class="bottom_btn1" id="save_article">
							<span>发布</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>
	</div>
	<div class="footer">
	<div class="footer_content">
		<span>免责声明|备案号：京ICP备15000234号-Copyright 中关村四方现代服务产业技术创新战略联盟</span>
	</div>
</div>
</div>

</body>
</html>
