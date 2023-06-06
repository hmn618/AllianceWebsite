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
	if(shenhe==111)
	{
		$("#ziliao").attr("src","../../img/account/Yes.png");
		$("#cailiao").attr("src","../../img/account/Yes.png");
		$("#shenhe1").attr("src","../../img/account/Yes.png");
		$("#rumeng").attr("src","../../img/account/Yes.png");	
	}
	else
	{
		if(Math.floor(shenhe/100)){$("#shenhe1").attr("src","../../img/account/Yes.png");}
		if(Math.floor(shenhe%100/10)){$("#ziliao").attr("src","../../img/account/Yes.png");}
		if(shenhe%10){$("#cailiao").attr("src","../../img/account/Yes.png");}
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
})