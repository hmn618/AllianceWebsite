$(document).ready(function(){

	$("#tt1").click(function(){
		$("#bottom1").css('display','block'); 
		$("#bottom2").css('display','none');
		$("#bottom3").css('display','none');
		
		if(window.screen.width>1024){
			$("#tt1").css({
			  "background-color":"#4988EF",
			   "color":"#fff",
			   "box-shadow": "2px 2px 2px rgb(14, 67, 156)",
			  });
			  
			$("#tt2").css({
			  "background-color":"#E1E1E1",
			   "color":"#000",
			   "box-shadow": "2px 2px 2px #C0C1C3",
			  });
			  
			$("#tt3").css({
			  "background-color":"#E1E1E1",
			   "color":"#000",
			   "box-shadow": "2px 2px 2px #C0C1C3",
			  });
		}
		else if(window.screen.width>0&&window.screen.width<=1024){
			$("#tt1").css({
			  "background-color":"#4988EF",
			   "color":"#fff",
			   "box-shadow": 0
			  });
			  
			$("#tt2").css({
			  "background-color":"#E1E1E1",
			   "color":"#000",
			   "box-shadow":0
			  });
			  
			$("#tt3").css({
			  "background-color":"#E1E1E1",
			   "color":"#000",
			   "box-shadow": 0
			  });
		}
		

	});
	
	$("#tt2").click(function(){
			
		$("#bottom2").css('display','block'); 
		$("#bottom1").css('display','none');
		$("#bottom3").css('display','none');
		
		if(window.screen.width>1024){
			$("#tt2").css({
			  "background-color":"#4988EF",
			   "color":"#fff",
			   "box-shadow": "2px 2px 2px rgb(14, 67, 156)",
			  });
		  $("#tt1").css({
			  "background-color":"#E1E1E1",
			   "color":"#000",
			   "box-shadow": "2px 2px 2px #C0C1C3",
			  });
			$("#tt3").css({
			  "background-color":"#E1E1E1",
			   "color":"#000",
			   "box-shadow": "2px 2px 2px #C0C1C3",
			  });
		}
		else if(window.screen.width>0&&window.screen.width<=1024){
			$("#tt2").css({
			  "background-color":"#4988EF",
			   "color":"#fff",
			   "box-shadow": 0
			  });
		  $("#tt1").css({
			  "background-color":"#E1E1E1",
			   "color":"#000",
			   "box-shadow": 0
			  });
			$("#tt3").css({
			  "background-color":"#E1E1E1",
			   "color":"#000",
			   "box-shadow": 0
			  });
		}
		
	});
	
		$("#tt3").click(function(){
			
		$("#bottom3").css('display','block'); 
		$("#bottom1").css('display','none');
		$("#bottom2").css('display','none');
		
		if(window.screen.width>1024){
			$("#tt3").css({
		  "background-color":"#4988EF",
		   "color":"#fff",
		   "box-shadow": "2px 2px 2px rgb(14, 67, 156)",
		  });
		  $("#tt2").css({
		  "background-color":"#E1E1E1",
		   "color":"#000",
		   "box-shadow": "2px 2px 2px #C0C1C3",
		  });
		$("#tt1").css({
		  "background-color":"#E1E1E1",
		   "color":"#000",
		   "box-shadow": "2px 2px 2px #C0C1C3",
		  });
		}
		else if(window.screen.width>0&&window.screen.width<=1024){
			$("#tt3").css({
		  "background-color":"#4988EF",
		   "color":"#fff",
		   "box-shadow": 0
		  });
		  $("#tt2").css({
		  "background-color":"#E1E1E1",
		   "color":"#000",
		   "box-shadow": 0
		  });
		$("#tt1").css({
		  "background-color":"#E1E1E1",
		   "color":"#000",
		   "box-shadow": 0
		  });
		}
		
	});
})
