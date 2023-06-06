
var baseurl="http://111.207.243.66:8886/SZBProject";
var baseurlOpenid="http://182.92.222.75/wechatService";
var openid,nick;
window.onload=function(){	
	
}
$(function(){
	
	
	function getQueryString(name) {
		
		//接收参数id
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
		if (r != null) 
			return unescape(r[2]);
		return null;
	  }
	
	var code=decodeURI(getQueryString("code"));
	var pageSize=decodeURI(getQueryString("pageSize"));
	if(pageSize==""||pageSize=="null"||pageSize==undefined){
		pageSize=5;
	}
	var pageNo=decodeURI(getQueryString("pageNo"));
	if(pageNo==""||pageNo=="null"||pageNo==undefined){
		pageNo=1;
	}
	var page,listNum,remainder;
//	alert("code是："+code);
//	alert("pageSize是："+pageSize);
//	alert("pageNo是："+pageNo);
//	

	if(code==""||code=="null"||code==undefined){
		openid=decodeURI(getQueryString("openid"));
		nick=decodeURI(getQueryString("nick"));
		
//		alert("openid2是："+openid);
		getListNum();
		getGoodsList();
	}else if(!sessionStorage.openid){
//		alert("sessionStorage.openid是空："+sessionStorage.openid);
		getOpenid();
	}else{
//		alert("sessionStorage.openid不是空："+sessionStorage.openid);
		openid = sessionStorage.openid;
		nick = sessionStorage.nick;
		getListNum();
		getGoodsList();
	}
	function getOpenid(){
		var datatocode = {"code":code,"lang":"zh_CN"};
		$.ajax({	
			type:"post",
			url:baseurlOpenid+"/getOAuth2UserInfo",
			async:false,
			data:datatocode,
			dataType:"json",
			crossDomain:true,
			success:function(data){
//				console.log(data);
				if(data.result==true){
//					alert("查找openid成功！");
					nick = data.datum.nickname;
					openid = data.datum.openId;
					sessionStorage.openid = openid;
					sessionStorage.nick = nick;
//					alert("openid是："+openid);
					getListNum();
					getGoodsList();
				}else{
					alert(data.reason);
					
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
//		            console.log("+++++");
		            console.log(XMLHttpRequest.status);
					console.log(XMLHttpRequest.readyState);
					console.log(textStatus);
		       }
		});
		
	}
	

	
	
	function goodsTemp(goodsId,goodsURL,goodsName,num,reDate){
		var str ='<li class="goodTemp" id="GOODSID">'
			+'<div class="good">'
			+'<div class="pic"><img src="GOODSURL"></div>'
			+'<div class="des">'
			+'<p class="name">商品：GOODSNAME</p>'
			+'<p class="num">销量：NUM</p>'
			+'<p class="date">日期：REDATE</p>'
			+'</div></div></li><hr />';
		str=str.replace("GOODSID",goodsId).replace("GOODSURL",goodsURL).replace("GOODSNAME",goodsName).replace("NUM",num).replace("REDATE",reDate);
		return str;
	}
	
	function getListNum(){
		console.log("1");
		var datatonum = {"openid":openid};
		$.ajax({	
			type:"post",
			url:baseurl+"/goods/findGoodsListNumByOpenid",
			async:false,
			data:datatonum,
			dataType:"json",
			crossDomain:true,
			success:function(data){
//				console.log(data);
				if(data.result==true){
//					alert("查找商品列表数目成功！");
					listNum= data.datum;
//					alert("listNum是："+listNum);
					
				}else{
					alert(data.reason);
					
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
//		            console.log("+++++");
		            console.log(XMLHttpRequest.status);
					console.log(XMLHttpRequest.readyState);
					console.log(textStatus);
		       }
		});
	}
	
	function getGoodsList(){
		console.log("1");
		var datatosend = {"openid":openid,
						  "pageSize":pageSize,
						  "pageNo":pageNo
						};
		var allGoodsId=new Array();
		$.ajax({	
			type:"post",
			url:baseurl+"/goods/findGoodsListByOpenid",
			async:false,
			data:datatosend,
			dataType:"json",
			crossDomain:true,
			success:function(data){
//				console.log(data);
				if(data.result==true){
//					alert("显示商品列表成功！");
					var htmlTemp;
					$(".goodsListTemp").empty();
					for(var i=0;i<data.datum.length;i++){
						var goodsId=data.datum[i].goodsId;
						 allGoodsId[i]=goodsId;
						 var reDate = data.datum[i].reDate;
//						 alert("reDate:"+reDate);
						 htmlTemp=goodsTemp(goodsId,data.datum[i].goodsURL,data.datum[i].goodsName,data.datum[i].sales,reDate);
						 $(".goodsListTemp").append( htmlTemp);
					}
				}else{
					alert(data.reason);
					
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
//		            console.log("+++++");
		            console.log(XMLHttpRequest.status);
					console.log(XMLHttpRequest.readyState);
					console.log(textStatus);
		       }
		});
	}
	
	
	$("li.goodTemp").on("click",function(){
//		console.log($(this).attr("id"));
		var goodsId = $(this).attr("id");
		window.location.href = encodeURI("changeGoods.html?goodsId="+goodsId+"&openid="+openid+"&nick="+nick);
	})
	
	
	
	//刷新分页
	//touchstart事件  
	var x,y,startX,startY,endX,endY;
	var isScrolling;
	var startDate,endDate,duration;
	var obj = document; 
	obj.addEventListener('touchstart', function(e) { 
//		e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
	    var touch = e.targetTouches[0]; //获取第一个触点  
	    x = Number(touch.pageX); //页面触点X坐标  
	    y = Number(touch.pageY); //页面触点Y坐标  
	    //记录触点初始位置  
	    startX = x;  
	    startY = y;  
	    startDate = new Date();
	})
	
	//touchmove事件 
	obj.addEventListener('touchmove', function(e) { 
//	    e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
	    var touch = e.targetTouches[0]; //获取第一个触点  
	    x = Number(touch.pageX); //页面触点X坐标  
	    y = Number(touch.pageY); //页面触点Y坐标  
	    //判断滑动方向  
	    endX = x - startX ;
	    endY = y - startY ;
	    isScrolling = Math.abs(endX) < Math.abs(endY) ? 1:0; 
//	    if(isScrolling==1){
//	    	alert("纵向滑动");
//	    }
//	    if(isScrolling==0){
//	    	alert("横向滑动");
//	    }
	})  
	//touchend事件 
	obj.addEventListener('touchend', function(e) { 
//	    e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
	    endDate = new Date();
	    duration = endDate-startDate;
	    if(isScrolling==1){
	    	if(Number(duration) > 10){
				//判断是上移还是下移，当偏移量大于10时执行
				if(endY > 10){
//					alert("下移");
					if(pageNo==1){
//						$.MsgBox.Alert("","已经是第一页");
						
					}else if(pageNo>1){
						pageNo = parseInt(pageNo)-1;
						window.location.href = "goodsManagement.html?openid="+openid+"&pageSize="+pageSize+"&pageNo="+pageNo+"&nick="+nick;
					}
					
				}else if(endY < -10){
					remainder = listNum % pageSize;
					if(remainder==0){
						page= Math.floor(listNum/pageSize);
					}else{
						page= Math.floor(listNum/pageSize)+1;
					}
					if(page==pageNo){
//						$.MsgBox.Alert("","已经是最后一页");
					}else if(page>pageNo){
						pageNo = parseInt(pageNo)+1;
						window.location.href = "goodsManagement.html?openid="+openid+"&pageSize="+pageSize+"&pageNo="+pageNo+"&nick="+nick;
					}
					
//					alert("上移");
				}
			}

	    	
	    }
	})  
	
	
	
	
	
	
	
	
	
		
})
