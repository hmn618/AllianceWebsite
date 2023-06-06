	/*功能：注册页面三处理
 *输入：注册信息
 *输出：ajax表单
 *作者：赵文骏
 *开发时间：2016.7.5
 *最后修改时间：2016.7.5
*/
$(function(){
	$.ajax({
			type:"post",
			url:'../register/action/reg_success.php',
			crossDomain:true,
			dataType:"json",
			success:function(data){
			//var a=JSON.stringify(data);
			//alert(a)
				
				if(data.SUCCESS=="true"){
					$(".reg_name").val(data.NAME);
					switch(data.ID){
							case "11":delayURL("../backstage/role1/index.php",3000);break;
							case "21":delayURL("../backstage/role2/index.php",3000);break;
							case "12":delayURL("../backstage/role3/index.php",3000);break;
							case "22":delayURL("../backstage/role4/index.php",3000);break;
						}
				}else{
					alert("未知错误！");
				}

	
				
			},
			error:function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
			}
		})
})
	function delayURL(url,time){
		setTimeout("top.location.href='"+url+"'",time);
		}