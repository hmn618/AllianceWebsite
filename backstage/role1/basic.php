<?php
    require_once("../checklogin.php");
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>基本信息</title>
		<link rel="stylesheet" type="text/css" href="../../css/leftNav.css" />
		<link rel="stylesheet" type="text/css" href="../../css/basic1.css" />
		<link rel="stylesheet" type="text/css" href="../../css/header&footer.css" />
		<link rel="icon" href="../../img/logo.png" type="image/x-icon" />
		<script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="../../js/jquery.form.js"></script>
		<script type="text/javascript" src="../../js/jquery.validate.js"></script>
		<script type="text/javascript" src="../../js/tendina.min.js"></script>
		<script src="../../js/kindeditor.js"></script>
		<script type="text/javascript" src="../../js/role1basic.js"></script>
	</head>
	
	<body>
		<header>
			<p class="hh">退出</p>
			<img id="logout" class="exit" src="../../img/exist.png">
			<p class="hh">个人会员：<?php echo $user;?></p>
		</header>
		
		<!----------leftNav-------------->
		<div class="leftNav">
			<img src="../../img/backlogo.png" alt="" class="backlogo" />
			<h1 id="leftName">后台管理系统</h1>
			<ul id="leftNav">
				<li id="shang"><a href="index.php">账号资料<img class="icon" src="../../img/user.png" alt=""/></a></li>
				<li class="active"><a href="#">基本信息<img class="icon" src="../../img/basic-info.png" alt=""/></a></li>
				<li><a href="#">扩展信息<img class="icon" src="../../img/ex-info.png" alt=""/></a>
							<ul>
								<li><a href="domain.php">工作领域<img src="../../img/work-filed.png" class="icon" alt=""/></a></li>
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
				<p class="bread"><a href="#">首页</a>><a href="#">后台管理</a>><a href="#">基本信息</a></p>
			</div>
			<!--基本信息-->
			<form id="information" class="clearfix" method="post">
					<div id="basic" class="module">
						<!-------------------basic information----------------->
						<div class="row clearfix" id="row1">
							<div class="subrow3">
								<h1>基本信息<div id="star">*</div></h1>
							</div>
							<div class="left">
								<div id="subrow1" class="subrow clearfix">
									<p id="name" class="labelname">姓名</p>
									<input type="text" id="name_in" name="field1" class="label_in"/>
									<p id="sex" class="labelname">性别</p>
									<input type="radio" name="sex"  class="label_in sex" value="男" id="man"/><p class="labelname">男</p>
									<input type="radio" name="sex"  class="label_in sex" value="女" id="woman"/><p class="labelname">女</p>
									<p id="birthday" class="labelname">出生日期</p>
									<input type="text" id="birthday_in" name="field3" class="label_in"/>
								</div> 
								<div id="subrow2" class="subrow clearfix">
									<p id="idType" class="labelname">证件</p>
									<select id="idType_in" name="field4" class="label_in" >
										<option value="">证件类型</option>
										<option value="身份证">身份证</option>
										<option value="护照">护照</option>
									</select>
									<input type="text" id="idNo_in" name="field5" class="label_in" placeholder="证件号码"/>
								</div>
								<div id="subrow3" class="subrow clearfix">
									<p id="nation" class="labelname">民族</p>
									<input type="text" id="nation_in" name="field6" class="label_in"/>
									<p id="party" class="labelname">党派</p>
									<input type="text" id="party_in" name="field7" class="label_in"/>
								</div>
							</div>
							<div id="album">
								<img id="photo_in"name="field8" border=0 src=''>
								<div id="photoset">
									<input type="button" class="btn" id="photoCover" value="照片" onClick="javascript:clickImgUp();" />
								</div>
							</div>
							
							
							<!--<div id="preview"> 
							</div> -->
								<input type="file" id="photoUpload" name="photoUpload" />
							
						</div>
						
						
						<!------------work experience------------------->
						<div class="row" id="row2">
							<div class="subrow3">
								<h1>工作经历</h1>
							</div>
							<div class="subrow2 clearfix" id="subrow4">
								<p id="company" class="labelname">工作单位<div id="star">*</div></p>
								<input type="text" id="company_in" name="field9" class="label_in"/>
								<p id="second" class="labelname">二级单位</p>
								<input type="text" id="second_in" name="field13" class="label_in"/>
								<p id="comType" class="labelname">单位类型</p>
								<input type="text" id="comType_in" name="field10" class="label_in"/>
							</div>
							<div id="subrow5" class="subrow2 clearfix">
								<p id="city" class="labelname">单位所在地<div id="star">*</div></p>
								<input type="text" id="city_in" name="field14" class="label_in"/>
								<p id="job" class="labelname">现任职务<div id="star">*</div></p>
								<input type="text" id="job_in" name="field11" class="label_in"/>
								<p id="jobname" class="labelname">职称<div id="star">*</div></p>
								<input type="text" id="jobname_in" name="field15" class="label_in"/>
								<p id="status" class="labelname">在职状态<div id="star">*</div></p>
								<select id="status_in" name="field12" class="label_in">
									<option value="在职">在职</option>
									<option value="离职">离职</option>
								</select>
							</div>
							<div class="exper">
								<p class="labelname experDescription" >经历描述<div id="star">*</div></p>
								<textarea rows="10" name="field16" class="label_i" id="exper1"></textarea>
							</div>
						</div>
					
					
					<!----------------------study experience---------------->
					<div class="row" id="row2">
						<div class="subrow3">
							<h1>学习经历</h1>
						</div>
						<div class="subrow2 clearfix" id="subrow6">
							<p id="degree" class="labelname">最高学位<div id="star">*</div></p>
							<input type="text" id="degree_in" name="field17" class="label_in"/>
							<p id="univer" class="labelname">毕业学校<div id="star">*</div></p>
							<input type="text" id="univer_in" name="field21" class="label_in"/>
							<p id="time" class="labelname">毕业时间</p>
							<input type="text" id="time_in" name="field18" class="label_in"/>
						</div>
						<div class="subrow2 clearfix" id="subrow7">
							<p id="profession" class="labelname">所学专业<div id="star">*</div></p>
							<input type="text" id="profession_in" name="field22" class="label_in1"/>
							<p id="domain" class="labelname">研究领域<div id="star">*</div></p>
							<input type="text" id="domain_in" name="field19" class="label_in1"/>
							<p id="year" class="labelname">从事年限<div id="star">*</div></p>
							<input type="text" id="year_in" name="field23" class="label_in1"/>
							<p id="paper" class="labelname">论文数量</p>
							<input type="text" id="paper_in" name="field20" class="label_in1"/>
						</div>
						<div class="exper">
							<p class="labelname experDescription">经历描述<div id="star">*</div></p>
							<textarea rows="10" name="field24" class="label_i" id="exper2"></textarea>
						</div>					
					</div>
					
					<!-------------------connect function------------------->
					<div class="row clearfix">
						<div class="subrow3">
							<h1>联系方式</h1>
						</div>
						<div class="subrow2 clearfix" id="subrow8">
							<p id="mobile" class="labelname">手机号码<div id="star">*</div></p>
							<input type="text" id="mobile_in" name="field25" class="label_in"/>
							<p id="email" class="labelname">E-mail<div id="star">*</div></p>
							<input type="text" id="email_in" name="field30" class="label_in"/>
							<p id="add" class="labelname">通讯地址<div id="star">*</div></p>
							<input type="text" id="add_in" name="field26" class="label_in"/>
						</div>		
						<div class="subrow2 clearfix" id="subrow9">
							<p id="postcode" class="labelname">通讯邮编<div id="star">*</div></p>
							<input type="text" id="postcode_in" name="field31" class="label_in"/>
							<p id="phone" class="labelname">办公电话</p>
							<input type="text" id="phone_in" name="field27" class="label_in"/>
							<p id="tax" class="labelname">办公传真</p>
							<input type="text" id="tax_in" name="field32" class="label_in"/>
							<p id="family" class="labelname">家庭电话</p>
							<input type="text" id="family_in" name="field28" class="label_in"/>
						</div>		
						<div class="subrow2 clearfix" id="subrow10">
							<p id="famAdd" class="labelname">家庭地址</p>
							<input type="text" id="famAdd_in" name="field33" class="label_in"/>
							<p id="post" class="labelname">家庭邮编</p>
							<input type="text" id="post_in" name="field29" class="label_in"/>
						</div>					
					</div> 
					
					<!--------------Account------------->
					<div class="row clearfix">
						<div class="subrow3" id="accountInfo">
							<h1>账户信息</h1>	
						</div>
						<div id="subrow12" class="subrow2 clearfix">
							<p id="bank" class="labelname">银行账号</p>
							<input type="text" id="bank_in" name="field34" class="label_in"/>
							<p id="openBank" class="labelname">开户行</p>
							<input type="text" id="openBank_in" name="field35" class="label_in"/>
						</div>
					</div>
				
				<!---------------Other Contactors------------------>
				<div class="row clearfix">
					<div class="subrow3">
						<h1>紧急联系人<div id="star">*</div></h1>	
					</div>
					<div class="subrow2 clearfix" id="subrow11">
						<p id="other" class="labelname">紧急联系人</p>
						<input type="text" id="other_in" name="field36" class="label_in"/>
						<p id="otherNo" class="labelname">紧急联系人电话</p>
						<input type="text" id="otherNo_in" name="field37" class="label_in"/>
					</div>
				</div>
				
				<!--------------buttons------------------------>
				<div id="btngroup">
					<input class="btn" id="submit" type="submit" value="提交"/>
					<button class="btn" id="reset" type="button">重置</button>
				</div>
				
				</div>
				</form>
		</div>
		<footer>
			<p class="ff">免责声明 | 备案号：京ICP备15000234号-1 Copyright&copy;中关村四方现代服务产业技术创新战略联盟 </p>
		</footer>
	</body>
</html>