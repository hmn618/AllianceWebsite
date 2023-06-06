/*功能：介绍的抽屉效果
 *输入：
 *输出：
 *作者：杨卓、赵文骏
 *开发时间：2016.7.6
 *最后修改时间：2016.7.7
*/
window.onload=function(){
		var type1=document.getElementById("person");
		var type2=document.getElementById("enterprise");
		var type3=document.getElementById("administrator");
		//var type4=document.getElementById("system");
		
		var kuang1=document.getElementById("kuang1");
		var kuang2=document.getElementById("kuang2");
		var kuang3=document.getElementById("kuang3");
		//var kuang4=document.getElementById("kuang4");
		
		var mask1=document.getElementById("mask1");
		var mask2=document.getElementById("mask2");
		var mask3=document.getElementById("mask3");
		//var mask4=document.getElementById("mask4");
		
		
		 var timer;
		 var timer1;
		//鼠标移入、移出事件
		type1.onmouseenter=function(){
			kuang1.style.display="block";
			mask1.style.display="block";
			startMove(1);
		}
		type1.onmouseleave=function(){
			kuang1.style.display="none";
			mask1.style.display="none";
			clearInterval(timer);
			clearInterval(timer1);
			mask1.style.left="270px";
			kuang1.style.left="270px";			
		}
		
		type2.onmouseenter=function(){
			kuang2.style.display="block";
			mask2.style.display="block";
			startMove(2);
		}
		type2.onmouseleave=function(){
			kuang2.style.display="none";
			mask2.style.display="none";
			clearInterval(timer);
			clearInterval(timer1);
			mask2.style.left="450px";
			kuang2.style.left="450px";
		}
		
		type3.onmouseenter=function(){
			kuang3.style.display="block";
			mask3.style.display="block";
			startMove(3);
		}
		type3.onmouseleave=function(){
			kuang3.style.display="none";
			mask3.style.display="none";
			clearInterval(timer);
			clearInterval(timer1);
			mask3.style.left="680px";
			kuang3.style.left="680px";
		}
		
		/*type4.onmouseenter=function(){
			kuang4.style.display="block";
			mask4.style.display="block";
			startMove(4);
		}
		type4.onmouseleave=function(){
			kuang4.style.display="none";
			mask4.style.display="none";
			clearInterval(timer);
			clearInterval(timer1);
			mask4.style.left="910px";
			kuang4.style.left="910px";
		}*/
	//运动函数，轨迹距终点越近速度越慢
	 function startMove(i){
			if(i==1)
			{
				timer=setInterval(function(){			
					var speed=(554-mask1.offsetLeft)/8;
					mask1.style.left=mask1.offsetLeft+speed+"px";},30);
				
				timer1=setInterval(function(){
					var speed=(554-kuang1.offsetLeft)/8;
					kuang1.style.left=kuang1.offsetLeft+speed+"px";},30);
			}
			else if(i==2)
			{
				timer=setInterval(function(){
					var speed=(783-mask2.offsetLeft)/8;
					mask2.style.left=mask2.offsetLeft+speed+"px";},30);
				
				timer1=setInterval(function(){
					var speed=(783-kuang2.offsetLeft)/8;
					kuang2.style.left=kuang2.offsetLeft+speed+"px";},30);
			}
			else if(i==3)
			{
				timer=setInterval(function(){
					var speed=(1012-mask3.offsetLeft)/8;
					mask3.style.left=mask3.offsetLeft+speed+"px";},30);
				
				timer1=setInterval(function(){
					var speed=(1012-kuang3.offsetLeft)/8;
					kuang3.style.left=kuang3.offsetLeft+speed+"px";},30);
			}
			/*else if(i==4)	
			{	
				timer=setInterval(function(){
					var speed=(1099-mask4.offsetLeft)/8;
					mask4.style.left=mask4.offsetLeft+speed+"px";},30);
				
				timer1=setInterval(function(){
					var speed=(1099-kuang4.offsetLeft)/8;
					kuang4.style.left=kuang4.offsetLeft+speed+"px";},30);
			}*/
		};	 
}
/*功能：注册页面二处理
 *输入：注册信息
 *输出：ajax表单
 *作者：赵文骏
 *开发时间：2016.7.6
 *最后修改时间：2016.7.7
*/
$(function(){
	$.ajax({
		type:"post",
		url:'../register/action/checkreged.php',
		dataType:"json",
		success:function(data){
			if(data.reged){
				alert("您已注册，可正常登录");
				window.location.href="../index.html";		
			}			
		},
		error:function(data){
			var a=JSON.stringify(data);
			alert(a)
		}
	});
	$('#person').click(function(){
		
		$.ajax({
			type:"post",
			url:'../register/action/identity.php',
			crossDomain:true,
			data:'identity=11',
			dataType:"json",
			success:function(data){
				//var a=JSON.stringify(data);
				//alert(a)
				if(data.SUCCESS=="true"){
					window.location.href="reg_success.html";
				}else{
					alert(data.MSG);
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
			}
		});	
	})
	$('#enterprise').click(function(){
		$.ajax({
			type:"post",
			url:'../register/action/identity.php',
			crossDomain:true,
			data:'identity=21',
			dataType:"json",
			success:function(data){
				//var a=JSON.stringify(data);
				//alert(a)
				if(data.SUCCESS=="true"){
					window.location.href="reg_success.html";
				}else{
					alert(data.MSG);
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
			}
		});	
	})
	$('#administrator').click(function(){
		$.ajax({
			type:"post",
			url:'../register/action/identity.php',
			crossDomain:true,
			data:'identity=12',
			dataType:"json",
			success:function(data){
				//var a=JSON.stringify(data);
				//alert(a)
				if(data.SUCCESS=="true"){
					window.location.href="reg_success.html";
				}else{
					alert(data.MSG);
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
			}
		});	
	})
	$('#system').click(function(){
		$.ajax({
			type:"post",
			url:'../register/action/identity.php',
			crossDomain:true,
			data:'identity=22',
			dataType:"json",
			success:function(data){
				//var a=JSON.stringify(data);
				//alert(a)
				if(data.SUCCESS=="true"){
					window.location.href="reg_success.html";
				}else{
					alert(data.MSG);
				}
			},
			error:function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest.status);
				console.log(XMLHttpRequest.readyState);
				console.log(textStatus);
			}
		});	
	})
})