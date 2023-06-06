$(function(){
	$('#btn').click(function(){
		if(!valiate())
		{
			return false;
		}
		var datatosend={
			"name":$("#loginname").val(),
			"pwd":hex_md5($("#loginpwd").val())
		};
		$.ajax({
				type:"post",
				url:'../login/login.php',
				data:datatosend,
				crossDomain:true,
				dataType:"json",
				success:function(data){
					//var a=JSON.stringify(data);
					//alert(a);
					if(data.SUCCESS=="true"){						
						switch(data.ID){
							case "0" :window.location.href="../register/bing.html";break;
							case "11":window.location.href="../backstage/role1/index.php";break;
							case "21":window.location.href="../backstage/role2/index.php";break;
							case "12":window.location.href="../backstage/role3/index.php";break;
							case "22":window.location.href="../backstage/role4/index.php";break;
						}
					}else{
						alert(data.MSG);
					}
				},
				error:function(data) {
					var a=JSON.stringify(data);
					alert(a);
				}
		});
	});
	$('#btn2').click(function(){
		window.location.href="../index.html";
	});
})

function valiate(){
	/*用户名校验*/	
	loginname=$("#loginname").val();
	if(loginname=="null"||loginname=="") 
	{
		alert("请输入用户名!")
		$("#loginname").val("");
		$("#loginname").focus();
		return false;	
	}
	else if(!(/^[0-9 a-z _ A-Z]*$/g.test(loginname)))
	{
		alert("用户名只能是数字、字母、下划线!")
		$("#loginname").val("");
		$("#loginname").focus();
		return false;
	}
	/*密码校验*/
	loginpwd=$("#loginpwd").val();
	if(loginpwd=="null"||loginpwd=="") 
	{
		
        alert('请输入密码!');
		$("#loginpwd").val("");
		$("#loginpwd").focus();
		return false;
	} 
	return true;
}