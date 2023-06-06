$(document).ready(function(){

	$.ajax({
		type:"post",//方式是post或是get，与后台人员协商，一般为get
		url:'./action/listmember.php',//处理的后台action的URL
		crossDomain:true,//不用管
		dataType:"json",//不用管
		success:function(data){
			//这时候就开始在接收数据成功后的一些动作，随意设置操作DOM，或是其他需要的操作都在这里
			//var a=JSON.stringify(data);
			//alert(a);
			if(data.SUCCESS==true){				
				var txt1="";
				var txt2="";
				var num1=1;
				var num2=1;
				for(var i=0;i<data.DATA.length;i++){
					if(data.DATA[i].STATUS=="理事成员"){
						txt1+="<a href='member_detail.html?id="+data.DATA[i].ID+"'><div class='item1' id='item"+num1+"'><img src='../"+data.DATA[i].LOGO+"' class='img'><div class='description'><h1>"+data.DATA[i].NAME+"</h1><h2 class='content'>"+data.DATA[i].INTRODUCTION+"</h2></div></div></a>";
						num1+=1;		
					}
					else{
						txt2+="<a href='member_detail.html?id="+data.DATA[i].ID+"'><div class='item2' id='item"+num2+"'><img src='../"+data.DATA[i].LOGO+"' class='img'><div class='description'><h1>"+data.DATA[i].NAME+"</h1><h2 class='content'>"+data.DATA[i].INTRODUCTION+"</h2></div></div></a>";
						num2+=1;
					}
				}
				document.getElementById('right1').innerHTML=txt1;
				document.getElementById('right2').innerHTML=txt2;
				wordlimit("content",80);
				onepagelength=10;
				btngroup=document.getElementById("btngroup");
				industry=document.getElementsByClassName("item1");
				page=Math.ceil(industry.length/onepagelength);
				for(var a=0;a<onepagelength;a++){
					industry[a].style.display="block";
				}
				now=document.getElementById("now");				
				k=now.innerHTML;
			}else{
				alert(data.MSG);
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {//这是错误处理，会在console口输出一些状态号帮助我们查看错误原因
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
			console.log(XMLHttpRequest.responseText);
	    }
	});
	
	$("#lishi").click(function(){
	
		$("#right1").css('display','block'); 
		$("#right2").css('display','none');
		$("#lishi1").css({
			"background-color":"#fff",
			"border-top":"1px solid #ccc",
			"border-left":"1px solid #ccc",
			"border-right":"1px solid #eee"
		});
		$("#ordinary1").css({
			"background-color":"#eee",
			"border-top":"1px solid #ccc",
			"border-left":"1px solid #ccc",
			"border-right":"1px solid #ccc",		  
		});
		onepagelength=8;
		btngroup=document.getElementById("btngroup");
		industry=document.getElementsByClassName("item1");
		page=Math.ceil(industry.length/onepagelength);
		for(var a=0;a<onepagelength;a++){
			industry[a].style.display="block";
		}
		now=document.getElementById("now");				
		k=now.innerHTML;		  
	});
	
	$("#ordinary").click(function(){
		
		$("#right2").css('display','block'); 
		$("#right1").css('display','none'); 
		$("#ordinary1").css({
			"background-color":"#fff",
			"border-top":"1px solid #fff",
			"border-left":"1px solid #fff",
			"border-right":"1px solid #fff",
		});
		$("#lishi1").css({
			"background-color":"#eee",
			"border-top":"1px solid #eee",
			"border-left":"1px solid #ccc",
			"border-right":"1px solid #ccc",
		});
		onepagelength=8;
		btngroup=document.getElementById("btngroup");
		industry=document.getElementsByClassName("item2");
		page=Math.ceil(industry.length/onepagelength);
		for(var a=0;a<onepagelength;a++){
			industry[a].style.display="table-row";
		}
		now=document.getElementById("now");				
		k=now.innerHTML;
	});
	
	$("#nextPage").click(function(){
		if(now.innerHTML<page){
			for(var d=0;d<industry.length;d++){
			industry[d].style.display="none";
		}
		
		for(var a=0;a<onepagelength;a++){
			if(now.innerHTML<page){
				if(now.innerHTML<page-1){
					industry[now.innerHTML*onepagelength+a].style.display="table-row";
				}
				else if(now.innerHTML=page-1){
					for(var b=onepagelength*k;b<industry.length;b++){
						industry[b].style.display="table-row";
					}
				}
			}
		}
		k++;
		now.innerHTML=k;
		//alert(now.innerHTML);
		}	
		else{
			alert("这是最后一页");
		}
	});
		
		
	$("#previous").click(function(){
		
		if(now.innerHTML>1){
		
		for(var d=0;d<industry.length;d++){
			industry[d].style.display="none";
		}
		for(var a=0;a<onepagelength;a++){
			industry[(k-2)*onepagelength+a].style.display="table-row";
		}
		
		//alert(now.innerHTML);
		}	
		else{
			alert("这是第一页");
			return false;
		}
		k--;
		now.innerHTML=k;
	});
				
	$("#first").click(function(){
		now.innerHTML=1;
		//alert(now.innerHTML);
		k=1;
		for(var d=0;d<industry.length;d++){
			industry[d].style.display="none";
		}
		for(var a=0;a<onepagelength;a++){
			industry[a].style.display="table-row";
		}
	});
	
	$("#final").click(function(){
		//k=page;
		if(now.innerHTML!=page){
			
			for(var d=0;d<industry.length;d++){
				industry[d].style.display="none";
			}
			for(var b=onepagelength*(page-1);b<industry.length;b++){
				industry[b].style.display="table-row";
			}
			k=page;
			now.innerHTML=page;
		}
		else{
			alert("这已经是最后一页");
		}
		//alert(now.innerHTML);	
	});	
	//	<---更多------->
	function wordlimit(content,wordlength){
		var Content=document.getElementsByClassName(content);	
		for(var i=0;i<Content.length;i++){		
			var nowLength=Content[i].innerHTML.length;  
			if(nowLength>wordlength){			
			Content[i].innerHTML=Content[i].innerHTML.substr(0,wordlength)+'...&nbsp&nbsp&nbsp';
			var h=document.createElement("a");
			h.setAttribute("href","#");
			var m=document.createElement("span");
			m.className="more";
			m.innerHTML="[更多]";
			/*$(".more").css({			
				"color":"#0E73CE",
			});*/
			Content[i].appendChild(h);
			h.appendChild(m);		
			}		
		}
	}


	
})
