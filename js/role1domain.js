$(document).ready(function(){
	//alert("功能暂未开放！")
	//window.location.href="./index.php";
	$("#info").click(function(){
		$("#work").show();
		$("#international").hide();
		$("#education").hide();
		$("#fund").hide();
		$("#service").hide();
	
		$("#edu").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#ser").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$('#info').css({
			'background-color':'#4B8DF7',
			"border-bottom":"2px solid #4481E4",
			"border-left":"2px solid #4481E4",
		});
		$("#inter").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#fun").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
	
	});
	
	$("#inter").click(function(){
		$("#work").hide();
		$("#international").show();
		$("#education").hide();
		$("#fund").hide();
		$("#service").hide();
		
		$("#edu").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#ser").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$('#inter').css({
			'background-color':'#4B8DF7',
			"border-bottom":"2px solid #4481E4",
			"border-left":"2px solid #4481E4",
		});
		$("#info").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#fun").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
	});
	
		$("#edu").click(function(){
		$("#work").hide();
		$("#international").hide();
		$("#education").show();
		$("#fund").hide();
		$("#service").hide();
		
		$("#info").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#ser").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$('#edu').css({
			'background-color':'#4B8DF7',
			"border-bottom":"2px solid #4481E4",
			"border-left":"2px solid #4481E4",
		});
		$("#inter").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#fun").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
	});
	
	$("#fun").click(function(){
		$("#work").hide();
		$("#international").hide();
		$("#education").hide();
		$("#fund").show();
		$("#service").hide();
		
		$("#edu").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#ser").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$('#fun').css({
			'background-color':'#4B8DF7',
			"border-bottom":"2px solid #4481E4",
			"border-left":"2px solid #4481E4",
		});
		$("#inter").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#info").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
	});
	
	$("#ser").click(function(){
		$("#work").hide();
		$("#international").hide();
		$("#education").hide();
		$("#fund").hide();
		$("#service").show();
		
		$("#edu").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#info").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$('#ser').css({
			'background-color':'#4B8DF7',
			"border-bottom":"2px solid #4481E4",
			"border-left":"2px solid #4481E4",
		});
		$("#inter").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
		$("#fun").css({
			'background-color':'#DEDEDE',
			"border-bottom":"2px solid #CDCDCD",
			"border-left":"2px solid #DEDEDE",
		});
	});
})
