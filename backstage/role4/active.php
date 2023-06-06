<?php
    require_once("../checklogin.php");
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>发起活动</title>
	<link href="../../css/notice.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="../../css/leftNav1.css"/>
	<link rel="icon" href="../../img/logo.png" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="../../css/header&footer.css" />
	<link rel="stylesheet" href="../../kindeditor/themes/default/default.css" />
	<link rel="stylesheet" href="../../kindeditor/plugins/code/prettify.css" />
	<script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="../../js/jquery.form.js"></script>	
	<script type="text/javascript" src="../../js/role4CheckQuanxian.js"></script>
	<script charset="utf-8" src="../../kindeditor/kindeditor.js"></script>
	<script charset="utf-8" src="../../kindeditor/lang/zh_CN.js"></script>
	<script charset="utf-8" src="../../kindeditor/plugins/code/prettify.js"></script>
	<script charset="utf-8" src="../../js/role4active.js"></script>		
</head>

<body>

<div class="main">
	<div class="main_left">
		<div class="leftNav clearfix">
			<img src="../../img/企业会员/logo.png" alt="" class="backlogo" />
			<h1 id="leftName">后台管理系统</h1>
			<ul id="leftNav">
				<li id="shang"><a href="index.php">账号资料<img class="icon" src="../../img/企业会员/user.png" alt=""/></a></li>
				<li><a href="notice_manage.php">通知管理<img class="icon" src="../../img/backstage/notice-manage.png" alt=""/></a></li>
				<li  class="active"><a href="active_manage.php">活动管理</a></li>
				<li><a href="news_manage.php">资讯管理<img src="../../img/backstage/info-manage.png" class="icon" alt=""/> </a></li>
				<li><a href="member.php">企业管理<img src="../../img/backstage/member-manage.png" class="icon" alt=""/></a></li>
				<li><a href="professor.php">专家管理<img src="../../img/backstage/specialist-manage.png" class="icon" alt=""/></a></li>
				<li><a href="password.php">账号管理<img src="../../img/backstage/account-manage.png" class="icon1" alt="" style="width:24px; height:24px;float:right;
	margin-right:26px;"/> </a></li>
			</ul>
		</div>
	</div>
	<div class="main_right">
		 <div class="top">
           <div class="top_content">
				<p class="hh">退出</p>
					<img id="logout" class="exit" src="../../img/exist.png" id="logout">
				<p class="hh">系统管理员：<?php echo $user;?></p>
				
			</div>
        </div>
		<div class="right_top">
			<div class="top_img">
				<img src="../../img/企业会员/index-pic.png">
			</div>
			<div class="top_text">
				 <span>首页&nbsp;&nbsp>&nbsp;&nbsp后台管理&nbsp;&nbsp>&nbsp;&nbsp;通知管理</span>
			</div>
		</div>
		<div class="right_bottom">
		  <input type="file"  id="imgUpload" name="mypic" >
			<div class="content">
				<div class="content_top">					
					<div class="top_left">
						<a href="active_manage.php"><span>管理</span></a>
					</div>
					<div class="top_right">
						<a href="active.php"><span>发起活动</span></a>
					</div>
				</div>
				
				<div class="content_bottom">
					<div class="bottom_left">
						<input type="hidden" id="update" value=0>
						<span>标题</span><br/><input type="text" id="title_text"><br/>
						<span>副标题（选填）</span><br/><input type="text" id="subtitle_text"></br>
						<span>作者（选填）</span><br/><input type="text" id="author_text"><br/>
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
	
</div>
<footer>
	<p class="ff">免责声明 | 备案号：京ICP备15000234号-1 Copyright&copy;中关村四方现代服务产业技术创新战略联盟 </p>
</footer>
</body>
</html>
