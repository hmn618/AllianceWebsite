<?php
    require_once("../checklogin.php");
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>科研情况</title>
		<link rel="stylesheet" type="text/css" href="../../css/leftNav1.css" />
		<link rel="stylesheet" type="text/css" href="../../css/header&footer.css" />
		<link rel="stylesheet" type="text/css" href="../../css/study.css" />
		<script type="text/javascript" src="../../js/role1study.js"></script>	
	</head>
	<body>
		<header>
			<p class="hh">退出</p>
			<img class="exit" src="../../img/exist.png">
			<p class="hh">个人会员：<?php echo $name;?></p>
		</header>
			<!----------leftNav-------------->
		<div class="leftNav">
			<img src="../../img/backlogo.png" alt="" class="backlogo" />
			<h1 id="leftName">后台管理系统</h1>
			<ul id="leftNav">
				<li id="shang"><a href="index.php">账号资料<img class="icon" src="../../img/user.png" alt=""/></a></li>
				<li><a href="basic.php">基本信息<img class="icon" src="../../img/basic-info.png" alt=""/></a></li>
				<li><a href="#">扩展信息<img class="icon" src="../../img/ex-info.png" alt=""/></a>
							<ul>
								<li><a href="domain.php">工作领域<img src="../../img/work-filed.png" class="icon" alt=""/></a></li>
								<li><a href="evaluate.php">评审经历<img src="../../img/check.png" class="icon" alt=""/></a></li>
								<li class="active"><a href="#">科研情况<img src="../../img/study.png" class="icon" alt=""/></a></li>
							</ul>
				</li>
				<li><a href="#">提交材料<img src="../../img/material.png" class="icon" alt=""/></a></li>
			</ul>
		</div>
		
		
		<div id="container" class="clearfix">
			<div class="breadNav">
				<img class="index_pic" src="../../img/index-pic.png" />
				<p class="bread"><a href="#">首页</a>><a href="#">后台管理</a>><a href="#">科研情况</a></p>
			</div>
			
			
			<form onSubmit="return regsubmit();" method="post">
				<div id="study" class="study clearfix">
					<div class="row clearfix" id="row1">
						<div class="block1" id="block1">
							<h1 class="title">科研项目</h1>
							<textarea class="input_text" rows="10"></textarea>
						</div>
						<div class="block2" id="block2">
							<h1 class="title">学术成就</h1>
							<textarea class="input_text" rows="10"></textarea>
						</div>
					</div>
					
					<div class="row clearfix" id="row2">
						<div class="block1" id="block3">
							<h1 class="title">论文被发表或被引用情况</h1>
							<textarea class="input_text" rows="10"></textarea>
						</div>
						<div class="block2" id="block4">
							<h1 class="title">发明专利</h1>
							<textarea class="input_text" rows="10"></textarea>
						</div>
					</div>
					
					<div class="row3 clearfix" id="row3">
						<div class="block1" id="block5">
							<h1 class="title">社会兼职</h1>
							<input type="text" class="job_in" placeholder="职务">
							<input type="text" class="job_in" placeholder="任期">
						</div>
						<div class="block2" id="block6">
							<h1 class="title">学术兼职</p>
							<input type="text" class="job_in" placeholder="职务">
							<input type="text" class="job_in" placeholder="任期">
						</div>
					</div>
					
				<div class="row4 clearfix">
					<button id="submit" type="button" class="btn">提交</button>
					<button id="submit" type="button" class="btn">重置</button>
				</div>
				</div>
			</form>	
		</div>		
		<footer>
			<p class="ff">免责声明 | 备案号：京ICP备15000234号-1 Copyright&copy;中关村四方现代服务产业技术创新战略联盟 </p>
		</footer>
	</body>
</html>
