/*
功能：通知公告同意处理页面
输出：数据库中通知公告数据
作者：张城城
开发时间：2016.7.7
*/
$(function(){
	
	$.ajax({
		type: "post",
		url: '../announcement.php',
		crossDomain:true,
		dateType: "json",
		success:function(data){
			//var show=eval(data);
			//alert(show[0]);
			var a=JSON.stringify(data);
			alert(a);
			alert(data.SUCCESS)
			//alert("hhhhh");
			if(data.SUCCESS==true){
				var txt="";
				for(var i=0;i<data.DATA.length;i++){
					txt+="<div class='hang clearfix'>"+"<div class='day'>"+
					"<p class='ri'>"+data.DATA[i].DAY+"</p><p id='month'>"+
					data.DATA[i].MONTH+"</p></div><div class='des'><p class='item1'>"+
					data.DATA[i].MAINTITLE+"</p><p class='where'>信息来源："+data.DATA[i].AUTHOR+
					"</p></div></div>"
				}
				document.getElementById('table').innerHTML=txt;
			}else{
				//lert(data.MSG);
			}
		}
		
	})
	
})