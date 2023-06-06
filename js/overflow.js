
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
wordlimit("content",80);
