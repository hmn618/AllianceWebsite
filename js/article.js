/*
  *功能：从数据库中读取通知公告,输入到详情页面
  *输出：公告信息。
  *作者：张城城
  *开发时间：2016.7.19
*/

$(function(){
	var url=window.location.href;
	var id=url.substring(url.lastIndexOf('=')+1, url.length);
	//alert(id);
	
	var datatosend={
		"id":id
	};
	$.ajax({
		type:"post",
		url:'./action/article.php',
		data:datatosend,//发送的数据即刚刚定义的那个
		crossDomain:true,//不用管
		dataType:"json",//不用管
		success:function(data){
			var a=JSON.stringify(data);
			//alert(a);
			if(data.SUCCESS==true){
				if(data.DATA[0].TYPE==1){
					document.getElementById('article_type').innerHTML="通知公告";
					document.getElementById('article_type1').innerHTML="通知公告";
					$("#article_type1").attr("href","./notice.html");
				}
				if(data.DATA[0].TYPE==2){
					document.getElementById('article_type').innerHTML="联盟活动";
					document.getElementById('article_type1').innerHTML="联盟活动";
					$("#article_type1").attr("href","./active.html");
				}
				if(data.DATA[0].TYPE==3){
					document.getElementById('article_type').innerHTML="行业资讯";
					document.getElementById('article_type1').innerHTML="行业资讯";
					$("#article_type1").attr("href","./news.html");
				}
				
                 document.getElementById('t-date').innerHTML="发布日期："+data.DATA[0].UPDATA;
				 document.getElementById('t-author').innerHTML="发布者："+data.DATA[0].AUTHOR;
				 document.getElementById('t-text').innerHTML=data.DATA[0].CONTENT;
				 document.getElementById('top2-tittle').innerHTML=data.DATA[0].MAINTITLE;
				 
				 document.getElementById('article_addr').innerHTML="文章转载自："+data.DATA[0].LINK1;				
				
			}else{
				alert(data.MSG);
				
			}
		},
		error:function(data){var a=JSON.stringify(data);
			alert(a);}
		
		
		
		
	})
})