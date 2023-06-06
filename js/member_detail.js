$(document).ready(function(){
	var datatosend={
		ID=id
	};
	$.ajax({
		type:"get",
		url:'../member/listmember.php',
		data:datatosend,
		crossDomain:true,
		dataType:"json",
		success:function(data){
			alert(data.SUCCESS);
			if(data.SUCCESS==true){
				 var company_logo=document.getElementsByClassname("company_logo");
				 var company_name=document.getElementsByClassname("company_name");
				 var industry=document.getElementsByClassname("industry");
				 var company=document.getElementsByClassname("company");
				 var homepage=document.getElementsByClassname("homepage");
				 var address=document.getElementsByClassname("address");
				 var phone=document.getElementsByClassname("phone");
				 var postcode=document.getElementsByClassname("postcode");
				
			}
				
			
		},
		error:function(data){var a=JSON.stringify(data);
			alert(a);
		 	 
		}
		error:function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
	    }
		
	});
	
	
	
	
});