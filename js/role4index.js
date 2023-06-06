/*功能：审核状态标记修改，登出，部分资料链接
 *输入：
 *输出：
 *作者：赵文骏
 *开发时间：2016.7.15
 *最后修改时间：2016.7.15
*/
$(function(){
	//审核标记修改
	var shenhe = $("#shenhe").val();
	if(shenhe==1)
	{
		$("#shenhe1").html("已审核");
		$("#shenhe2").attr("src","../../img/account/Yes.png");
	}
	else
	{	
		$("#shenhe1").html("未审核");
		$("#shenhe2").attr("src","../../img/account/no.png");
	}
	//部分资料链接
	$("#ziliao1").click(function(){
		window.location.href = "basic.php";
	});
	$("#cailiao1").click(function(){
		window.location.href = "";	
	});
	//登出
	$("#logout").click(function(){
		window.location.href = "../checklogout.php";	
	});
	var datatosend={
		
	};
	$.ajax({
		type:"post",
		url:"action/basic.php",
		dataType: "json",
		success:function(data){
//			var a=JSON.stringify(data);
//			alert(a)
			if(data.SUCCESS==true){
				$("#name").val(data.name);
				if(data.sex=="男")
					$("#man").attr("checked","checked");
				else	
					$("#woman").attr("checked","checked");
				$("#idcard").val(data.idcard);
				$("#tel").val(data.tel);
				$("#email").val(data.email);
			}
			
		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
		}				
	});
	$("#save_article").click(function(){
		var datatosend={
			'name':$("#name").val(),
			'sex':$("input:checked").val(),
			'tel':$("#tel").val(),
			'cardnum':$("#idcard").val(),
			'email':$("#email").val()
		}
		//alert(JSON.stringify(datatosend))
		$.ajax({
			type:"post",
			url:"action/basic_update.php",
			data:datatosend,
			dataType: "json",
			success:function(data){
//				var a=JSON.stringify(data);
//				alert(a)
				if(data.SUCCESS=="true"){
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
	
	//登出函数
	$("#logout").click(function(){
		window.location.href = "../checklogout.php";
	});
})