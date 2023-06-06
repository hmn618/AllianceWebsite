<?php
    require_once("../checklogin.php");
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>评审经历</title>
		<link rel="stylesheet" type="text/css" href="../../css/leftNav1.css" />
		<link rel="stylesheet" type="text/css" href="../../css/evaluate.css" />
		<link rel="stylesheet" type="text/css" href="../../css/header&footer.css" />
		<script type="text/javascript" src="../../js/role1evaluate.js"></script>	
	</head>
	<body>
		<header>
			<p class="hh">退出</p>
			<img class="exit" src="../../img/exist.png">
			<p class="hh">个人会员：<?php echo $name;?></p>
		</header>
			<!----------leftNav-------------->
		<div class="leftNav clearfix">
			<img src="../../img/backlogo.png" alt="" class="backlogo" />
			<h1 id="leftName">后台管理系统</h1>
			<ul id="leftNav">
				<li id="shang"><a href="index.php">账号资料<img class="icon" src="../../img/user.png" alt=""/></a></li>
				<li><a href="basic.php">基本信息<img class="icon" src="../../img/basic-info.png" alt=""/></a></li>
				<li><a href="#">扩展信息<img class="icon" src="../../img/ex-info.png" alt=""/></a>
							<ul>
								<li><a href="domain.php">工作领域<img src="../../img/work-filed.png" class="icon" alt=""/></a></li>
								<li class="active"><a href="#">评审经历<img src="../../img/check.png" class="icon" alt=""/></a></li>
								<li><a href="study.php">科研情况<img src="../../img/study.png" class="icon" alt=""/></a></li>
							</ul>
				</li>
				<li><a href="#">提交材料<img src="../../img/material.png" class="icon" alt=""/></a></li>
			</ul>
		</div>
		
		
		<div id="container" class="clearfix">
			<div class="breadNav">
				<img class="index_pic" src="../../img/index-pic.png" />
				<p class="bread"><a href="#">首页</a>><a href="#">后台管理</a>><a href="#">评审经历</a></p>
			</div>
			
			<!--评审经历-->
			<form onSubmit="return regsubmit();" method="post">
				<div id="evaluate" class="clearfix">
					<div class="rr">
						<div class="head1">
							<h1>国家科技计划</h1>
						</div>
						<div class="table1 clearfix" >
							<div class="row">
								<label class="checker"><input type="checkbox" class="check" value=""/>火炬计划</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>科技惠民计划</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>国家软科学研究计划</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>港澳台科技合作专项</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>国家（重点）实验室</label> 
							</div>
							<div class="row">
								<label class="checker"><input type="checkbox" class="check" value=""/>国家重点基础研究发展计划（973计划）</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>国家支撑计划</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>星火计划</label>
								<label class="checker"><input type="checkbox" class="check" value=""/>科技型中小企业技术创新基金</label>
							</div>
							<div class="row">
								<label class="checker"><input type="checkbox" class="check" value=""/>科研院所技术开发研究专项资金</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>国家科技基础条件平台</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>科技基础型工作专项</label>
								<label class="checker"><input type="checkbox" class="check" value=""/>国家磁约束核聚变能发展研究专项</label> 
							</div>
							<div class="row">
								<label class="checker"><input type="checkbox" class="check" value=""/>国家重大科学仪器设备开发专项</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>国家国际科技合作专项</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>国家重大科学研究计划</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>国家工程技术研究中心</label> 
							</div>
							<div class="row">
								<label class="checker"><input type="checkbox" class="check" value=""/>农业科技成果转化资金</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>科技富民强县专项行动计划</label> 
								<label class="checker"><input type="checkbox" class="check" value=""/>其他</label> 
							</div>
						</div>
					</div>
					
					<div class="rr">
						<div class="head1"><h1>国家自然科学基金</h1></div>
						<div class="table1">
							<label class="checker"><input type="checkbox" class="check" value=""/>国家自然科学基金</label> 
						</div>	
					</div>
					
					<div class="rr">
						<div class="head1"><h1>国家科技奖励</h1></div>
						<div class="table1">
							<label class="checker"><input type="checkbox" class="check" value=""/>国家科技奖励</label> 
						</div>	
					</div>
					
					<div class="rr">
						<div class="head1"><h1>人才计划</h1></div>
						<div class="table1">
								<label class="checker"><input type="checkbox" class="check" value=""/>海外高层次人才引进计划（千人计划）</label> 
								<label class="checker"><input type="checkbox" class="check1" value=""/>创新人才计划</label>
								<label class="checker"><input type="checkbox" class="check" value=""/>高层次创造性人才计划（包括“长江学者”和“创新团队”及“新世纪人才”等）</label> 
								<label class="checker"><input type="checkbox" class="check1" value=""/>现代农业人才支撑计划</label> 
								<label class="checker"><input type="checkbox" class="check1" value=""/>其他</label> 
						</div>	
					</div>
					
					<div class="rr">
						<div class="head1"><h1>部门、地方科技计划、基金、奖励</h1></div>
						<div class="table1">
							<input type="text" class="inputContent"> 
						</div>
						</div>
					
					<div class="rr">
					
						<div class="head1"><h1>国外科技项目、基金、奖励</h1></div>
						<div class="table1">
							<input type="text" class="inputContent"> 
						</div>
					</div>
					
					<div class=" clearfix">
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
