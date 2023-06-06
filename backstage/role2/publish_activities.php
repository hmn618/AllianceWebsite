<?php
    require_once("../checklogin.php");
	$name = $_SESSION['user'];
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>活动管理</title>
	<link href="../../css/notice_manage.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="../../css/leftNav1.css"/>
	<link rel="stylesheet" type="text/css" href="../../css/header&footer.css" />
	<link rel="icon" href="../../img/logo.png" type="image/x-icon" />
	<script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="../../js/role2_news_activities_manager.js"></script>
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
				<li><a href="basic.php">基本信息<img class="icon" src="../../img/企业会员/basic-info.png" alt=""/></a></li>
				<li><a href="extend.php">扩展信息<img class="icon" src="../../img/企业会员/ex-info.png" alt=""/></a></li>
				<li><a href="#">提交材料<img src="../../img/企业会员/material.png" class="icon" alt=""/></a></li>
				<li><a href="publish_news.php">发布资讯<img src="../../img/企业会员/news.png" class="icon" alt=""/></a></li>
				<li class="active"><a href="#">发布活动<img src="../../img/企业会员/activity.png" class="icon" alt=""/></a></li>
			</ul>
		</div>
	</div>
	<div class="main_right">
		 <div class="top">
           <div class="top_content">
				<p class="hh">退出</p>
					<img id="logout" class="exit" src="../../img/exist.png" id="logout">
				<p class="hh">企业会员：<?php echo $name;?></p>
				
			</div>
        </div>
		<div class="right_top">
			<div class="top_img">
				<img src="../../img/企业会员/index-pic.png">
			</div>
			<div class="top_text">
				<span>首页>后台管理>活动管理</span>
			</div>
		</div>
		<div class="right_bottom">
			<div class="content">
				<div class="content_top">
					<div class="top_left">
						<a href="#"><span>管理</span></a>
					</div>
					<div class="top_right">
						<a href="activity.php?type=2"><span>发起活动</span></a>
					</div>
				</div>
				<div class="btn">
					<div class="button_2 delete_btn">
						<span>删除</span>
					</div>
				</div>
				<div class="content_bottom">
					<div class="bottom_left">
	                    <table class="result-tab" width="100%" id="table">
	                        <tr>
	                            <th class="tc"  width="10%"></th>
	                            <th width="40%">名称</th>
	                            <th width="20%">发布单位</th>
	                            <th  width="15%">发布时间</th>
	                            <th  width="15%">状态</th>
	                        </tr>  
	                    </table>
						<div id="btngroup">
							<button class="btn1" id="first"><<首页</button>
							<button class="btn1" id="previous">&lt;</button>
							<button class="btn1" id="now">1</button>
							<button class="btn1" id="nextPage">&gt;</button>
							<button class="btn1" id="final">末页>></button>
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
