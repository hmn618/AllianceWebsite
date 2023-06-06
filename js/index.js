/*------------------成员展示------------------*/
/*------------------图片滚动------------------*/
window.onload=function(){
	var s=document.body.clientWidth;
	var speed=30;
	var tab=document.getElementById("demo");
	var tab1=document.getElementById("demo1");
	var tab2=document.getElementById("demo2");
	tab2.innerHTML=tab1.innerHTML;
	function Marquee(){
		if(tab2.offsetWidth-tab.scrollLeft<=0)
			tab.scrollLeft-=tab1.offsetWidth
		else{
			tab.scrollLeft++;
		}
}
  	var MyMar=setInterval(Marquee,speed);
  	tab.onmouseover=function(){
	 	clearInterval(MyMar)};
	  	tab.onmouseout=function(){
			MyMar=setInterval(Marquee,speed)
		};		  
/*-------------------箭头-----------------*/
	$("#arrow1").click(function(){
		tab.scrollLeft=tab.scrollLeft-850;
	});
	$("#arrow2").click(function(){
		tab.scrollLeft=tab.scrollLeft+850;
	});	
	$("#enter1").click(function(){
		window.location.href="register/quickregister.html?1";
	});
	$("#enter2").click(function(){
		window.location.href="register/quickregister.html?2";
	});
}


/*----------------公告----------------*/
$(document).ready(function(){
	$("#industry_block").click(function(){
		$("#right2").css('display','block'); 
		$("#right1").css('display','none'); 
		$("#industry").css({
			"background-color":"#fff",
			"border-top":"#fff",
			"border-left":"1px solid #fff",
			"border-right":"1px solid #fff",
			"border-bottom":"1px solid #fff"
			});
		$("#inform").css({
			"background-color":"#eee",
			"border-top":"#eee",
			"border-left":"1px solid #ccc",
			"border-right":"1px solid #ccc",
			"border-bottom":"1px solid #ccc"
		});
	});
	
	
	$("#inform_block").click(function(){
		$("#right1").css('display','block'); 
		$("#right2").css('display','none');
		$("#inform").css({
			"background-color":"#fff",
			"border-top":"#fff",
			"border-left":"1px solid #fff",
			"border-right":"1px solid #fff",
			"border-bottom":"1px solid #fff"
		});
		$("#industry").css({
			"background-color":"#eee",
			"border-top":"#eee",
			"border-left":"1px solid #ccc",
			"border-right":"1px solid #ccc",
			"border-bottom":"1px solid #ccc"
		});
	});
	
	
})


/*-------------------front and back end connection------------------*/

/*---通知公告---*/
$(function(){
	var datatosend={
		"type":1,
		"size":7
	};
	
	$.ajax({
		type: "post",
		url: './announcement.php',
		data:datatosend,
		crossDomain:true,
		dateType: "json",
		success:function(data){			
			//var a=JSON.stringify(data);
			//alert(a);
			if(data.SUCCESS==true){
				var txt="";
				for(var i=0;i<data.DATA.length;i++){
					txt+="<div class='hang clearfix' data-id='"+data.DATA[i].ID+"'>"+"<div class='day'>"+
					"<p class='ri'>"+data.DATA[i].DAY+"</p><p id='month'>"+
					data.DATA[i].MONTH+"月</p></div><div class='des'><p class='item1'>"+
					data.DATA[i].MAINTITLE+"</p><p class='where'>信息来源："+data.DATA[i].AUTHOR+
					"</p></div></div>"
				}
				document.getElementById('table').innerHTML=txt;
			}else{
				
				alert(data.MSG);
			}
		}		
	})

	$(document).on('click','.hang',function(e){
		var id=$(this).data("id");
		var url=makeurl_hot_article(id);
		window.location.href=url;
    });
	$(document).on('click','#more3',function(e){
		window.location.href="basic/news.html"; 
	});
	$(document).on('click','#more5',function(e){
		window.location.href="member/member.html"; 
	});

	
})


	function makeurl_hot_article(name){
		var encode=encodeURI(name);
		var url="./basic/article.html";
		var encode=encodeURI(url + "?ID=" + encode);
		return encode;
	}

/*---行业资讯---*/
$(function(){
	
	var datatosend={
		"type":3,
		"size":7
	};
	
	$.ajax({
		type: "post",
		url: './announcement.php',
		data:datatosend,
		crossDomain:true,
		dateType: "json",
		success:function(data){			
			//var a=JSON.stringify(data);
			//alert(a);
			if(data.SUCCESS==true){
				var txt="";
				for(var i=0;i<data.DATA.length;i++){
					txt+="<div class='hang clearfix' data-id='"+data.DATA[i].ID+"'>"+"<div class='day'>"+
					"<p class='ri'>"+data.DATA[i].DAY+"</p><p id='month'>"+
					data.DATA[i].MONTH+"月</p></div><div class='des'><p class='item1'>"+
					data.DATA[i].MAINTITLE+"</p><p class='where'>信息来源："+data.DATA[i].AUTHOR+
					"</p></div></div>"
				}
				document.getElementById('table1').innerHTML=txt;
			}else{
				  lert(data.MSG);
			}
		}
		
	});
	
	$(document).on('click','#more2',function(e){
		window.location.href="./basic/notice.html"; 
	 });
})


/*--------------------alliance's activity---------------------------*/

$(document).ready(function(){
	var datatosend={
		"type":2,
		"size":3
	};
	$.ajax({
		type:"post",
		url:'./announcement.php',
		data:datatosend,
		crossDomain:true,
		dataType:"json",
		success:function(data){
		//	alert(data.SUCCESS);
			if(data.SUCCESS==true){
				 var txt="<div id='title1' class='title1 clearfix'>"+
									"<div id='blue' class='blue'></div><h3 class='activity1'>联盟活动</h3>"+
									"<a class='more' id='more1'>更多</a>"+
							        "</div>";
						
				 var j=1;
				 for(var i=0;i<data.DATA.length;i++){
					 
					 txt+="<div class='activity_2' id='column"+j+"' data-id='"+data.DATA[i].ID+"'>"+"<img class='act' src='./"+data.DATA[i].COVERPIC+"'>"
									+"<h4 class='title'>"+data.DATA[i].MAINTITLE+"</h4>"
									+"<date>"+data.DATA[i].UPDATA+"</date>"
									+"<p class='brief'>"+data.DATA[i].ABSTRACT+"</p></div>";
									
					 j++;
					 
				 }
				 txt+="<img src='img/divider.png' alt='' class='divider'>";
				 
				 document.getElementById('alliance').innerHTML=txt;
				var title=document.getElementsByClassName("title");
			for(var m=0;m<title.length;m++){
				 	var a=title[m].innerHTML.length;
				 	if(a>24){
				 		var titleHtml=title[m].innerHTML.slice(0,23)+"...";
				 		title[m].innerHTML=titleHtml;
				 	}
				 	else{
				 		//alert(title[m].innerHTML);
				 	}
				 	//alert(brief[k].innerHTML);
				 }
				
				var brief=document.getElementsByClassName("brief");
				 for(var k=0;k<brief.length;k++){
				 	var b=brief[k].innerHTML.length;
				 	if(b>91){
				 		var briefHtml=brief[k].innerHTML.slice(0,90)+"...";
				 		brief[k].innerHTML=briefHtml;
				 	//alert(brief[k].innerHTML);
				 	}
				 	else{
				 		//alert(brief[k].innerHTML);
				 	}
				 }
			}
				
			
		},
		error:function(data){var a=JSON.stringify(data);
			alert(a);
		 	 
		}
		/*error:function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
	    }
		*/
	});
	
	$(document).on('click','.activity_2',function(e){
	var id=$(this).data("id");
	//alert(id);
	var url=makeurl_hot_article(id);
	window.location.href=url;
     });
	 
	 $(document).on('click','#more1',function(e){
		window.location.href="./basic/active.html"; 
	 });
	
});


/*------------------------Announcement----------------------*/
/*
$(document).ready(function(){
	var datatosend={};
	$.ajax({
		type:"get",
		url:'',
		data:datatosend,
		crossDomain:true,
		dataType:"json",
		success:function(data){
			if(data.SUCCESS==true){
				var table=document.getElementById("table");
				var hang=document.createElement("div");
				hang.className="hang clearfix";
				var day=document.createElement("div");
				day.className="day";
				var ri=document.createElement("p");
				ri.className="ri";
				var month=document.createElement("p");
				month.className="month";
				var des=document.createElement("div");
				des.className="des";
				var item1=document.createElement("p");
				item1.className="item1";
				var where=document.createElement("p");
				where.className="where";
				
				table.appendChild(hang);
				hang.appendChild(day);
				day.appendChild(ri);
				day.appendChild(month);
				hang.appendChild(des);
				des.appendChild(item1);
				des.appendChild(where);
				
				for(var i=0;i<8;i++){
					document.getElementsByClassName("hang")[i].setAttribute("data-id",data.DATA[i].ID);
					document.getElementsByClassName("ri").innnerHTML=decodeURI(data.DATA[i].RI);
					document.getElementsByClassName("month").innerHTML=decodeURI(data.DATA[i].MONTH);
					document.getElementsByClassName("item1").innerHTML=decodeURI(data.DATA[i].ITEM).substr(0,20);
					document.getElementsByClassName("where").innerHTML="信息来源："+decodeURI(data.DATA[i].WHERE).substr(0,15);
				}
				
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
	    }
	});
});

*/
/*-----------------------Industry information---------------*/
/*
$(document).ready(function(){
	var datatosend={};
	$.ajax({
		type:"get",
		url:'',
		data:datatosend,
		crossDomain:true,
		dataType:"json",
		success:function(data){
			if(data.SUCCESS==true){
				var table=document.getElementById("table");
				var hang=document.createElement("div");
				hang.className="hang";
				var day=document.createElement("div");
				day.className="day";
				var ri=document.createElement("p");
				ri.className="ri";
				var month=document.createElement("p");
				month.className="month";
				var des=document.createElement("div");
				des.className="des";
				var item1=document.createElement("p");
				item1.className="item1";
				var where=document.createElement("p");
				where.className="where";
				
				table.appendChild(hang);
				hang.appendChild(day);
				day.appendChild(ri);
				day.appendChild(month);
				hang.appendChild(des);
				des.appendChild(item1);
				des.appendChild(where);
				
				for(var i=0;i<7;i++){
					document.getElementsByClassName("hang")[i].setAttribute("data-id",data.DATA[i].ID);
					document.getElementsByClassName("ri").innnerHTML=decodeURI(data.DATA[i].RI);
					document.getElementsByClassName("month").innerHTML=decodeURI(data.DATA[i].MONTH);
					document.getElementsByClassName("item1").innerHTML=decodeURI(data.DATA[i].ITEM).substr(0,20);
					document.getElementsByClassName("where").innerHTML="信息来源："+decodeURI(data.DATA[i].WHERE).substr(0,15);
				}
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
	    }
	});
});

*/
/*-----------------------Specialist-------------------------*/
/*
$(document).ready(function(){
	var datatosend={};
	$.ajax({
		type:"get",
		url:'',
		data:datatosend,
		crossDomain:true,
		dataType:"json",
		success:function(data){
			if(data.SUCCESS==true){
				var speColumn=document.getElementById("speColumn");
				var personal=document.createElement("div");
				personal.className="personal";
				var zhuanjia=document.createElement("img");
				zhuanjia.className="zhuanjia";
				var spec_name=document.createElement("p");
				spec_name.className="spec_name";
				
				speColumn.appendChild(personal);
				personal.appendChild(zhuanjia);
				personal.appendChild(spec_name);
				
				for(var i=0;i<7,i++){
					document.getElementsByClassName("personal")[i].setAttribute("data-id",data.DATA.[i].ID);
					document.getElementsByClassName("zhuanjia")[i].setAttribute("src","./"+data.DATA[i].TU);
					document.getElementsByClassName("spe_name")[i].innerHTML=decodeURI(data.DATA[i].NAME);
					
				}
				
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
	    }
	});
});

*/
/*-----------------------Member show------------------------*/
/*
$(document).ready(function(){
	var datatosend={};
	$.ajax({
		type:"get",
		url:'',
		data:datatosend,
		crossDomain:true,
		dataType:"json",
		success:function(data){
			if(data.SUCCESS==true){
				
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
	    }
	});
});
*/

