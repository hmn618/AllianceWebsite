/*功能：把封面图片存储到指定的文件夹
 *输入：封面图片
 *输出：封面图片的地址
 *作者：张城城、赵文骏
 *开发时间：2016.7.15
 *最后修改时间：2016.7.18
*/
var domain="http:localhost/";
KindEditor.ready(function(K) {

    window.editor1 = K.create('textarea[name="article.content1"]', {
	resizeType:0,
    cssPath : '../../kindeditor/plugins/code/prettify.css',	
	uploadJson : '../../kindeditor/php/upload_json.php',
	fileManagerJson : '../../kindeditor/php/file_manager_json.php',
	allowFileManager : true,
	urlType:'domain',
	afterCreate : function() {
		var self = this;
		K.ctrl(document, 13, function() {
			self.sync();
			document.forms['example'].submit();
			});
		K.ctrl(self.edit.doc, 13, function() {
			self.sync();
			document.forms['example'].submit();
			});
		}
		});
		prettyPrint();
});

// 从页面获取数据存到数据库中


$(function(){	
	var url=document.location.href;
	url=url.split("=");
	if(url[1]!=null)
	{
		//	document.location.href=url[0].split("?")[0];
		var datatosend={"id":url[1]}
		$.ajax({
			type:"post",//方式是post或是get，与后台人员协商，一般为get
			url:'../../backstage/role4/action/detailArticle.php',//处理的后台action的URL
			data:datatosend,//发送的数据即刚刚定义的那个
			crossDomain:true,//不用管
			dataType:"json",//不用管
			success:function(data){
				//这时候就开始在接收数据成功后的一些动作，随意设置操作DOM，或是其他需要的操作都在这里
				//var a=JSON.stringify(data);
				//alert(a);
				if(data.SUCCESS==true){
					$("#title_text").val(data.DATA.MAINTITLE);
					$("#subtitle_text").val(data.DATA.SUBTITLE);
					$("#author_text").val(data.DATA.AUTHOR);
					$("#addPicId").attr("data-url",data.DATA.COVERPIC);
					$("#addPicId1").val(data.DATA.COVERPIC);
					$("#abstract_text").val(data.DATA.ABSTRACT);
					editor1.html(data.DATA.CONTENT);
					$("#link_text").val(data.DATA.LINK);

				}else{
					alert(data.MSG);
				}	
			},
			error:function(XMLHttpRequest, textStatus, errorThrown) {//这是错误处理，会在console口输出一些状态号帮助我们查看错误原因
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
				console.log(XMLHttpRequest.responseText);
		    }
		});
	}
	$(document).on('click','#coverpic',function(e){
	    document.getElementById('imgUpload').click();
     });
	 
	 $("#imgUpload").wrap("<form id='myupload' action='../../backstage/role4/action/handleImage.php?act=1' method='post' enctype='multipart/form-data'></form>");
	$("#imgUpload").on("change",function(){ //选择文件
	    $("#myupload").ajaxSubmit({
	        dataType:  'json', //数据格式为json
	        success: function(data) { //成功
	        	//document.write(data);
	            var url=data.name;
				var a=JSON.stringify(data);
				 
				 alert(url);

				console.log(url);
				var serviceurl=url.replace("../uploadImage/","./uploadImage/");
				//$("#addPicId").attr("src","../"+serviceurl);
				$("#addPicId1").attr("value",serviceurl);
				$("#addPicId").attr("data-url",serviceurl);
				//$("#addPicId").show();


	        },
	        error:function(xhr){ //上传失败
	        	console.log("error");
	            console.log(xhr.responseText); //返回失败信息
	        }
	    });
	  });
	  
	  $(document).on('click','#save_article',function(e){
	      
		    
		  var datatosend={//以这种KEY-VALUE的方式赋值 ，注意分隔为逗号，最后一行不加符号
			"TITLE":document.getElementById('title_text').value,
			"SUBTITLE":document.getElementById('subtitle_text').value,
			"AUTHOR":document.getElementById('author_text').value,
			"COVERPIC":document.getElementById('addPicId1').value,
			"SUMMARY":document.getElementById('abstract_text').value,
			"CONTENT":editor1.html(),
			"LINK":document.getElementById('link_text').value,
			"type":"3",
			"update":document.getElementById('update').value
		 };

       // alert("开心");
		console.log(datatosend);
		var title=document.getElementById('title_text').value;
		if(title==""||title==null||title==undefined){
			alert("标题不能为空！");
			return false;
		}
		var coverpic=document.getElementById('addPicId1').value;
		if(coverpic==""||coverpic==null||coverpic==undefined){
			alert("封面不能为空！");
			return false;
		}
		
		var abstract = document.getElementById('abstract_text').value;
        if (abstract == "" || abstract == null || abstract == undefined) {
            alert("摘要不能为空！");
            return false;
        }
		// alert("开心");
		$.ajax({
			type:"post",//方式是post或是get，与后台人员协商，一般为get
			url:'../../backstage/role4/action/addArticle.php',//处理的后台action的URL
			data:datatosend,//发送的数据即刚刚定义的那个
			crossDomain:true,//不用管
			dataType:"json",//不用管
			success:function(data){
				//这时候就开始在接收数据成功后的一些动作，随意设置操作DOM，或是其他需要的操作都在这里
				var a=JSON.stringify(data);
				//alert(a);
				if(data.SUCCESS==true){
					alert('上传成功');
					window.location.href="news_manage.php";
				}else{
					alert(data.MSG);
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown) {//这是错误处理，会在console口输出一些状态号帮助我们查看错误原因
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
				console.log(XMLHttpRequest.responseText);
		    }
		});
	   
	   
	   
     });
	 
	//登出函数
	$("#logout").click(function(){
		window.location.href = "../checklogout.php";
	});
})
