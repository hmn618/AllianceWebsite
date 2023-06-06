/*功能：把封面图片存储到指定的文件夹
 *输入：封面图片
 *输出：封面图片的地址
 *作者：张城城、赵文骏、刘庆
 *开发时间：2016.7.15
 *最后修改时间：2016.7.20
 */
var domain = "http:localhost/";
KindEditor.ready(function (K) {

    window.editor1 = K.create('textarea[name="article.content1"]', {
        cssPath: '../../kindeditor/plugins/code/prettify.css',
        uploadJson: '../../kindeditor/php/upload_json.php',
        fileManagerJson: '../../kindeditor/php/file_manager_json.php',
        allowFileManager: true,
        urlType: 'domain',
        afterCreate: function () {
            var self = this;
            K.ctrl(document, 13, function () {
                self.sync();
                document.forms['example'].submit();
            });
            K.ctrl(self.edit.doc, 13, function () {
                self.sync();
                document.forms['example'].submit();
            });
        }
    });
    prettyPrint();
});

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  unescape(r[2]);
    return null;
}


$(function(){
$.ajax({

	type: "post",
	url:'../../backstage/role2/action/writeAuthor.php',
	crossDomain:true,
	dataType: "json",
	success:function(data){
	//var a = JSON.stringify(data);
	//alert(a);
		if(data.SUCCESS==true){
		$("#author_text").val(data.DATA[0].NAME);	
}
},error:function(data){

	var a = JSON.stringify(data);
	alert(a);
}


})
	

})

$(function () {
    var url = document.location.href;
    url = url.split("=");
    var id = GetQueryString("id");
    var type = GetQueryString("type");
    if (id != null) {
        //	document.location.href=url[0].split("?")[0];
        var datatosend = {"id": id,"type":type};
        $.ajax({
            type: "post",//方式是post或是get，与后台人员协商，一般为get
            url: '../../backstage/role2/action/detail_article.php',//处理的后台action的URL
            data: datatosend,//发送的数据即刚刚定义的那个
            crossDomain: true,//不用管
            dataType: "json",//不用管
            success: function (data) {
                //这时候就开始在接收数据成功后的一些动作，随意设置操作DOM，或是其他需要的操作都在这里
                //var a=JSON.stringify(data);
                //alert(a);
                if (data.SUCCESS == true) {
                    $("#title_text").val(data.DATA.MAINTITLE);
                    $("#subtitle_text").val(data.DATA.SUBTITLE);
                    $("#author_text").val(data.DATA.AUTHOR);
                    $("#addPicId").attr("data-url", data.DATA.COVERPIC);
		    $("#addPicId1").val(data.DATA.COVERPIC);
                    $("#abstract_text").val(data.DATA.ABSTRACT);
                    editor1.html(data.DATA.CONTENT);
                    $("#link_text").val(data.DATA.LINK);
                    if(type == 2) {
                        $('ul li:last-child').attr("class","active");
                        $("li").eq(-2).attr("class","");
                    }else if (type==3) {
                        $("li").eq(-1).attr("class","");
                        $("li").eq(-2).attr("class","active");
                    }

                } else {
                    history.go(-1);
                    alert(data.MSG);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {//这是错误处理，会在console口输出一些状态号帮助我们查看错误原因
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
                console.log(XMLHttpRequest.responseText);
            }

        });
    }
    $(document).on('click', '#coverpic', function (e) {
        document.getElementById('imgUpload').click();
    });

    $("#imgUpload").wrap("<form id='myupload' action='../../backstage/role2/action/handleImage.php?act=1' method='post' enctype='multipart/form-data'></form>");
    $("#imgUpload").on("change", function () { //选择文件
        $("#myupload").ajaxSubmit({
            dataType: 'json', //数据格式为json
            success: function (data) { //成功
                //document.write(data);
                var url = data.name;
                var a = JSON.stringify(data);

                alert(url);

                console.log(url);
                //var serviceurl = url.replace("../uploadImage/", "./uploadImage/");
                //$("#addPicId").attr("src","../"+serviceurl);
		$("#addPicId1").attr("value",url);
                $("#addPicId").attr("data-url", url);
                //$("#addPicId").show();


            },
            error: function (xhr) { //上传失败
                console.log("error");
                console.log(xhr.responseText); //返回失败信息
            }
        });
    });

    // 保存资讯到数据库
    $(document).on('click', '#save_article', function (e) {
        var url = document.location.href;
        url = url.split("=");
        var type = GetQueryString("type");
        var query_id = GetQueryString("id");
        var datatosend = {};
        if (query_id == null) {
            datatosend = {//以这种KEY-VALUE的方式赋值 ，注意分隔为逗号，最后一行不加符号
                "TITLE": document.getElementById('title_text').value,
                "SUBTITLE": document.getElementById('subtitle_text').value,
                "AUTHOR": document.getElementById('author_text').value,
                "COVERPIC": document.getElementById('addPicId1').value,
                "SUMMARY": document.getElementById('abstract_text').value,
                "CONTENT": editor1.html(),
                "LINK": document.getElementById('link_text').value,
                "type": type  // 发布的新闻
            };
        } else {
            datatosend = {//以这种KEY-VALUE的方式赋值 ，注意分隔为逗号，最后一行不加符号
                "TITLE": document.getElementById('title_text').value,
                "SUBTITLE": document.getElementById('subtitle_text').value,
                "AUTHOR": document.getElementById('author_text').value,
                "COVERPIC": document.getElementById('addPicId1').value,
                "SUMMARY": document.getElementById('abstract_text').value,
                "CONTENT": editor1.html(),
                "LINK": document.getElementById('link_text').value,
                "type": type,  // 发布的新闻
                "query_id": query_id
            };
        }
	//var a = JSON.stringify(datatosend);
        //alert(a);
        var title = document.getElementById('title_text').value;
        if (title == "" || title == null || title == undefined) {
            alert("标题不能为空！");
            return false;
        }
	var coverpic=document.getElementById('addPicId1').value;
        if (coverpic == "" || coverpic == null || coverpic == undefined) {
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
            type: "post",//方式是post或是get，与后台人员协商，一般为get
            url: 'action/insert_article.php',//处理的后台action的URL
            data: datatosend,//发送的数据即刚刚定义的那个
            crossDomain: true,//不用管
            dataType: "json",//不用管
            success: function (data) {
                //这时候就开始在接收数据成功后的一些动作，随意设置操作DOM，或是其他需要的操作都在这里
               // var a = JSON.stringify(data);
                //alert(a);
                if (data.SUCCESS == "true") {
                    alert('上传成功');
                    //window.location.href="post.php";
                } else {
                    alert(data.MSG);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {//这是错误处理，会在console口输出一些状态号帮助我们查看错误原因
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
                console.log(XMLHttpRequest.responseText);
            }
        });


    });

    //登出函数
    $("#logout").click(function () {
        window.location.href = "../checklogout.php";
    });
});


