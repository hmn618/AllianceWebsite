$(document).ready(function(){

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
	});
	
	var right1=document.getElementById("right1");
	var num=right1.getElementsByClassName("item").length;
	var page=Math.ceil(num/5);
	for (var i=page;i>0;i--){
		var h=document.createElement("a");
		h.setAttribute("href","#");
		var pageNum=document.createElement("p");
		pageNum.innerHTML=i;
		pageNum.className="page";
		var next=document.getElementById("next");
		next.appendChild(h);
		h.appendChild(pageNum);
		}
	
	var right2=document.getElementById("right2");
	var num=right2.getElementsByClassName("item").length;
	var page=Math.ceil(num/5);
	for (var i=page;i>0;i--){
		var h=document.createElement("a");
		h.setAttribute("href","#");
		var pageNum=document.createElement("p");
		pageNum.innerHTML=i;
		pageNum.className="page";
		var next1=document.getElementById("next1");
		next1.appendChild(h);
		h.appendChild(pageNum);
		}
	
	
})
