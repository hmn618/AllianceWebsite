$(function(){
	$.ajax({
		type:"post",
		url:'../../backstage/role4/action/checkquanxian.php',
		crossDomain:true,
		dataType:"json",
		success:function(data){
			//var a=JSON.stringify(data);
			//alert(a)
			if(data.SUCCESS=="true"){
					alert(data.MSG);
					window.location.href="index.php";				
			}
				

		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
		}
	});
})
