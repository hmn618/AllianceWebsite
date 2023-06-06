$(function(){
	
	var datatosend={
		 "type":1
	};
	
	$.ajax({
		type:"post",
		url:'./action/allarticle.php',
		data:datatosend,
		crossDomain: true,
		datType:"json",
		success:function(data){
			
			var a=JSON.stringify(data);
			//alert(a);
			if(data.SUCCESS==true){
				 var txt="";
				 for(var i=0; i<data.DATA.length;i++){
					 txt+="<a href='./article.html?ID="+data.DATA[i].ID+"'><div id='item' class='item' style='display:none;' data-id='"+data.DATA[i].ID+"'>"+
					      "<div class='tittle'>"+data.DATA[i].MAINTITLE+"</div>"+
						  "<div class='d'>[<span id='date'>"+data.DATA[i].UPDATA+"</span>]</div>"+
						  "<div class='content' data-id='"+data.DATA[i].ID+"'>"+data.DATA[i].ABSTRACT+"</div>"+
						  "</div></a>";					 
				 }
				 
			 }else{
				 alert(data.MSG);
			 }
			 
			document.getElementById('show').innerHTML=txt; 
			var url="./article.html";
			wordlimit("content",80,url);
			titlelimit("tittle",25);
			
			onepagelength=10;
			btngroup=document.getElementById("btngroup");
			industry=document.getElementsByClassName("item");
			page=Math.ceil(industry.length/onepagelength);
			for(var a=0;a<onepagelength;a++){
				industry[a].style.display="block";
			}
			now=document.getElementById("now");				
			k=now.innerHTML;
		},
		error:function(data){var a=JSON.stringify(data);
			alert(a);
		}		
	});
	
	$("#nextPage").click(function(){
		if(now.innerHTML<page){
			for(var d=0;d<industry.length;d++){
			industry[d].style.display="none";
		}
		
		for(var a=0;a<onepagelength;a++){
			if(now.innerHTML<page){
				if(now.innerHTML<page-1){
					industry[now.innerHTML*onepagelength+a].style.display="block";
				}
				else if(now.innerHTML=page-1){
					for(var b=onepagelength*k;b<industry.length;b++){
						industry[b].style.display="block";
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
			industry[(k-2)*onepagelength+a].style.display="block";
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
			industry[a].style.display="block";
		}
	});
	
	$("#final").click(function(){
		//k=page;
		if(now.innerHTML!=page){
			
			for(var d=0;d<industry.length;d++){
				industry[d].style.display="none";
			}
			for(var b=onepagelength*(page-1);b<industry.length;b++){
				industry[b].style.display="block";
			}
			k=page;
			now.innerHTML=page;
		}
		else{
			alert("这已经是最后一页");
		}
		//alert(now.innerHTML);	
	});	
})


function wordlimit(content,wordlength,url){ 
	var Content=document.getElementsByClassName(content);	
	for(var i=0;i<Content.length;i++){	 	
		var nowLength=Content[i].innerHTML.length;  
		if(nowLength>wordlength){			
		Content[i].innerHTML=Content[i].innerHTML.substr(0,wordlength)+'...&nbsp&nbsp&nbsp';
		var h=document.createElement("a");
		h.className="more_info";
		h.id="he";
		//h.setAtttibute("id","more_info");
	    var iddd=$(Content[i]).data("id");
	   // alert(iddd);
		var encode=encodeURI(url+"?ID="+iddd);
		h.setAttribute("href",encode);
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

function titlelimit(content,wordlength){ 
	var Content=document.getElementsByClassName(content);	
	for(var i=0;i<Content.length;i++){
	 	
		var nowLength=Content[i].innerHTML.length;  
		if(nowLength>wordlength){			
		Content[i].innerHTML=Content[i].innerHTML.substr(0,wordlength)+'...';	
		}		
	}
}
