/*---------------------mobile----------------------*/
$(document).ready(function(){
/*---------------------header---------------------------*/

	


/*---------------------1--------------------------------*/
	var news=document.getElementsByClassName("item");
	if(news.length>4){
		for(var i=0;i<news.length-4;i++){
			news[i+4].style.display="none";
		}
	}
	var a=Math.floor(news.length/4);
	var b=news.length-4*a;
	var c=0;
		$("#load1").click(function(){
			if(a>c){
				for(o=0;o<4;o++){
					news[(a-1)*4+o+1].style.display="block";
					c++;
				}
			}
			for(j=0;j<b;j++){
				news[j+a*4].style.display="block";
			}
		});
	
/*-------------------------2------------------------------*/	
	var news2=document.getElementsByClassName("item2");
	if(news2.length>4){
		for(var k=0;k<news2.length-4;k++){
			news2[k+4].style.display="none";
		}
	}
	var a2=Math.floor(news2.length/4);
	var b2=news2.length-4*a2;
	var c2=0;
		$("#load2").click(function(){
			if(a2>c2){
				for(o2=0;o2<4;o2++){
					news2[(a2-1)*4+o2+1].style.display="block";
					c2++;
				}
			}
			for(l=0;l<b2;l++){
				news2[l+a2*4].style.display="block";
			}
		});
	
	
/*--------------------------3---------------------------*/	
	var news3=document.getElementsByClassName("item3");
	if(news3.length>4){
		for(var m=0;m<news3.length-4;m++){
			news3[m+4].style.display="none";
		}
	}
	
	var a3=Math.floor(news3.length/4);
	var b3=news3.length-4*a3;
	var c3=0;
		$("#load3").click(function(){
			if(a3>c3){
				for(o3=0;o3<4;o3++){
					news3[(a3-1)*4+o3+1].style.display="block";
					c3++;
				}
			}
			for(n=0;n<b3;n++){
				news3[n+a3*4].style.display="block";
			}
		});
	
/*--------------------------specialist--------------------*/
	var spe=document.getElementsByClassName("row");
	if(spe.length>2){
		for(var p=0;p<spe.length-2;p++){
			spe[p+2].style.display="none";
		}
	}
	
	var a4=Math.floor(spe.length/2);
	var b4=spe.length-2*a4;
	var c4=0;
		$("#load4").click(function(){
			if(a4>c4){
				for(o4=0;o4<2;o4++){
					spe[(a4-1)*2+o4+1].style.display="block";
					c4++;
				}
			}
			//alert("a");
			for(q=0;q<b4;q++){
				spe[q+a4*2].style.display="block";
			}
		});

/*-------------------member-----------------------*/
	var other=document.getElementsByClassName("otherRow");
	if(other.length>1){
		for(var r=0;r<other.length-1;r++){
			other[r+1].style.display="none";
		}
	var s=1;
		$("#load5").click(function(){
		other[s].style.display="block";
		s++;
	});
	}
	
	
		
	
$("#notice1").click(function(){
		$("#master1").css('display','block'); 
		$("#master2").css('display','none'); 
		$("#master3").css('display','none');
		$("#notice1").css({
		  "background-color":"#fff",
		  "border-top":"2px solid #001AC8"
		  });
		 $("#notice2").css({
		  "background-color":"#F6F8FA",
		  "border-top":"none"
		  });
		  $("#notice3").css({
		  "background-color":"#F6F8FA",
		  "border-top":"none"
		  });
	});
	$("#notice2").click(function(){
		$("#master2").css('display','block'); 
		$("#master1").css('display','none'); 
		$("#master3").css('display','none');
		$("#notice2").css({
		  "background-color":"#fff",
		  "border-top":"2px solid #001AC8"
		  });
		   $("#notice1").css({
		  "background-color":"#F6F8FA",
		  "border-top":"none"
		  });
		  $("#notice3").css({
		  "background-color":"#F6F8FA",
		  "border-top":"none"
		  });
	});
	$("#notice3").click(function(){
		$("#master3").css('display','block'); 
		$("#master2").css('display','none'); 
		$("#master1").css('display','none');
		$("#notice3").css({
		  "background-color":"#fff",
		  "border-top":"2px solid #001AC8"
		  });
		  $("#notice2").css({
		  "background-color":"#F6F8FA",
		  "border-top":"none"
		  });
		  $("#notice1").css({
		  "background-color":"#F6F8FA",
		  "border-top":"none"
		  });
	});
	
	
})
