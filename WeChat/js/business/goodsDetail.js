//var goodsId=1;
var baseurl="http://111.207.243.66:8886/SZBProject";

window.onload=function(){	

}
$(function(){
	
	function getQueryString(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
		if (r != null) 
			return unescape(r[2]);
		return null;
	  }
	
	var bgURL=decodeURI(getQueryString("bgURL"));
	$("img").attr("src",bgURL);
	
	
//	var goodsURL =decodeURI(getQueryString("goodsURL"));
	
//	getGoodById(goodsId);	
	
//	function getGoodById(goodsId){
//		console.log("1");
		
//		var datatosend = {"goodsId":goodsId};
//		//获取最小价格和商品名的请求
//		$.ajax({	
//			type:"get",
//			url:baseurl+"/commodity/commodity_findById",
//			async:false,
//			data:datatosend,
//			dataType:"json",
//			crossDomain:true,
//			success:function(data){
////				console.log(data);
//				if(data.result==true){
////					alert("查找商品成功！");
//					var minPrice = data.datum[0].minPrice;
//					var goodsName = data.datum[0].goodsName;
//					var datatobg = {"goodsId":goodsId,
//									"minPrice":minPrice,
//									"goodsName":goodsName,
//									};
//					//生成大图并返回大图和商品图片URL的请求
//					$.ajax({	
//						type:"get",
//						url:baseurl+"/commodity/commodity_findById",
//						async:false,
//						data:datatobg,
//						dataType:"json",
//						crossDomain:true,
//						success:function(data){
//			//				console.log(data);
//							if(data.result==true){
//			//					alert("成功生成图片！");
////								var goodsURL = data.datum[0].goodsURL;
//								var bgURL = data.datum[0].bgURL;
//								$("img").attr("src",bgURL);
//								var datatourl = {"goodsId":goodsId,
//												"goodsURL":goodsURL,
//												};
//								//存储图片URL的请求
//								$.ajax({	
//									type:"get",
//									url:baseurl+"/commodity/commodity_findById",
//									async:false,
//									data:datatourl,
//									dataType:"json",
//									crossDomain:true,
//									success:function(data){
//						//				console.log(data);
//										if(data.result==true){
//						//					alert("存储图片URL成功！");
//										
//										}else{
//											alert(data.reason);
//											
//										}
//									},
//									error: function(XMLHttpRequest, textStatus, errorThrown) {
//						//		            console.log("+++++");
//								            console.log(XMLHttpRequest.status);
//											console.log(XMLHttpRequest.readyState);
//											console.log(textStatus);
//								       }
//								});				
//								
//							}else{
//								alert(data.reason);
//								
//							}
//						},
//						error: function(XMLHttpRequest, textStatus, errorThrown) {
//			//		            console.log("+++++");
//					            console.log(XMLHttpRequest.status);
//								console.log(XMLHttpRequest.readyState);
//								console.log(textStatus);
//					       }
//					});
//				}else{
//					alert(data.reason);
//					
//				}
//			},
//			error: function(XMLHttpRequest, textStatus, errorThrown) {
////		            console.log("+++++");
//		            console.log(XMLHttpRequest.status);
//					console.log(XMLHttpRequest.readyState);
//					console.log(textStatus);
//		       }
//		});
//	}
	
		
})
