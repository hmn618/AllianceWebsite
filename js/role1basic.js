/*功能：个人会员的基本信息页
 *输入：ajax表单
 *输出：json
 *作者：赵文骏、杨卓
 *开发时间：2016.7.14
 *最后修改时间：2016.7.14
*/

/*----------------------photo------------------------*/


window.onload=function(){
$("#photoUpload").wrap("<form id='myupload' action='../role1/action/handleImage.php' method='post' enctype='multipart/form-data'></form>");
					$("#photoUpload").on("change",function(){ 
					    $("#myupload").ajaxSubmit({
					        dataType:  'json', 
					        success: function(data) { 
					        	var a=JSON.stringify(data);
					        	alert(a);
					        	var url=data.name;
								console.log(url);
								var serviceurl=url.replace("../upload/img/","upload/img/"); 
					            $("#photo_in").attr("src","../"+serviceurl);
					            $("#photo_in").attr("data-url",serviceurl);
					            $("#photo_in").attr("alt",url);
								$("#photo_in").show();
					        },
					        error:function(xhr){ //fail to upload
					        	console.log("error");
					            console.log(xhr.responseText); //return the error msg
					        }
					    });
 });
 
}




function clickImgUp(){
	document.getElementById('photoUpload').click();
}

/*function previewImage(file) 
{ 
var MAXWIDTH = 105; 
var MAXHEIGHT = 147; 
var div = document.getElementById('preview'); 
if (file.files && file.files[0]) 
{ 
var img = document.getElementById('photo_in'); 
img.onload = function(){ 
var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight); 
img.width = rect.width; 
img.height = rect.height; 
img.style.marginLeft = rect.left+30+'px'; 
img.style.marginTop = rect.top+'px'; 
} 
var reader = new FileReader(); 
reader.onload = function(evt){img.src = evt.target.result;} 
reader.readAsDataURL(file.files[0]); 
} 
else 
{ 
var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="'; 
file.select(); 
var src = document.selection.createRange().text; 
var img = document.getElementById('photo_in'); 
img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src; 
var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight); 
status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height); 
div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;margin-left:"+rect.left+"px;"+sFilter+src+"\"'></div>"; 
} 
} 
function clacImgZoomParam( maxWidth, maxHeight, width, height ){ 
var param = {top:0, left:0, width:width, height:height}; 
if( width>maxWidth || height>maxHeight ) 
{ 
rateWidth = width / maxWidth; 
rateHeight = height / maxHeight; 

if( rateWidth > rateHeight ) 
{ 
param.width = maxWidth; 
param.height = Math.round(height / rateWidth); 
}else 
{ 
param.width = Math.round(width / rateHeight); 
param.height = maxHeight; 
} 
} 

param.left = Math.round((maxWidth - param.width) / 2); 
param.top = Math.round((maxHeight - param.height) / 2); 
return param; 
} */


$(document).ready(function(){
	
	//点击提交按钮发送ajax

	
	//从数据库读入已存信息
	$.ajax({
		type:"post",
		url:'action/basic.php',
		crossDomain:true,
		dataType:"json",
		success:function(data){
//			var a=JSON.stringify(data);
//			//alert(a)
			if(data.SUCCESS==true){	
				// 基本信息
				//alert(data.photodir);
				$("#name_in").val(data.name);
				if(data.sex=="男")
					$("#man").attr("checked","checked");
				else if(data.sex=="女")	
					$("#woman").attr("checked","checked");
				$("#idNo_in").val();
				$("#birthday_in").val(data.birthday);
				$("#idNo_in").val(data.cardnum);
				$("#idType_in").val(data.cardtype);
				$("#nation_in").val(data.nation);
				$("#party_in").val(data.party);
				$("#photo_in").attr("src", "../"+data.photodir);
				//alert("图片路径："+"../"+data.photodir)
						
						// 工作经历
				$("#company_in").val(data.workunit);
				$("#second_in").val(data.subunit);
				$("#comType_in").val(data.unittype);
				$("#city_in").val(data.unitlocation);
				$("#job_in").val(data.profession);
				$("#jobname_in").val(data.title);
				$("#status_in").val(data.profession_state);
				$("#exper1").val(data.workexperience);
						
						// 学习经历
				$("#degree_in").val(data.degree);
				$("#univer_in").val(data.school);
				$("#time_in").val(data.graduate);
				$("#profession_in").val(data.major);
				$("#domain_in").val(data.field);
				$("#year_in").val(data.worktime);
				$("#paper_in").val(data.paper);
				$("#exper2").val(data.studyexperience);
						
				// 联系方式
				$("#mobile_in").val(data.mobile);
				$("#email_in").val(data.email);
				$("#add_in").val(data.addr);
				$("#postcode_in").val(data.post);
				$("#phone_in").val(data.tel);
				$("#tax_in").val(data.fax);
				$("#famAdd_in").val(data.homeaddr);
				$("#post_in").val(data.homepost);
				$("#family_in").val(data.hometel);
				
				// 账户信息
				$("#bank_in").val(data.banknum);
				$("#openBank_in").val(data.bank);
				
				// 其他联系人
				$("#other_in").val(data.contacter);
				$("#otherNo_in").val(data.contactertel);
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
		}
	});
	
	
//校验函数
	KindEditor.ready(function(K) {
		var editor = K.editor({
			allowFileManager : true
		});

		K("#upload").click(function() {
			editor.loadPlugin('image', function() {
				editor.plugin.imageDialog({
					showRemote : false,
					imageUrl : K('#url3').val(),
					clickFn : function(url, title, width, height, border, align) {
						K('#url3').val(url);
						editor.hideDialog();
					}
				});
			});
		});
	});
	
	
/*----------------------------------validate-----------------------------------*/
	
	
//登出函数
	$("#logout").click(function(){
		window.location.href = "../checklogout.php";
	});
	
	$("#submit").click(function(){
		
	//function regsubmit(){
		var name=$("#name_in").val();
		var sex=$("input:radio[name='sex']:checked").val();		
		//alert(sex);
		var birthday=$("#birthday_in").val();
		var idType=$("#idType_in").val();
		var idNo=$("#idNo_in").val();
		var nation=$("#nation_in").val();
		var party=$("#party_in").val();
		//var photo=$("#photo_in").data('url');
		var photo=$("#photo_in").attr("src");
		
	        photo=photo.substring(3,photo.length);
		//alert("照片路径："+photo);
		//alert(photo);
		var company=$("#company_in").val();
		var comType=$("#comType_in").val();
		var job=$("#job_in").val();
		var status=$("#status_in").val();
		var second=$("#second_in").val();
		var city=$("#city_in").val();
		var jobname=$("#jobname_in").val();
		var exper1=$("#exper1").val();
		var degree=$("#degree_in").val();
		var time=$("#time_in").val();
		var domain=$("#domain_in").val();
		var paper=$("#paper_in").val();
		var university=$("#univer_in").val();
		var profession=$("#profession_in").val();
		var year=$("#year_in").val();
		var exper2=$("#exper2").val();
		var mobile=$("#mobile_in").val();
		var address=$("#add_in").val();
		var phone=$("#phone_in").val();
		var family=$("#family_in").val();
		var post=$("#post_in").val();
		var email=$("#email_in").val();
		var postcode=$("#postcode_in").val();
		var tax=$("#tax_in").val();
		var famAdd=$("#famAdd_in").val();
		var bank=$("#bank_in").val();
		var open=$("#openBank_in").val();
		var other=$("#other_in").val();
		var otherNo=$("#otherNo_in").val();
		var datatosend={
			//基本信息
			"name":name,
			"sex":sex,
			"birthday":birthday,
			"cardtype":idType,
			"cardnum":idNo,
			"nation":nation,
			"party":party,
			"photodir":photo,
			// 工作经历
			"workunit":company,
			"subunit":second,
			"unittype":comType,
			"unitlocation":city,
			"profession":job,
			"title":jobname,
			"profession_state":status,
			"workexperience":exper1,
			
			// 学习经历
			"degree":degree,
			"school":university,
			"graduate":time,
			"major":profession,
			"field":domain,
			"worktime":year,
			"paper":paper,
			"studyexperience":exper2,
			
			// 联系方式
			"mobile":mobile,
			"email":email,
			"addr":address,
			"post":postcode,
			"tel":phone,
			"fax":tax,
			"hometel":family,
			"homeaddr":famAdd,
			"homepost":post,
			
			// 账户信息
			"banknum":bank,
			"bank":open,
			
			// 其他联系人
			"contacter":other,
			"contactertel":otherNo	
		};
		
/*--------------------validate-------------------*/
     var reg_date=/^([1-2]\d{3})[\/|\-](0?[1-9]|10|11|12)[\/|\-]([1-2]?[0-9]|0[1-9]|30|31)$/;
     var reg_email=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     var reg_telphone=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
     var reg_phone=/^[+]{0,1}(\d){1,3}[ ]?([-]?(\d){1,12})+$/;
     var reg_num=/^[0-9]{1,20}$/; 
     var reg_postcode=/^[a-zA-Z0-9 ]{3,12}$/;  
     
		
		if(name==""){
			alert("请输入您的姓名");
			return false;
		}
		if(sex==undefined||sex==null||sex==""){
			alert("请选择您的性别");
			return false;
		}
		if(birthday==""){
			alert("请输入您的出生日期");
			return false;
		}
		else if(!reg_date.test(birthday)){
			alert("请输入正确格式的出生日期,例：xxxx-xx-xx");
			return false;
		}
		if(idType==0){
			alert("请选择证件类型");
			return false;
		}
		if(idNo==""){
			alert("请输入您的证件号码");
			return false;
		}else if(!reg_num.test(idNo)){
			alert("请输入正确格式的证件号码");
			return false;
		}
			
		if(nation==""){
			alert("请输入您的民族");
			return false;
		}
		if(party==""){
			alert("请输入您的党派");
			return false;
		}
			
		if(photo==""||photo=="null"||photo=="undefined"){
			alert("请上传您的照片");
			return false;
		}
		if(company==""){
			alert("请输入您的工作单位");
			return false;
		}
//		if(second==""){
//			alert("请输入您的二级单位");
//			return false;
//		}
//		if(comType==""){
//			alert("请输入您的单位类型");
//			return false;
//		}
		if(city==""){
			alert("请输入您的单位所在地");
			return false;
		}
		if(job==""){
			alert("请输入您的现任职务");
			return false;
		}
		if(jobname==""){
			alert("请选择您的职称");
			return false;
		}
		if(status==""){
			alert("请输入您的在职状态");
			return false;
		}
		if(exper1==""||exper1==null){
			alert("请描述您的工作经历");
			return false;
		}
		if(degree==""){
			alert("请输入您的最高学位");
			return false;
		}
		if(university==""){
			alert("请输入您的毕业学校");
			return false;
		}
//		if(time==""){
//			alert("请输入您的毕业时间");
//			return false;
//		}else if(!reg_date.test(time)){
//			alert("请输入正确格式的毕业时间");
//			return false;
//		}
		if(profession==""){
			alert("请输入您所学专业");
			return false;
		}
		if(domain==""){
			alert("请输入您的专业领域");
			return false;
		}
		if(year==""){
			alert("请输入从事该领域年限");
			return false;
		}else if(!reg_num.test(year)){
			alert("请输入正确格式的年限");
			return false;
		}
		if(exper2==""||exper2==null){
			alert("请描述您的学习经历");
			return false;
		}
		if(mobile==""){
			alert("请输入您的手机号码");
			return false;
		}else if(!reg_telphone.test(mobile)){
			alert("请输入正确格式的手机号码");
			return false;
		}
		if(email==""){
			alert("请输入您的E-mail");
			return false;
		}else if(!reg_email.test(email)){
			alert("请输入正确格式的email");
			return false;
		}
		if(address==""){
			alert("请输入您的通讯地址");
			return false;
		}
		if(postcode==""){
			alert("请输入您的通讯邮编");
			return false;
		}else if(!reg_postcode.test(postcode)){
			alert("请输入正确格式的通讯邮编");
			return false;
		}
//		if(bank==""){
//			alert("请输入您的银行账号");
//			return false;
//		}else if(!reg_num.test(bank)){
//			alert("请输入正确格式的银行账号");
//			return false;
//		}
//		if(open==""){
//			alert("请输入您的开户行");
//			return false;
//		}
		if(other==""){
			alert("请输入紧急联系人");
			return false;
		}
		if(otherNo==""){
			alert("请输入紧急联系人电话");
			return false;
		}
		else if(!reg_phone.test(otherNo)&&!reg_telphone.test(otherNo)){
			alert("请输入正确格式的联系电话");
			return false;
		}
		else{
			alert("基本信息提交成功！");
		}
		
		$.ajax({
			type:"post",
			url:'action/basic_update.php',
			data:datatosend,
			dataType: "json",
			success:function(data){
	//						var a=JSON.stringify(data);
	//						alert(a)
				if(data.SUCCESS==true){
					alert(data.MSG);
				}
				
			},
			error:function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
			}				
		});	
		
		
	});
})