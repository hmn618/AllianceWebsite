$(function(){
	$(".bottom_btn1").click(function(){
		if($("#name").val()==null||$("#name").val()==""){
			alert("请输入账号名");
			return;
		}
		if($("#password").val()==null||$("#password").val()==""){
			alert("请输入密码");
			return;
		}
		else if($("#password").val().length<6){
			alert("密码长度必须大于6位");
			return;
		}
		if($("#password").val()!=$("#password1").val())
		{
			alert("两次密码输入不同");
			return;
		}
		var datatosend={
			'name':$("#name").val(),
			'pwd':hex_md5($("#password").val())
		};
alert($("#password").val())
		$.ajax({
			type:"post",
			url:'action/password.php',
			data:datatosend,
			dataType:"json",
			success:function(data){
				//var a=JSON.stringify(data);
				//alert(a)
				if(data.SUCCESS=="true"){
					alert(data.MSG);
				}
				else{
					alert(data.MSG);
				}
			},
			error:function(data){
				var a=JSON.stringify(data);
				alert(a)	
			}
		})
	});
	//登出函数
	$("#logout").click(function(){
		window.location.href = "../checklogout.php";
	});
	
})
