<?php
    require_once("../checklogin.php");
	require_once("action/index.php");
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>基本信息</title>
	<link  rel="stylesheet" type="text/css" href="../../css/account2.css"/>
	<link rel="stylesheet" type="text/css" href="../../css/leftNav1.css"/>
	<link rel="icon" href="../../img/logo.png" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="../../css/header&footer.css" />
	<script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="../../js/role4index.js"></script>
	<script src="../../js/md5.js"></script>
	<script type="text/javascript" src="../../js/indextanchuang.js"></script>
	<link rel="stylesheet" href="../../css/lanrenzhijia.css" media="all">
</head>

<body>

<div class="main">
	<div class="main_left">
		<div class="leftNav clearfix">
			<img src="../../img/企业会员/logo.png" alt="" class="backlogo" />
			<h1 id="leftName">后台管理系统</h1>			
			<ul id="leftNav">
				<li class="active" id="shang"><a href="index.php">账号资料</a></li>
				<li><a href="notice_manage.php">通知管理<img class="icon" src="../../img/backstage/notice-manage.png" alt=""/></a></li>
				<li><a href="active_manage.php">活动管理<img src="../../img/backstage/activity-manage.png" class="icon" alt=""/></a></li>
				<li><a href="news_manage.php">资讯管理<img src="../../img/backstage/info-manage.png" class="icon" alt=""/> </a></li>
				<li><a href="member.php">企业管理<img src="../../img/backstage/member-manage.png" class="icon" alt=""/></a></li>
				<li><a href="professor.php">专家管理<img src="../../img/backstage/specialist-manage.png" class="icon" alt=""/></a></li>
				<li><a href="bind.php">绑定管理<img src="../../img/backstage/bind.png" class="icon" alt="" style="width:24px; height:24px;float:right;
	margin-right:26px;"/></a></li>
				<li><a href="password.php">账号管理<img src="../../img/backstage/account-manage.png" class="icon" alt="" style="width:24px; height:24px;float:right;
	margin-right:26px;"/></a></li>
			</ul>
		</div>
	</div>
	<div class="main_right">
		 <div class="top">
           <div class="top_content">
				<p class="hh">退出</p>
					<img id="logout" class="exit" src="../../img/exist.png" id="logout">
				<p class="hh">系统管理员：<?php echo $name;?></p>
				
			</div>
        </div>
		<div class="right_top">
			<div class="top_img">
				<img src="../../img/account/index-pic.png">
			</div>
			<div class="top_text">
				 <span>首页&nbsp;&nbsp>&nbsp;&nbsp后台管理&nbsp;&nbsp>&nbsp;&nbsp;账号资料</span>
			</div>
		</div>
		<div class="right_bottom">
			<div class="content">
				<div class="content_top">
					<div class="top_left">
						<span>账号信息</span>
					</div>
					
				</div>
				<div class="content_bottom">
					<input type="hidden" id="shenhe" value="<?php echo $shenhe;?>"/>
					<div class="bottom_top">
						<div class="bottom_left">
						<span>账号名称</span><input type="text" value="<?php echo $name;?>" class="text"/><a class="theme-login" href="javascript:;">修改密码</a><br/>
						
						 <div class="theme-popover">
							 <div class="theme-poptit">
								  <a href="javascript:;" title="关闭" class="close">×</a>
								  <h4>修改密码</h4>
							 </div>
						  
							 <div class="theme-popbod dform">
								   <div class="theme-signin" >
										
										<ol>
											
											 <li><span>新密码：</span><input class="ipt"  id="ipt1" type="password" required="required" style="width:180px; height:21px; margin-top: 7px;" name="userName" value="" size="20" /></li>
											 <li><span>确认密码：</span><input class="ipt" id="ipt2" type="password"  style="width:180px; height:21px; margin-top: 7px; required="required"name="pwd" value="" size="20" /></li>
											 <li><input class="btn btn-primary" type="submit" name="submit" id="submit1" value=" 提交 " /></li>
											
										</ol>
									  
								   </div>
							 </div>
    
						</div>
						<div class="theme-popover-mask"></div>
						
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>邮箱</span><input type="text" value="<?php echo $email;?>" class="text"/><a class="theme-login1" href="javascript:;">修改邮箱</a></br>
						
						 <div class="theme-popover1">
							 <div class="theme-poptit1">
								  <a href="javascript:;" title="关闭" class="close">×</a>
								  <h4>修改邮箱</h4>
							 </div>
						  
							 <div class="theme-popbod1 dform">
								   <div class="theme-signin" >
										
										<ol>
											
											 <li><span>新邮箱：</span><input class="ipt" id="ipt3" type="text"  style="width:180px; height:21px; margin-top: 7px; required="required" name="userName" value="" size="20" /></li>
											
											 <li><input class="btn btn-primary" type="submit" name="submit" id="submit2" value=" 提交 " /></li>
											
										</ol>
									  
								   </div>
							 </div>
    
						</div>
						<div class="theme-popover-mask1"></div>
						
						<span>账号昵称</span><input type="text" value="<?php echo $nickname;?>" class="text"/><a class="theme-login2" href="javascript:;">修改昵称</a><br/><br/>
						
						 <div class="theme-popover2">
							 <div class="theme-poptit2">
								  <a href="javascript:;" title="关闭" class="close">×</a>
								  <h4>修改昵称</h4>
							 </div>
						  
							 <div class="theme-popbod2 dform">
								   <div class="theme-signin" >
										
										<ol>
											
											 <li><span>新昵称：</span><input class="ipt" type="text" id="ipt4" style="width:180px; height:21px; margin-top: 7px; required="required" name="userName" value="" size="20" /></li>
											
											 <li><input class="btn btn-primary" type="submit" name="submit"  id="submit3" value=" 提交 " /></li>
											
										</ol>
									  
								   </div>
							 </div>
    
						</div>
						<div class="theme-popover-mask2"></div>
					</div>
						<div class="bottom_right">
							<span>状态提示&nbsp;:</span><br/><br/>
							<h2 id="shenhe1"></h2><img src="../../img/no.png" id="shenhe2"/>
						</div>
					</div>
					<div id="bottom_center">
						<div id="t1"><h1>基本资料</h1></div>
						<div class="center_left">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>姓名</span><input type="text" class="text_1" id="name"><br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>性别</span><input type="radio" id="man" name="Sex" value="男" class="text_2"/>男<input type="radio" id="woman" name="Sex" value="女" class="text_2"/>女<br/>
							<span>身份证号</span><input type="text" class="text_1" id="idcard"><br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>电话</span><input type="text" class="text_1" id="tel"><br/>
							<span>电子邮箱</span><input type="text" class="text_1"  id="email">
							
											
						</div>
					</div>
					<div class="bottom_bottom">
						<div class="bottom_btn1" id="save_article">
								<span>提交</span>
							</div>
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
