/*功能：活动列表管理
 *输入：活动表项内容
 *输出：封面图片的地址
 *作者：赵文骏
 *开发时间：2016.7.19
 *最后修改时间：2016.7.19
*/

// 点击profession获取详细信息
function get_company(tag) {
	var company_name = tag.innerHTML;
	var datatosend={
		"company_name":company_name
	};
	$.ajax({
		type:"post",//方式是post或是get，与后台人员协商，一般为get
		url:'../../backstage/role4/action/getCompany.php',//处理的后台action的URL
		data:datatosend,
		crossDomain:true,//不用管
		dataType:"json",//不用管
		success:function(result){
			if(result.SUCCESS==true){
				var insertPicCon='<div class="picgroup clearfix"></div>';
				var insertHtml='';
				var data={
					name:result.name,
					addr:result.addr,
					type:result.type,
					homepage:result.homepage,
					status:result.status,
					field:result.field
				};
				insertHtml="<table class='biao'><tr><td>单位名称</td><td>"+data.name+"</td><td>通讯地址</td><td>"+data.addr+
					"</td></tr><tr><td>单位性质</td><td>"+data.type+"</td><td>网站</td><td>"+data.homepage+
					"</td></tr><tr><td>申请成员等级</td><td>"+data.status+"</td><td>贵单位所属行业</td><td>"+data.field+"</td></tr></table>" ;
				insertPicCon=insertPicCon.replace("",insertHtml);
				$.MsgBox.Confirm("单位基本信息",insertPicCon,function(){

				});
			}else{
				alert(result.MSG);
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown) {//这是错误处理，会在console口输出一些状态号帮助我们查看错误原因
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
			console.log(XMLHttpRequest.responseText);
		}
	});
}

$(function(){
	$.ajax({
		type:"post",//方式是post或是get，与后台人员协商，一般为get
		url:'../../backstage/role4/action/listMember.php',//处理的后台action的URL
		crossDomain:true,//不用管
		dataType:"json",//不用管
		success:function(data){
			//这时候就开始在接收数据成功后的一些动作，随意设置操作DOM，或是其他需要的操作都在这里
			//var a=JSON.stringify(data);
			//alert(a);
			if(data.SUCCESS==true){				
				var txt="<tr><th class='tc'  width='5%'></th><th width='25%'>名称</th><th  width='25%'>地址</th><th  width='15%'>电话</th><th  width='10%'>状态</th><th  width='10%'>材料</th></tr>";
				for(var i=0;i<data.DATA.length;i++){
					if(data.DATA[i].SHENHE>=100)
						shenhe="已入盟";
					else 
						shenhe="待审核";
					txt+="<tr  class='industry' style='display:none;'><td class='tc' ><input name='id[]' value='"+data.DATA[i].ID+"' type='checkbox'></td><td class='lie_1'> <nobr><b onclick='get_company(this);'>"+data.DATA[i].NAME+"</b></nobr></td> <!--标签ID--><td class='lie_2'> <nobr><b>"+data.DATA[i].ADDR+"</b></nobr></td> <!--标签ID--><td><nobr><b>"+data.DATA[i].TEL+"</b></nobr></td> <td><b>"+shenhe+"</b></td><td><b>下载</b></td>  </tr>";
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
			};
			//alert("heheda");
			$.ajax({
				type:"post",//方式是post或是get，与后台人员协商，一般为get
				url:'./action/updateMember.php',//处理的后台action的URL
				data:datatosend,//发送的数据即刚刚定义的那个
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
			//alert("到底哪里出错了呀")
		});
		alert("审核成功");
		window.location.href="member.php";
	});
	//删除事件
	$(".button_2").click(function(){
		$("input:checked").each(function(){
			datatosend={
				"id":parseInt(this.value),
				"act":"delete",
			}
			//alert("heheda");
			$.ajax({
				type:"post",//方式是post或是get，与后台人员协商，一般为get
				url:'./action/updateMember.php',//处理的后台action的URL
				data:datatosend,//发送的数据即刚刚定义的那个
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
			//alert("为什么不执行呀");
		});
		alert("踢出成功");
		window.location.href="member.php";
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