jQuery(document).ready(function($) {
	$('.theme-login').click(function(){
		$('.theme-popover-mask').fadeIn(100);
		$('.theme-popover').slideDown(200);
	})
	$('.theme-poptit .close').click(function(){
		$('.theme-popover-mask').fadeOut(100);
		$('.theme-popover').slideUp(200);
	})

})
jQuery(document).ready(function($) {
	$('.theme-login1').click(function(){
		$('.theme-popover-mask1').fadeIn(100);
		$('.theme-popover1').slideDown(200);
	})
	$('.theme-poptit1 .close').click(function(){
		$('.theme-popover-mask1').fadeOut(100);
		$('.theme-popover1').slideUp(200);
	})

})
jQuery(document).ready(function($) {
	$('.theme-login2').click(function(){
		$('.theme-popover-mask2').fadeIn(100);
		$('.theme-popover2').slideDown(200);
	})
	$('.theme-poptit2 .close').click(function(){
		$('.theme-popover-mask2').fadeOut(100);
		$('.theme-popover2').slideUp(200);
	})

})
$(function(){
	$("#submit1").click(function(){
		pwd=$("#ipt1").val();
		pwd1=$("#ipt2").val();
		if(pwd==null||pwd==""){
			alert("请输入密码！")
			return false;
		}
		else if(pwd!=pwd1){
			alert("两次密码输入不同！")
			return false;
		}
		$.ajax({
			type:"post",
			url:'../index_update.php',
			crossDomain:true,
			data:'pwd='+hex_md5(pwd),
			dataType:"json",
			success:function(data){
				//var a=JSON.stringify(data);
				//alert(a)
				if(data.SUCCESS=="true"){
					alert(data.MSG);
					window.location.href="index.php";
				}else{
					alert(data.MSG);
				}
			},
			error:function(data){var a=JSON.stringify(data);
				alert(a)}
//			error:function(XMLHttpRequest, textStatus, errorThrown) {
//				console.log(XMLHttpRequest.status);
//				console.log(XMLHttpRequest.readyState);
//				console.log(textStatus);
//			}
		});
	});	
	$("#submit2").click(function(){
		email=$("#ipt3").val();
		if(email==null||email==""){
			alert("请输入邮箱！")
			return false;
		}
		else if(!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(email)){
			alert("请输入正确的邮箱格式！")
			return false;
		}
		$.ajax({
			type:"post",
			url:'../index_update.php',
			crossDomain:true,
			data:'email='+email,
			dataType:"json",
			success:function(data){
				//var a=JSON.stringify(data);
				//alert(a)
				if(data.SUCCESS=="true"){
					alert(data.MSG);
					window.location.href="index.php";
				}else{
					alert(data.MSG);
				}
			},
			error:function(data){var a=JSON.stringify(data);
				alert(a)}
//			error:function(XMLHttpRequest, textStatus, errorThrown) {
//				console.log(XMLHttpRequest.status);
//				console.log(XMLHttpRequest.readyState);
//				console.log(textStatus);
//			}
		});
	});	
	$("#submit3").click(function(){
		nickname=$("#ipt4").val();
		if(nickname==null||nickname==""){
			alert("请输入昵称！")
			return false;
		}
		$.ajax({
			type:"post",
			url:'../index_update.php',
			crossDomain:true,
			data:'nickname='+nickname,
			dataType:"json",
			success:function(data){
				//var a=JSON.stringify(data);
				//alert(a)
				if(data.SUCCESS=="true"){
					alert(data.MSG);
					window.location.href="index.php";
				}else{
					alert(data.MSG);
				}
			},
			error:function(data){var a=JSON.stringify(data);
				alert(a)}
//			error:function(XMLHttpRequest, textStatus, errorThrown) {
//				console.log(XMLHttpRequest.status);
//				console.log(XMLHttpRequest.readyState);
//				console.log(textStatus);
//			}
		});
	});	
})
