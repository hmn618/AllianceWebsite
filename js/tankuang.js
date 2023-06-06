$(document).ready(function(){
	$("#btn1").click(function(){
			var insertPicCon='<div class="picgroup clearfix"></div>';
					var insertHtml='';
					var data={
						name:"aa",
						addr:"bb",
						type:"cc",
						homepage:"dd",
						status:"ee",
						field:"ff"
					};
					insertHtml="<table class='biao'><tr><td>单位名称</td><td>"+data.name+"</td><td>通讯地址</td><td>"+data.addr+
						"</td></tr><tr><td>单位性质</td><td>"+data.type+"</td><td>网站</td><td>"+data.homepage+
						"</td></tr><tr><td>申请成员等级</td><td>"+data.status+"</td><td>贵单位所属行业</td><td>"+data.field+"</td></tr></table>" ;
					insertPicCon=insertPicCon.replace("",insertHtml);
					$.MsgBox.Confirm("单位基本信息",insertPicCon,function(){
						
					});
					
		});
		
		$("#btn2").click(function(){
			var insertPicCon='<div class="picgroup clearfix"></div>';
					var insertHtml='';
					var data={
						photodir:"aa",
						name:"bb",
						sex:"cc",
						birthday:"dd",
						title:"ee",
						degree:"ff",
						school:"ff",
						mobile:"ff",
						email:"ff",
						cardnum:"ff",
						workunit:"ff",
						unittype:"ff",
						profession:"ff",
					};
					insertHtml="<table class='biao'><tr><td rowspan='4'>照片</td><td rowspan='4'>"+data.photodir+
						"</td><td>姓名</td><td>"+data.name+"</td></tr><tr><td>性别</td><td>"+data.sex+"</td></tr><tr><td>出生日期</td><td>"+data.birthday+
						"</td></tr><tr><td>职称</td><td>"+data.title+"</td></tr><tr><td>最终学位</td><td>"+data.degree+
						"</td><td>毕业院校</td><td>"+data.school+"</td></tr><tr><td>手机</td><td>"+data.mobile+
						"</td><td>E-mail</td><td>"+data.email+"</td></tr><tr><td>身份证号</td><td>"+data.cardnum+
						"</td><td>单位名称</td><td>"+data.workunit+"</td></tr><tr><td>单位类型</td><td>"+data.unittype+
						"</td><td>职务</td><td>"+data.profession+"</tr></table>" ;
					insertPicCon=insertPicCon.replace("",insertHtml);
					$.MsgBox.Confirm("单位基本信息",insertPicCon,function(){
						
					});
					
		});
})
