/*功能：活动列表管理
 *输入：活动表项内容
 *输出：封面图片的地址
 *作者：赵文骏
 *开发时间：2016.7.19
 *最后修改时间：2016.7.19
*/
$(function(){
	var onepagelength
	var btngroup;
	var industry;
	var page;
	var now;
	var k;
	var datatosend={
		"type":"2"
	};
	$.ajax({
		type:"post",//方式是post或是get，与后台人员协商，一般为get
		url:'../../backstage/role4/action/listArticle.php',//处理的后台action的URL
		data:datatosend,//发送的数据即刚刚定义的那个
		crossDomain:true,//不用管
		dataType:"json",//不用管
		success:function(data){
			//这时候就开始在接收数据成功后的一些动作，随意设置操作DOM，或是其他需要的操作都在这里
			//var a=JSON.stringify(data);
			//alert(a);
			if(data.SUCCESS==true){				
				var txt="<tr><th class='tc'  width='10%'></th><th width='40%'>名称</th><th width='20%'>发布单位</th><th  width='15%'>发布时间</th><th  width='15%'>状态</th></tr>";
				for(var i=0;i<data.DATA.length;i++){
					if(data.DATA[i].ISPOST=="1")
						var ISPOST="已审核";
					else
						var ISPOST="待审核";
					txt+="<tr class='industry' style='display:none;'><td class='tc'><input name='id[]' type='checkbox'  value='"+data.DATA[i].ID+"'></td><td class='lie_1'> <nobr><b><a href='active.php?id="+data.DATA[i].ID+"'>"+data.DATA[i].MAINTITLE+"</b></nobr></td> <!--标签ID--><td class='lie_2'><nobr><b>"+data.DATA[i].AUTHOR+"</b></nobr> </td><td><b>"+data.DATA[i].CREATIME+"</b></td> <td><b>"+ISPOST+"</b></td></tr>";
					
				}
				document.getElementById('table').innerHTML=txt;
				onepagelength=8;
				btngroup=document.getElementById("btngroup");
				industry=document.getElementsByClassName("industry");
				page=Math.ceil(industry.length/onepagelength);
				for(var a=0;a<onepagelength;a++){
					industry[a].style.display="table-row";
				}
				now=document.getElementById("now");				
				k=now.innerHTML;
			}else{
				alert(data.MSG);
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {//这是错误处理，会在console口输出一些状态号帮助我们查看错误原因
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
			console.log(XMLHttpRequest.responseText);
	    }
	});
	//审核事件
	$(".button_1").click(function(){
		$("input:checked").each(function(){
			datatosend={
				"id":parseInt(this.value),
				"act":"post",
			}
			$.ajax({
				type:"post",//方式是post或是get，与后台人员协商，一般为get
				url:'../../backstage/role4/action/updateArticle.php',//处理的后台action的URL
				data:datatosend,//发送的数据即刚刚定义的那个
				crossDomain:true,//不用管
				dataType:"json",//不用管
				success:function(data){
					//这时候就开始在接收数据成功后的一些动作，随意设置操作DOM，或是其他需要的操作都在这里
					//var a=JSON.stringify(data);
					//alert(a);
					if(data.SUCCESS=="true"){	
					}else{
						alert(data.MSG);
					}
				},
				error:function(XMLHttpRequest, textStatus, errorThrown) {//这是错误处理，会在console口输出一些状态号帮助我们查看错误原因
					console.log(XMLHttpRequest.status);
					console.log(XMLHttpRequest.readyState);
					console.log(textStatus);
					console.log(XMLHttpRequest.responseText);
			    }
			});
		});
		alert("审核成功");
		window.location.href="active_manage.php";
	});
	//删除事件
	$(".button_2").click(function(){
		$("input:checked").each(function(){
			datatosend={
				"id":parseInt(this.value),
				"act":"delete",
			}
			$.ajax({
				type:"post",//方式是post或是get，与后台人员协商，一般为get
				url:'../../backstage/role4/action/updateArticle.php',//处理的后台action的URL
				data:datatosend,//发送的数据即刚刚定义的那个
				crossDomain:true,//不用管
				dataType:"json",//不用管
				success:function(data){
					//这时候就开始在接收数据成功后的一些动作，随意设置操作DOM，或是其他需要的操作都在这里
					//var a=JSON.stringify(data);
					//alert(a);
					if(data.SUCCESS=="true"){	
					}else{
						alert(data.MSG);
					}
				},
				error:function(XMLHttpRequest, textStatus, errorThrown) {//这是错误处理，会在console口输出一些状态号帮助我们查看错误原因
					console.log(XMLHttpRequest.status);
					console.log(XMLHttpRequest.readyState);
					console.log(textStatus);
					console.log(XMLHttpRequest.responseText);
			    }
			});
		});
		alert("删除成功");
		window.location.href="active_manage.php";
	});
	
	//登出函数
	$("#logout").click(function(){
		window.location.href = "../checklogout.php";
	});
	
	$("#nextPage").click(function(){
		if(now.innerHTML<page){
			for(var d=0;d<industry.length;d++){
			industry[d].style.display="none";
		}
		
		for(var a=0;a<onepagelength;a++){
			if(now.innerHTML<page){
				if(now.innerHTML<page-1){
					industry[now.innerHTML*onepagelength+a].style.display="table-row";
				}
				else if(now.innerHTML=page-1){
					for(var b=onepagelength*k;b<industry.length;b++){
						industry[b].style.display="table-row";
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
			industry[(k-2)*onepagelength+a].style.display="table-row";
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
			industry[a].style.display="table-row";
		}
	});
	
	$("#final").click(function(){
		//k=page;
		if(now.innerHTML!=page){
			
			for(var d=0;d<industry.length;d++){
				industry[d].style.display="none";
			}
			for(var b=onepagelength*(page-1);b<industry.length;b++){
				industry[b].style.display="table-row";
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
