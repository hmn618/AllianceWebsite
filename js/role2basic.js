/*功能：企业会员的基本信息页
 *输入：ajax表单
 *输出：json
 *作者：赵文骏、杨卓、刘庆
 *开发时间：2016.7.14
 *最后修改时间：2016.08.01
 *修改者：张城城
 */

/*----------------------photo------------------------*/

function clickImgUp(){
   document.getElementById('photoUpload').click();
}

   window.onload=function(){
   $("#photoUpload").wrap("<form id='myupload' action='../role2/action/handleImage.php' method='post' enctype='multipart/form-data'></form>");
   $("#photoUpload").on("change",function(){
   $("#myupload").ajaxSubmit({
   dataType:  'json',
   success: function(data) {
   var url=data.name;
   alert(url);
   var serviceurl=url.replace("../upload/img/","upload/img/");
   console.log(url);
   console.log(serviceurl);

   $("#photo_in").attr("src","../../"+serviceurl);
   $("#photo_in").show();


   },
   error:function(xhr){ //fail to upload
   console.log("error");
   console.log(xhr.responseText); //return the error msg
   }
   });
   });
   }

//校验函数接口
// $.validator.setDefaults({
//     submitHandler: function () {
//         regsubmit();
//     }
// });

$(document).ready(function () {
	//点击提交按钮发送ajax
	$("#submit_btn").click(function(){
		var name = $("#name").val();
	    var type = $("input:radio[name='defaultBank']:checked").val();
	    var status = $("input:radio[name='default']:checked").val();
	    var addr = $("#addr").val();
	    var homepage = $("#homepage").val();
	    var field = $("#field").val();
	    var postcode = $("#postcode").val();
	    var photodir=$("#photo_in").attr("src");
	    photodir=photodir.substring(6,photodir.length);
            //alert("照片存储路径："+photodir)
	    var tel = $("#tel").val();
	    var fax = $("#fax").val();
	    var faren_name = $("#faren_name").val();
	    var faren_tel = $("#faren_tel").val();
	    var faren_mail = $("#faren_mail").val();
	    var fuzeren_name = $("#fuzeren_name").val();
	    var fuzeren_tel = $("#fuzeren_tel").val();
	    var fuzeren_mail = $("#fuzeren_mail").val();
	    var contactor1_name = $("#contactor1_name").val();
	    var contactor1_tel = $("#contactor1_tel").val();
	    var contactor1_mail = $("#contactor1_mail").val();
	    var contactor2_name = $("#contactor2_name").val();
	    var contactor2_tel = $("#contactor2_tel").val();
	    var contactor2_mail = $("#contactor2_mail").val();
	    var contactor3_name = $("#contactor3_name").val();
	    var contactor3_tel = $("#contactor3_tel").val();
	    var contactor3_mail = $("#contactor3_mail").val();
	    var introduction = $("#introduction").val();
	    var datatosend = {
	        //基本信息
	        "name": name,
	        "type": type,
	        "status": status,
	        "addr": addr,
	        "homepage": homepage,
	        "field": field,
	        "postcode": postcode,
	        "photodir": photodir,      // 部署事修改
	        "tel": tel,
	        "fax": fax,
	        // 法定代表人
	        "faren_name": faren_name,
	        "faren_tel": faren_tel,
	        "faren_mail": faren_mail,
	        // 负责人
	        "fuzeren_name": fuzeren_name,
	        "fuzeren_tel": fuzeren_tel,
	        "fuzeren_mail": fuzeren_mail,
	
	        // 联系人（市场部）
	        "contactor1_name": contactor1_name,
	        "contactor1_tel": contactor1_tel,
	        "contactor1_mail": contactor1_mail,
	
	        // 联系人（政府部门/政府关系）
	        "contactor2_name": contactor2_name,
	        "contactor2_tel": contactor2_tel,
	        "contactor2_mail": contactor2_mail,
	
	        // 联系人（战略合作部）
	        "contactor3_name": contactor3_name,
	        "contactor3_tel": contactor3_tel,
	        "contactor3_mail": contactor3_mail,
	
	        "introduction": introduction
	    };
            // alert("长白山："+datatosend.photodir);
	    /*--------------------validate-------------------*/
	    var reg_date=/^([1-2]\d{3})[\/|\-](0?[1-9]|10|11|12)[\/|\-]([1-2]?[0-9]|0[1-9]|30|31)$/;
	    var reg_email=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	    var reg_telphone=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
	    var reg_phone=/^[+]{0,1}(\d){1,3}[ ]?([-]?(\d){1,12})+$/;
	    var reg_num=/^[0-9]{1,20}$/; 
	    var reg_postcode=/^[a-zA-Z0-9 ]{3,12}$/;  
	     
			
		if(name==""){
			alert("请输入贵单位单位名称");
			return false;
		}
		if(addr==""){
			alert("请输入贵单位通讯地址");
			return false;
		}
		if(field==""){
			alert("请输入贵单位所属行业");
			return false;
		}
		if(homepage==""){
			alert("请输入贵单位主页地址");
			return false;
		}
		/*把邮编设置为非必填项*/
		
		if(postcode!=""){
		if(!reg_postcode.test(postcode)){
			alert("请输入正确格式的通讯邮编");
			return false;
			}
		}

		/*
		if(postcode==""){
			alert("请输入贵单位邮编");
			return false;
		}else if(!reg_postcode.test(postcode)){
			alert("请输入正确格式的通讯邮编");
			return false;
		}
		*/
		if(photodir=="../images/<?php echo $logo_filename;?>"){
			alert("请上传您的照片");
			return false;
		}	
		if(tel==""){
			alert("请输入贵单位电话");
			return false;
		}else if(!reg_phone.test(tel)&&!reg_telphone.test(tel)){
			alert("请输入正确格式的联系电话");
			return false;
		}
		/*把邮编设置为非必填项*/
                if(fax!=""){
		if(!reg_phone.test(fax)&&!reg_telphone.test(fax)){
			alert("请输入正确格式的传真号码");
			return false;
		}
		}

		/*
		if(fax==""){
			alert("请输入贵单位传真");
			return false;
		}else if(!reg_phone.test(fax)&&!reg_telphone.test(fax)){
			alert("请输入正确格式的传真号码");
			return false;
		}
		*/
		/*法人信息设置为非必填选项*/
		
                
		if(faren_tel!=""){
                if(!reg_telphone.test(faren_tel)){
			alert("请输入正确格式的手机号码");
			return false;
			}
		}
		if(faren_mail!=""){
		if(!reg_email.test(faren_mail)){
			alert("请输入正确格式的email");
			return false;
			}
		}
		
		/*
		if(faren_name==""){
			alert("请输入贵单位法人代表姓名");
			return false;
		}
		if(faren_tel==""){
			alert("请输入法人代表手机号码");
			return false;
		}else if(!reg_telphone.test(faren_tel)){
			alert("请输入正确格式的手机号码");
			return false;
		}
		
		if(faren_mail==""){
			alert("请输入法人代表电子邮件地址");
			return false;
		}else if(!reg_email.test(faren_mail)){
			alert("请输入正确格式的email");
			return false;
		}
		*/

		if(fuzeren_name==""){
			alert("请输入贵单位负责人姓名");
			return false;
		}
		if(fuzeren_tel==""){
			alert("请输入负责人手机号码");
			return false;
		}else if(!reg_telphone.test(fuzeren_tel)){
			alert("请输入正确格式的手机号码");
			return false;
		}
		if(fuzeren_mail==""){
			alert("请输入负责人电子邮件地址");
			return false;
		}else if(!reg_email.test(fuzeren_mail)){
			alert("请输入正确格式的email");
			return false;
		}
		/*
		if(contactor1_name==""&&contactor2_name==""&&contactor3_name==""&&contactor1_tel==""&&contactor2_tel==""&&contactor3_tel==""&&contactor1_mail==""&&contactor2_mail==""&&contactor3_mail==""){
			alert("请至少选择一种部门关系填写");
			return false;
		}
		if(contactor1_name!=""&&contactor1_name!=null){
			if(contactor1_tel==""||contactor1_mail==""){
				alert("请填写完整的市场部门联系人消息");
				return false;
			}
			else if(!reg_telphone.test(contactor1_tel)){
				alert("请输入正确格式的手机号码");
				return false;
			}else if(!reg_email.test(contactor1_mail)){
				alert("请输入正确格式的email");
				return false;
			}
		}
		if(contactor1_tel!=""&&contactor1_tel!=null){
			if(contactor1_name==""||contactor1_mail==""){
				alert("请填写完整的市场部门联系人消息");
				return false;
			}
		}
		if(contactor1_mail!=""&&contactor1_mail!=null){
			if(contactor1_tel==""||contactor1_name==""){
				alert("请填写完整的市场部门联系人消息");
				return false;
			}
		}
		if(contactor2_name!=""&&contactor2_name!=null){
			if(contactor2_tel==""||contactor2_mail==""){
				alert("请填写完整的联系部门联系人消息");
				return false;
			}
			else if(!reg_telphone.test(contactor2_tel)){
				alert("请输入正确格式的手机号码");
				return false;
			}else if(!reg_email.test(contactor2_mail)){
				alert("请输入正确格式的email");
				return false;
			}
		}
		if(contactor2_tel!=""&&contactor2_tel!=null){
			if(contactor2_name==""||contactor2_mail==""){
				alert("请填写完整的联系部门联系人消息");
				return false;
			}
		}
		if(contactor2_mail!=""&&contactor2_mail!=null){
			if(contactor2_tel==""||contactor2_name==""){
				alert("请填写完整的联系部门联系人消息");
				return false;
			}
		}
		if(contactor3_name!=""&&contactor3_name!=null){
			if(contactor3_tel==""||contactor3_mail==""){
				alert("请填写完整的战略合作部门联系人消息");
				return false;
			}
			else if(!reg_telphone.test(contactor3_tel)){
				alert("请输入正确格式的手机号码");
				return false;
			}else if(!reg_email.test(contactor3_mail)){
				alert("请输入正确格式的email");
				return false;
			}
		}
		if(contactor3_tel!=""&&contactor3_tel!=null){
			if(contactor3_name==""||contactor3_mail==""){
				alert("请填写完整的战略合作部门联系人消息");
				return false;
			}
		}
		if(contactor3_mail!=""&&contactor3_mail!=null){
			if(contactor2_tel==""||contactor3_name==""){
				alert("请填写完整的战略合作部门联系人消息");
				return false;
			}
		}
		*/
		
	    $.ajax({
	        type: "post",
	        url: "action/basic_update.php",
	        data: datatosend,
	        dataType: "json",
	        success: function (data) {
	            // var a=JSON.stringify(data);
	            // alert(a);
	            if (data.SUCCESS == "true") {
	                alert("上传成功!");
	            }
	        },
	 
	       	error: function (XMLHttpRequest, textStatus, errorThrown) {
		        console.log("error!");
		        console.log(XMLHttpRequest.status);
		        console.log(XMLHttpRequest.readyState);
		        console.log(textStatus);
	        }
	    });
	    return false;
		
	})
})



$(document).ready(function () {
    //从数据库读入已存信息
    $.ajax({
        type: "post",
        url: 'action/basic_query.php',
        crossDomain: true,
        dataType: "json",
        success: function (data) {
			// var a=JSON.stringify(data);
			// alert(a);
            if (data.SUCCESS == true) {
                // 基本信息
                $("#name").val(data.name);
                if (data.type == "企业")
                    $("#qiye").attr("checked", "checked");
                else if (data.type == "科研院所")
                    $("#keyanyuansuo").attr("checked", "checked");
                else if (data.type == "高等院校")
                    $("#gaodengyuanxiao").attr("checked", "checked");
                else
                    $("#qita").attr("checked", "checked");

                if (data.status == "注册成员")
                    $("#zhuce_chengyuan").attr("checked", "checked");
                else
                    $("#lishi_chengyuan").attr("checked", "checked");

                $("#addr").val(data.addr);
                $("#homepage").val(data.homepage);
                $("#field").val(data.field);
		$("#photo_in").attr("src","../../"+data.logo);
                $("#postcode").val(data.postcode);
                $("#tel").val(data.tel);
                $("#fax").val(data.fax);
                $("#faren_name").val(data.faren_name);
                $("#faren_tel").val(data.faren_tel);
                $("#faren_mail").val(data.faren_mail);
                $("#fuzeren_name").val(data.fuzeren_name);
                $("#fuzeren_tel").val(data.fuzeren_tel);
                $("#fuzeren_mail").val(data.fuzeren_mail);
                $("#contactor1_name").val(data.contactor1_name);
                $("#contactor1_tel").val(data.contactor1_tel);
                $("#contactor1_mail").val(data.contactor1_mail);
                $("#contactor2_name").val(data.contactor2_name);
                $("#contactor2_tel").val(data.contactor2_tel);
                $("#contactor2_mail").val(data.contactor2_mail);
                $("#contactor3_name").val(data.contactor3_name);
                $("#contactor3_tel").val(data.contactor3_tel);
                $("#contactor3_mail").val(data.contactor3_mail);
                $("#introduction").val(data.introduction);
            }
        },
        error:function (data) {
            var a=JSON.stringify(data);
           // alert(a+"2");
        }
        // error: function (XMLHttpRequest, textStatus, errorThrown) {
        //     console.log(XMLHttpRequest.status);
        //     console.log(XMLHttpRequest.readyState);
        //     console.log(textStatus);
        // }
    });

    // 点击提交按钮
  /*  $("#submit_btn").click(function () {
        regsubmit();
    });*/

    // 重置按钮
    $("#clear_btn").click(function () {

        $("#qiye").removeAttr("checked");
        $("#keyanyuansuo").removeAttr("checked");
        $("#gaodengyuanxiao").removeAttr("checked");
        $("#qita").removeAttr("checked");

        $("#zhuce_chengyuan").removeAttr("checked");
        $("#lishi_chengyuan").removeAttr("checked");

        $(":input").val("");
    });

    //登出函数
    $("#logout").click(function () {
        window.location.href = "../checklogout.php";
    });
});

// JavaScript Document
/*
function clickImgUp(){
    document.getElementById('image_upload').click();
}
*/
function previewImage(file)
{
    var MAXWIDTH = 200;
    var MAXHEIGHT = 200;
    var div = document.getElementById('preview');
    if (file.files && file.files[0])
    {
        div.innerHTML = '<img id=imghead>';
        var img = document.getElementById('imghead');
        img.onload = function(){
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            img.width = rect.width;
            img.height = rect.height;
            img.style.marginLeft = rect.left+'px';
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
        div.innerHTML = '<img id=imghead>';
        var img = document.getElementById('imghead');
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
}