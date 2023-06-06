<?php
/**功能：读取企业扩展信息
 *输入：ajax表单
 *输出：json
 *作者：刘庆
 *开发时间：2016.7.15
 *最后修改时间：2016.7.17
 */
header("Content-type: text/html; charset=utf-8");
require_once("../checklogin.php");
require_once("../../safe/safe.php");
$name = $_SESSION['user'];
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>扩展信息</title>
	<link href="../../css/ex-info12.css" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" type="text/css" href="../../css/leftNav1.css"/>
	<link rel="stylesheet" type="text/css" href="../../css/header&footer.css" />
	<link rel="icon" href="../../img/logo.png" type="image/x-icon" />
	<link rel="stylesheet" href="../../kindeditor/themes/default/default.css" />
	<link rel="stylesheet" href="../../kindeditor/plugins/code/prettify.css" />
	<script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="../../js/jquery.validate.js"></script>
	<script type="text/javascript" src="../../js/tendina.min.js"></script>
	<script src="../../js/kindeditor.js"></script>
	<script type="text/javascript" src="../../js/role2_represent.js"></script>
	<script charset="utf-8" src="../../kindeditor/kindeditor.js"></script>
	<script charset="utf-8" src="../../kindeditor/lang/zh_CN.js"></script>
	<script charset="utf-8" src="../../kindeditor/plugins/code/prettify.js"></script>
	<script charset="utf-8" src="../../js/role2extend.js"></script>		
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
				<li  class="active"><a href="#">扩展信息<img class="icon" src="../../img/企业会员/ex-info.png" alt=""/></a></li>
				<li><a href="#">提交材料<img src="../../img/企业会员/material.png" class="icon" alt=""/></a></li>
				<li><a href="publish_news.php">发布资讯<img src="../../img/企业会员/news.png" class="icon" alt=""/></a></li>
				<li><a href="publish_activities.php">发布活动<img src="../../img/企业会员/activity.png" class="icon" alt=""/></a></li>
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
				 <span>首页&nbsp;&nbsp>&nbsp;&nbsp后台管理&nbsp;&nbsp>&nbsp;&nbsp;基本信息</span>
			</div>
		</div>
		<div class="right_bottom">
			<div class="content">
				<div class="content_top">
					<div class="top_left">
						<span>代表人信息（一）</span>
					</div>
					<div class="top_right">
						<span>代表人信息（二）</span>
					</div>
				</div>
				<div class="content_bottom">
					<div class="bottom_left">

						<span>姓名</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent1_name">&nbsp;&nbsp;
						<span>职务</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent1_pos"></br>
						<span>手机</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent1_tel">&nbsp;&nbsp;
						<span>传真</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent1_fax"></br>
						<span>专业领域</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent1_flied"><br/>
						<span>电子邮件</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent1_mail"><br/><br/>
						<span>个人简介</span><br/>
						 <textarea type="text" id="represent1_brief">
						 </textarea>
						
					</div>
					<div class="bottom_right">
						<span>姓名</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent2_name">&nbsp;&nbsp;
						<span>职务</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent2_pos"></br>
						<span>手机</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent2_tel">&nbsp;&nbsp;
						<span>传真</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent2_fax"></br>
						<span>专业领域</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent2_flied"><br/>
						<span>电子邮件</span>&nbsp;&nbsp;<input type="text" style="width: 150px;" id="represent2_mail"><br/><br/>
						<span>个人简介</span><br/>
						<textarea type="text" id="represent2_brief">
						 </textarea>
					</div>
				</div>
				<div class="content_top1">
					<div class="top_left">
						<span>产品服务</span>
					</div>
				</div>
				<div class="text1">
					<textarea  name="article.content1" cols="100" rows="8"></textarea>
				</div>
				<div class="content_top1">
					<div class="top_left">
						<span>主要客户</span>
					</div>
				</div>
				<div class="text1">
					<textarea  name="article.content2" cols="100" rows="8"></textarea>
				</div>
				<div class="content_top1">
					<div class="top_left">
						<span>解决方案</span>
					</div>
				</div>
				<div class="text1">
					<textarea  name="article.content3" cols="100" rows="8"></textarea>
				</div>
				<div class="content_top1">
					<div class="top_left">
						<span>资质荣誉</span>
					</div>
				</div>
				<div class="text1">
					<textarea  name="article.content4" cols="100" rows="8"></textarea>
				</div>
				<div class="content_bnt">
					<div class="log_bottom1" id="represent_submit_btn">
						<span>提交</span>
					</div>
					<div class="log_bottom2" id="clear_btn">
						<span>重置</span>
					</div>
					
				</div>
			</div>
		</div>
		
	</div>
</div>
<footer>
	<p class="ff">免责声明 | 备案号：京ICP备15000234号-1 Copyright&copy;中关村四方现代服务产业技术创新战略联盟 </p>
</footer>
</body>
</html>
