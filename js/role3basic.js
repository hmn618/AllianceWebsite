/**
  *功能：从数据库中读取通知公告。
  *输出：公告信息。
  *作者：张城城、赵文骏
  *开发时间：2016.7.22
  *修改时间：2016.7.24
*/
$(function(){
	  
	  var datatosend={
		  
	  };
	  $.ajax({
		  type:"post",
		  url:'action/companyname.php',
		  data:datatosend,
		  crossDomain:true,
		  dataType:"json",
		  success:function(data){
//			  //var a=JSON.stringify(data);
//			  //alert(a);
			   if(data.SUCCESS==true){
				   var txt="";
				   for(var i=0;i<data.DATA.length;i++){
		                 txt+="<option value='"+data.DATA[i].COMPANYNAME+"'>"+data.DATA[i].COMPANYNAME+
						 "</option>";		  
				   }

				   document.getElementById('companyname').innerHTML=txt;
				      
			   }else{
				   alert(data.MSG);
			   }
			  
		  },
		  error:function(data){
			  var a=JSON.stringify(data);
			  alert(a);
		  }
		  
	  });
/*  

	  $.ajax({
		  type:"post",
		  url:'action/companyname.php',
		  data:datatosend,
		  crossDomain:true,
		  dataType:"json",
		  success:function(data){
//			 // var a=JSON.stringify(data);
//			  //alert(a);
			   if(data.SUCCESS==true){
				   var txt="";
				   for(var i=0;i<data.DATA.length;i++){
		                 txt+="<option value='"+data.DATA[i].COMPANYNAME+"'>"+data.DATA[i].COMPANYNAME+
						 "</option>";		  
				   }

				   document.getElementById('companyname').innerHTML=txt;
				      
			   }else{
				   alert(data.MSG);
			   }
			  
		  },
		  error:function(data){
			  var a=JSON.stringify(data);
			  alert(a);
		  }
		  
	  })
*/	  

	
});

$(document).ready(function(){
    $.ajax({
		type:"post",
		url:'action/getaccountinfo.php',
		crossDomain:true,
		dataType:"json",
		success:function(data){
//			var a=JSON.stringify(data);
//      alert(a);
			if(data.SUCCESS==true){
				
				$("#name").val(data.DATA[0].NAME);
				$("#email").val(data.DATA[0].EMAIL);
				$("#telphone").val(data.DATA[0].TEL);
				
			}else{
				alert(data.MSG);
			}
			
		},
		error:function(data){
			  var a=JSON.stringify(data);
			  alert(a);
         		}
		
		
	})
	
})

$(function(){
		var datatosend={
		  
	  }
	  $.ajax({
		  type:"post",
		  url:'action/showadmin.php',
		  data:datatosend,
		  crossDomain:true,
		  dataType:"json",
		  success:function(data){
//			var a=JSON.stringify(data);
//		    alert(a);
			if(data.SUCCESS==true){
				var txt="<tr>"+
					         "<th width='70%'>企业名称</th>"+
							 "<th width='30%'>操作</th>"+
							 "<th width='30%'>审核状态</th>"+
						"</tr>";
				for(var i=0;i<data.DATA.length;i++){
					if(data.DATA[i].SHENHE==0){
						data.DATA[i].SHENHE="待审核";
					}
					else if(data.DATA[i].SHENHE==1){
						data.DATA[i].SHENHE="已审核";
					}
					txt+="<tr>"+
					           "<td class='lie_1'><nobr><b>"+data.DATA[i].COMPANYNAME+"</b></nobr></td>"+
							   "<td><img name='"+data.DATA[i].COMPANYNAME+"?"+data.DATA[i].SHENHE+"'  src='../../img/content/login-in.png' class='img1' onclick='javascript:enter(this);'>"+
							       "<img name='"+data.DATA[i].COMPANYNAME+"' src='../../img/content/delete.png' class='img2' onclick='javascript:delete1(this);'></td>"+
							   "<td>"+data.DATA[i].SHENHE+"</td>";
				}
				document.getElementById('tables').innerHTML=txt;
				
			}
			
		  },
		  error:function(data){
			  var a=JSON.stringify(data);
			  alert(a);
		  }
		  
		  
	  })
	  

//数据库里添加个人信息
$('#btn1').click(function(){
	var name=$("#name").val();
	var email=$("#email").val();
	var telphone=$("#telphone").val();
	var datatosend={
		"name":name,
		"email":email,
		"telphone":telphone
	};
	
	$.ajax({
		type:"post",
		url:'action/addperson.php',
		data:datatosend,
		crossDomain:true,
		dataType:"json",
		success:function(data){
			
			if(data.SUCCESS==true){
				alert("添加成功");
			}else{
				alert(data.MSG);
			}
			
		},
		error:function(data){
			  var a=JSON.stringify(data);
			  alert(a);
		 }
	})
	
	
	
});


 $('#addadmin').click(function(){
		 var name=document.getElementById('companyname').value;
		 var datatosend={
			 "companyname":name,
		 };
		 $.ajax({
			 type:"post",
			 url:'action/addadmin.php',
			 data:datatosend,
			 crossDomain:true,
			 dataType:"json",
				success:function(data){
				//	var a=JSON.stringify(data);
				//	alert(a);
					if(data.SUCCESS=="true"){
						alert("绑定完成");
						window.location.href="basic.php";
					}
					else{
						alert(data.MSG);
					}
				},
				error:function(data){
				  var a=JSON.stringify(data);
				  alert(a);
			  }
		 });
		  
	});
		//登出函数
	$("#logout").click(function(){
		window.location.href = "../checklogout.php";
	});
});	  


function enter(x){
	  tmp=x.name.split("?");
	  if(tmp[1]=="待审核")
	  	alert("请等待审核");
	  else
	  	window.location.href="action/jumptorole2.php?name="+tmp[0];
	  
}

function delete1(x){
	  datatosend={
	  	"companyname":x.name
	  }
	  $.ajax({
		  type:"post",
		  url:'action/delete.php',
		  data:datatosend,
		  crossDomain:true,
		  dataType:"json",
		  success:function(data){
			  if(data.SUCCESS=="true"){
				  alert("删除成功");
				  window.location.href="basic.php";
			  }else{
				  alert(data.MSG);
			  }
			  
		  },
	  	error:function(data){
			  var a=JSON.stringify(data);
			  alert(a);
		  }
	  });
}