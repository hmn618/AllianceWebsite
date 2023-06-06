$(document).ready(function(){
	/*$(".zhu").click(function(){
		$(".zhu").css({
		  "background-color":"#000",
		   "color":"#fff",
		   "box-border-bottom": "1px solid #ccc"
		  });
	});*/
	
	$(".zhu").click(function(){
		$("#nav_div").css("height",25);
	});
	$("#zou1").click(function(){
		
		//$("#zou_ul").style.display="block";
		$("#nav_div").css("height",100);
		//alert(1);
	});
})
