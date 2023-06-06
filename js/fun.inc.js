	$("nav li[class!='line']").hover(
	   function(){
	       var likd=$(this).width(),dlkd=$(this).find('dl').width();
           if(dlkd<=likd){$(this).find('dl').width(likd);}
           else{
		      $(this).find('dl').width(dlkd);
			  var rckd=0,my=$(this).index();
			  $('nav li').each(function(j){
			     if(j>=my){
				    rckd+=$(this).width();
				 }
				    return rckd;
			  });
			  var lfdkx=rckd-dlkd;
			 if(lfdkx<0){ $(this).find('dl').css("left",lfdkx+'px');}
		   }	
           $(this).addClass('hover');		   
	       $(this).find('dl').show();		   
	   }
	   ,
	   function(){
	       $(this).removeClass('hover');
	       $(this).find('dl').hide();
	   }
	);
