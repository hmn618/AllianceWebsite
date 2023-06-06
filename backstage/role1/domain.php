<?php
    require_once("../checklogin.php");
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>工作领域</title>
		<link rel="stylesheet" type="text/css" href="../../css/leftNav1.css" />
		<link rel="stylesheet" type="text/css" href="../../css/domain.css" />
		<link rel="stylesheet" type="text/css" href="../../css/header&footer.css" />
		
		<script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
		<!--<script type="text/javascript" src="../../js/tendina.min.js"></script>-->
		<script type="text/javascript" src="../../js/jquery.validate.js"></script>
		<script type="text/javascript" src="../../js/role1domain.js"></script>	
	</head>
	<body>
		<header>
			<p class="hh">退出</p>
			<img class="exit" src="../../img/exist.png">
			<p class="hh">个人会员：<?php echo $name;?></p>
		</header>
		
		<div class="breadNav">
			<img src="../../img/index-pic.png" />
			<p class="bread"><a href="#">首页</a>><a href="#">后台管理</a>><a href="#">工作领域</a></p>
		</div>
		<!----------leftNav-------------->
		<div class="leftNav clearfix">
			<img src="../../img/backlogo.png" alt="" class="backlogo" />
			<h1 id="leftName">后台管理系统</h1>
			<ul id="leftNav">
				<li id="shang"><a href="index.php">账号资料<img class="icon" src="../../img/user.png" alt=""/></a></li>
				<li><a href="basic.php">基本信息<img class="icon" src="../../img/basic-info.png" alt=""/></a></li>
				<li><a href="#">扩展信息<img class="icon" src="../../img/ex-info.png" alt=""/></a>
							<ul>
								<li class="active"><a href="#">工作领域<img src="../../img/work-filed.png" class="icon" alt=""/></a></li>
								<li><a href="evaluate.php">评审经历<img src="../../img/check.png" class="icon" alt=""/></a></li>
								<li><a href="study.php">科研情况<img src="../../img/study.png" class="icon" alt=""/></a></li>
							</ul>
				</li>
				<li><a href="#">提交材料<img src="../../img/material.png" class="icon" alt=""/></a></li>
			</ul>
		</div>
		
		
		<div id="container" class="clearfix">
			<div class="breadNav">
				<img class="index_pic" src="../../img/index-pic.png" />
				<p class="bread"><a href="#">首页</a>><a href="#">后台管理</a>><a href="#">工作领域</a></p>
			</div>
			
			<!--工作领域-->
			<form id="domain" onSubmit="return regsubmit();" method="post">
				<div class="domain">
					<div class="top clearfix">
						<!--工作信息-->
						<div id="info" class="topBlock default">工作信息</div>
						
						<!--国际学科-->
						<div id="inter" class="topBlock">国际学科</div>
						
						<!--教育学科-->
						<div id="edu" class="topBlock">教育学科</div>
						
						<!--基金学科-->
						<div id="fun" class="topBlock">基金学科</div>
						
						<!--服务的经纪行业列表-->
						<div id="ser" class="topBlock">服务的经纪行业列表</div>
					</div>
					
					
					<!--工作信息-->
					<div id="work" class="below">
					
					<table cellspacing="0" cellpadding="0" border="1px solid #000">
						<tr>
							<th class="left">工作性质</th>
							<th class="right clearfix">
								<div id="div1">
									<label><input type="checkbox" class="check" value=""/>基础研究</label> 
									<label><input type="checkbox" class="check" value=""/>企业管理</label> 
								</div>
								<div id="div2">
									<label><input type="checkbox" class="check" value=""/>应用研究</label> 
									<label><input type="checkbox" class="check" value=""/>投资金融</label> 
								</div>
								<div id="div3">
									<label><input type="checkbox" class="check" value=""/>试验发展</label> 
									<label><input type="checkbox" class="check" value=""/>法律实务</label> 
								</div>
								<div id="div4">
									<label><input type="checkbox" class="check" value=""/>战略咨询</label> 
									<label><input type="checkbox" class="check" value=""/>财务管理</label> 
								</div>
								<div id="div5">
									<label><input type="checkbox" class="check" value=""/>科技管理</label> 
								</div>
							</th>
						</tr>
						<tr>
							<th class="left">研究或工作方向关键词</th>
							<th class="right"><input type="text" class="in"></th>
						</tr>
						<tr>
							<th class="left">近三年研究或工作内容</th>
							<th class="right"><textarea class="intext" rows="5"></textarea></th>
						</tr>
						<tr>
							<th class="left">主要业绩及贡献</th>
							<th class="right"><textarea class="intext" rows="5"></textarea></th>
						</tr>
						<tr>
							<th class="left down">学术、荣誉头衔</th>
							<th class="right down clearfix">
								<div class="div6" id="div10">
									<label><input type="checkbox" class="check" value=""/>中科院院士</label> 
									<label><input type="checkbox" class="check" value=""/>千人计划</label>
									<label><input type="checkbox" class="check" value=""/>百人计划</label> 
									<label><input type="checkbox" class="check" value=""/>985、211高校二级教授</label>
									<label><input type="checkbox" class="check" value=""/>工程院院士</label> 
									<label><input type="checkbox" class="check" value=""/>万人计划</label>
								</div>
								<div class="div6">
									<label><input type="checkbox" class="check" value=""/>百千万人才工程国家级人选</label> 
									<label><input type="checkbox" class="check" value=""/>创新人才推进计划</label>
									<label><input type="checkbox" class="check" value=""/>973首席专家</label> 
									<label><input type="checkbox" class="check" value=""/>长江学者</label>
									<label><input type="checkbox" class="check" value=""/>国务院政府特殊津贴</label> 
								</div>
								<div class="div6" id="div11">
									<label><input type="checkbox" class="check" value=""/>发达国家科学院院士</label>
									<label><input type="checkbox" class="check" value=""/>863领域专家</label> 
									<label><input type="checkbox" class="check" value=""/>国家杰青</label>
									<label><input type="checkbox" class="check" value=""/>国务院政府特殊津贴</label> 
									<label><input type="checkbox" class="check" value=""/>无</label>
								</div>
							</th>
						</tr>
					</table>
					<div class=" clearfix">
						<button id="submit" type="button" class="btn">提交</button>
						<button id="submit" type="button" class="btn">重置</button>
					</div>
				</div>
				
				<!--国际学科-->
				<div id="international" class="below">
					<table border="1px" cellpadding="0" cellspacing="0">
						<tr>
							<th class="t1">一级学科</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">学科代码</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">熟悉程度</th>
							<th class="t1">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1">参与兴趣程度</th>
							<th class="t1 t2">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
						<tr>
							<th class="t1">二级学科</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">学科代码</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">熟悉程度</th>
							<th class="t1">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1">参与兴趣程度</th>
							<th class="t1 t2">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
						<tr>
							<th class="t1">三级学科</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">学科代码</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">熟悉程度</th>
							<th class="t1">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1">参与兴趣程度</th>
							<th class="t1 t2">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
						<tr>
							<th class="t1 t3">四级学科</th>
							<th class="t1 t3"><input type="text" class="subject"/></th>
							<th class="t1 t3">学科代码</th>
							<th class="t1 t3"><input type="text" class="subject"/></th>
							<th class="t1 t3">熟悉程度</th>
							<th class="t1 t3">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1 t3">参与兴趣程度</th>
							<th class="t1 t2 t3">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
					</table>
					<div class=" clearfix">
						<button id="submit" type="button" class="btn">提交</button>
						<button id="submit" type="button" class="btn">重置</button>
					</div>
				</div>
				
				<!--教育学科-->
				<div id="education" class="below">
					<table border="1px" cellpadding="0" cellspacing="0">
						<tr>
							<th class="t1">一级学科</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">学科代码</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">熟悉程度</th>
							<th class="t1">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1">参与兴趣程度</th>
							<th class="t1 t2">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
						<tr>
							<th class="t1">二级学科</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">学科代码</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">熟悉程度</th>
							<th class="t1">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1">参与兴趣程度</th>
							<th class="t1 t2">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
						<tr>
							<th class="t1">三级学科</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">学科代码</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">熟悉程度</th>
							<th class="t1">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1">参与兴趣程度</th>
							<th class="t1 t2">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
						<tr>
							<th class="t1 t3">四级学科</th>
							<th class="t1 t3"><input type="text" class="subject"/></th>
							<th class="t1 t3">学科代码</th>
							<th class="t1 t3"><input type="text" class="subject"/></th>
							<th class="t1 t3">熟悉程度</th>
							<th class="t1 t3">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1 t3">参与兴趣程度</th>
							<th class="t1 t2 t3">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
					</table>
					<div class=" clearfix">
						<button id="submit" type="button" class="btn">提交</button>
						<button id="submit" type="button" class="btn">重置</button>
					</div>
				</div>
				
				<!--基金学科-->
				<div id="fund" class="below">
					<table border="1px" cellpadding="0" cellspacing="0">
						<tr>
							<th class="t1">一级学科</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">学科代码</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">熟悉程度</th>
							<th class="t1">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1">参与兴趣程度</th>
							<th class="t1 t2">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
						<tr>
							<th class="t1">二级学科</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">学科代码</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">熟悉程度</th>
							<th class="t1">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1">参与兴趣程度</th>
							<th class="t1 t2">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
						<tr>
							<th class="t1">三级学科</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">学科代码</th>
							<th class="t1"><input type="text" class="subject"/></th>
							<th class="t1">熟悉程度</th>
							<th class="t1">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1">参与兴趣程度</th>
							<th class="t1 t2">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
						<tr>
							<th class="t1 t3">四级学科</th>
							<th class="t1 t3"><input type="text" class="subject"/></th>
							<th class="t1 t3">学科代码</th>
							<th class="t1 t3"><input type="text" class="subject"/></th>
							<th class="t1 t3">熟悉程度</th>
							<th class="t1 t3">
								<select class="level">
									<option>非常熟悉</option>
									<option>一般熟悉</option>
									<option>了解</option>
									<option>不熟悉</option>
								</select>
							</th>
							<th class="t1 t3">参与兴趣程度</th>
							<th class="t1 t2 t3">
								<select class="level">
									<option>非常感兴趣</option>
									<option>一般感兴趣</option>
									<option>不感兴趣</option>
								</select>
							</th>
						</tr>
					</table>
					<div class=" clearfix">
						<button id="submit" type="button" class="btn">提交</button>
						<button id="submit" type="button" class="btn">重置</button>
					</div>
				</div>
				
				<!--服务的经纪行业列表-->
				<div id="service" class="below">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<th class="t1">一级领域</th>
							<th class="t1">二级领域</th>
							<th class="t1">三级领域</th>
							<th class="t1 t2">四级领域</th>
						</tr>
						<tr>
							<th class="t1"><input type="text" class="field"/></th>
							<th class="t1"><input type="text" class="field"/></th>
							<th class="t1"><input type="text" class="field"/></th>
							<th class="t1 t2"><input type="text" class="field"/></th>
						</tr>
						<tr>
							<th class="t1"><input type="text" class="field"/></th>
							<th class="t1"><input type="text" class="field"/></th>
							<th class="t1"><input type="text" class="field"/></th>
							<th class="t1 t2"><input type="text" class="field"/></th>
						</tr>
						<tr>
							<th class="t1 t3"><input type="text" class="field"/></th>
							<th class="t1 t3"><input type="text" class="field"/></th>
							<th class="t1 t3"><input type="text" class="field"/></th>
							<th class="t1 t2 t3"><input type="text" class="field"/></th>
						</tr>
					</table>
					<div class=" clearfix">
						<button id="submit" type="button" class="btn">提交</button>
						<button id="submit" type="button" class="btn">重置</button>
					</div>
				</div>
					
				</div>
				
			</form>
			
		</div>
		<footer>
			<p class="ff">免责声明 | 备案号：京ICP备15000234号-1 Copyright&copy;中关村四方现代服务产业技术创新战略联盟 </p>
		</footer>
	</body>
</html>
