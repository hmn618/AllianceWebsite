<?php
/**功能：读取企业基本信息
 *输入：ajax表单
 *输出：json
 *作者：刘庆、
 *开发时间：2016.7.15
 *最后修改时间：2016.7.17
 */
require_once("../checklogin.php");
require_once("action/index.php");
$name = $_SESSION['user'];
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>基本信息</title>
	<link href="../../css/info12.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="../../css/leftNav1.css"/>
	<link rel="icon" href="../../img/logo.png" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="../../css/header&footer.css" />
	<script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="../../js/jquery.form"></script>
    <script type="text/javascript" src="../../js/jquery.validate.js"></script>
    <script type="text/javascript" src="../../js/tendina.min.js"></script>
    <script src="../../js/kindeditor.js"></script>
    <script type="text/javascript" src="../../js/role2basic.js"></script>
</head>

<body>

<div class="main">
    <div class="main_left">
        <div class="leftNav clearfix">
            <img src="../../img/account/info-logo.png" alt="" class="backlogo"/>
            <h1 id="leftName">后台管理系统</h1>
            <ul id="leftNav">
                <li><a href="index.php">账号资料<img class="icon" src="../../img/企业会员/user.png" alt=""/></a></li>
                <li class="active"><a href="#">基本信息<img class="icon" src="../../img/企业会员/basic-info.png" alt=""/></a></li>
                <li><a href="extend.php">扩展信息<img class="icon" src="../../img/企业会员/ex-info.png" alt=""/></a></li>
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
                <img src="../../img/account/index-pic.png">
            </div>
            <div class="top_text">
               <span>首页&nbsp;&nbsp>&nbsp;&nbsp后台管理&nbsp;&nbsp>&nbsp;&nbsp;基本信息</span>
            </div>
        </div>
        <div class="right_bottom">
            <div class="content">
                <div class="content_top">
                    <div class="top_left">
                        <span>基本信息</span>
                    </div>
                </div>
                <div class="content_bottom">
                    <div class="bottom_left">
                        <span>单位名称</span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="input_text" id="name"><br/>
                        <span>通讯地址</span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  class="input_text" name="addr" id="addr"><br/>
                        <span>单位性质</span>&nbsp;&nbsp;
                        &nbsp;<input type="radio" name="defaultBank" value="企业" id="qiye" checked="checked"/>&nbsp;企业&nbsp;
                        &nbsp;<input type="radio" name="defaultBank" value="科研院所" id="keyanyuansuo"/>&nbsp;科研院所&nbsp;
                        &nbsp;<input type="radio" name="defaultBank" value="高等院校" id="gaodengyuanxiao"/>&nbsp;高等院校&nbsp;
                        &nbsp;<input type="radio" name="defaultBank" value="其他" id="qita"/>&nbsp;其他<br/><br/>

                        <span>申请成员等级</span>&nbsp;&nbsp;
                        &nbsp;<input type="radio" name="default" id="zhuce_chengyuan" value="注册成员"  checked="checked"/>&nbsp;注册成员&nbsp;&nbsp;
                        &nbsp;<input type="radio" name="default" id="lishi_chengyuan" value="理事成员"/>&nbsp;理事成员<br/>

                    </div>
                    <div class="bottom_mid">
                        <span>邮编</span>&nbsp;&nbsp;<input type="text" class="input_text3" name="postcode" id="postcode"><br/>
                        <span>电话</span>&nbsp;&nbsp;<input type="text" class="input_text3" name="tel" id="tel"><br/>
                        <span>传真</span>&nbsp;&nbsp;<input type="text" class="input_text3" name="fax" id="fax"><br/>
                    </div>
                    <div class="bottom_right">
                        <form action="upload_image.php" method="post" enctype="multipart/form-data" >
                            <div class="enter">
                                <div id="preview" style="border:1px solid #ccc; width:105px; height:147px;">
                                    <img id="photo_in" style="width:105px;height:147px;" name="field8" border=0 src=''>
                                </div>
                                <div class="pic_btn">
            							<div id="photoset">
								<input type="button" class="btn" id="photoCover" value="Logo" onClick="javascript:clickImgUp();" />
							</div>
							
							<!--<div id="preview"> 
							</div> -->
								<input type="file" id="photoUpload" name="photoUpload" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="content_1">
                    <span>贵单位所属行业</span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  class="input_text4" name="field" id="field">
                    <span>主页</span>&nbsp;&nbsp;<input type="text"  class="input_text2" name="homepage" id="homepage"></br>
                </div>
                <div class="content_top">
                    <div class="top_left">
                        <span>法定代表人</span>
                    </div>
                </div>
                <div class="content_2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>姓名</span>&nbsp;&nbsp;<input type="text" class="input_text1" name="faren_name" id="faren_name">
                    <span>手机</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="faren_tel" id="faren_tel"
                    <span>电子邮件</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="faren_mail" id="faren_mail">
                </div>

                <div class="content_top">
                    <div class="top_left">
                        <span>负责人</span>
                    </div>
                </div>
                <div class="content_2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>姓名</span>&nbsp;&nbsp;<input type="text" class="input_text1" name="fuzeren_name" id="fuzeren_name">
                    <span>手机</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="fuzeren_tel" id="fuzeren_tel">
                    <span>电子邮件</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="fuzeren_mail" id="fuzeren_mail">
                </div>

                <div class="content_top">
                    <div class="top_left">
                        <span>联系人（市场部）</span>
                    </div>
                </div>

                <div class="content_2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>姓名</span>&nbsp;&nbsp;<input type="text" class="input_text1" name="contactor1_name" id="contactor1_name">
                    <span>手机</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="contactor1_tel" id="contactor1_tel">
                    <span>电子邮件</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="contactor1_mail" id="contactor1_mail">
                </div>

                <div class="content_top">
                    <div class="top_left">
                        <span>联系人（政府部门/政府关系）</span>
                    </div>
                </div>

                <div class="content_2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>姓名</span>&nbsp;&nbsp;<input type="text" class="input_text1" name="contactor2_name" id="contactor2_name">
                    <span>手机</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="contactor2_tel" id="contactor2_tel">
                    <span>电子邮件</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="contactor2_mail" id="contactor2_mail">
                </div>

                <div class="content_top">
                    <div class="top_left">
                        <span>联系人（战略合作部）</span>
                    </div>
                </div>

                <div class="content_2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>姓名</span>&nbsp;&nbsp;<input type="text" class="input_text1" name="contactor3_name" id="contactor3_name">
                    <span>手机</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="contactor3_tel" id="contactor3_tel">
                    <span>电子邮件</span>&nbsp;&nbsp;<input type="text" class="input_text2" name="contactor3_mail" id="contactor3_mail">
                </div>

                <div class="content_top">
                    <div class="top_left">
                        <span>公司简介</span>
                    </div>
                </div>
                <div class="content_3">
					 <textarea type="text" name="introduction" id="introduction">
                     </textarea>
                </div>
                 <div class="content_bnt">
                    <div class="log_bottom1" id="submit_btn">
                        <input type="submit" value="提交" class="btn"/>
                    </div>
                    <div class="log_bottom2" id="clear_btn">
                       <button class="btn" type="button">重置</button>
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
