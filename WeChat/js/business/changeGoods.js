
var baseurl="http://111.207.243.66:8886/SZBProject";
var baseurlImg="http://szb.4thservice.net/CreateImage/CreateImageUrl";
var defaultURL;
window.onload=function(){	

}
$(function(){
	
	//optional(element)，用于表单控件的值不为空时才触发验证。
	//联系电话，就是这个版本
	jQuery.validator.addMethod("isTel", function(value, element) {   
	    var tel = /^1[3|4|5|7|8]\d{9}$/;
	    return this.optional(element) || (tel.test(value));
	}, "请输入正确的联系电话");
	//微信
	jQuery.validator.addMethod("isWeixin", function(value, element) {   
	    var weixin = /^[a-z_\d]+$/;
	    return this.optional(element) || (weixin.test(value));
	}, "请输入正确的微信号");
	//邮费
	jQuery.validator.addMethod("isPost", function(value, element) {   
	    var post = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
	    return this.optional(element) || (post.test(value));
	}, "请输入正确的邮费");
	//价格
	jQuery.validator.addMethod("isPrice", function(value, element) {   
	    var price = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
	    return this.optional(element) || (price.test(value));
	}, "请输入正确的价格");
	//库存
	jQuery.validator.addMethod("isStock", function(value, element) {   
	    var stock = /^(\+|-)?\d+$/;
	    return this.optional(element) || (stock.test(value)&& value>=0);
	}, "库存数必须为整数");
	
	
	
	
	// 在键盘按下并释放及提交后验证提交表单
	 $(".goodsInfo").validate({
	 	 onsubmit: true,
	 	 onfocusout: false ,
	 	 onkeyup: false, 
	 	 submitHandler:function() {
                 ajaxSubmitForm();
            },
        errorPlacement: function(error, element) {  
//		    error.appendTo(element.parent());  
		    $.MsgBox.Alert("",error.text());
		},
   		 rules: {
      		goodsName: {
		        required: true,
		        maxlength: 13
	       },
	       phone:{
	       	    required: true,
	       	    isTel:true
	       },
	       weixin:{
	       		isWeixin:true
	       },
	       post:{
	       		isPost:true
	       },
//	       goodsPrice:{
//	       		required: true,
//	       		isPrice:true
//	       },
//	       stock:{
//	       		required: true,
//	       		isStock:true
//	       }
        },
    	messages: {
      		 goodsName: {
		        required: "请输入商品名",
		        maxlength: "商品名不能超过13个字"
     		 },
     		 phone:{
     		 	required: "请输入联系电话",
     		 	isTel:"请输入正确的联系电话"
     		 },
     		 weixin:{
	       		isWeixin:"请输入正确的微信号"
	         },
	         post:{
	       		isPost:"请输入正确的邮费(小数点后保存两位)"
	         },
//	         goodsPrice:{
//	       		required: "请输入价格",
//	       		isPrice:"请输入正确的价格（小数点后两位）"
//	       },
//	       stock:{
//	       		required: "请输入库存",
//	       		isStock:"库存数必须为正整数"
//	       }
        }
      
    })
	 
	 
	 ///////////////////////////////////
	 
	 
//	 
//	 				var htmlTemp;
//					var len = 3;
//					var j;
//					for(var i=0;i<len;i++){
//						 j = i+1;
//						 htmlTemp=configTemp(j,"L","红色",j,j);
//						 $("#accordion").append( htmlTemp);
//						 
//						 
//					}
//					
	 
	 ///////////////////////////////////
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	
	//jueryUI
//	$("#accordion").accordion();
	function getQueryString(name) {
		
		//接收参数id
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = encodeURI(window.location.search).substr(1).match(reg);
		if (r != null) 
			return unescape(r[2]);
		return null;
	  }
	
	var goodsId=decodeURI(getQueryString("goodsId"));
	var openid=decodeURI(getQueryString("openid"));
	var nick=decodeURI(getQueryString("nick"));
	
//	var goodsId = 74;
	
	getGoodById(goodsId);	
	
	function configTemp(j,config1,config2,goodsPrice,stock){
		var str =' <h2><a href="#" class="ID">TYPEI：CONFIG1 CONFIG2</a></h2>'
			+'<div id="ROWI">'
			+'<div class="subContainer">'
			+'<div class="infoName"><p>规格 1</p></div>'
			+'<input name="config1" class="config1" type="text" placeholder="如：“红色”" value="CONFIGONE"  />'
			+'</div>'
			+'<hr />'
			+'<div class="subContainer">'
			+'<div class="infoName"><p>规格2</p></div>'
			+'<input name="config2" class="config2" type="text" placeholder="如：“XL”" value="CONFIGTWO"  />'
			+'</div>'
			+'<hr />'
			+'<div class="subContainer">'
			+'<div class="infoName"><p>价格</p></div>'
			+'<input name="GPNAME" class="goodsPrice" type="text" placeholder="单位（元）" value="GOODSPRICE" />'
			+'</div>'
			+'<hr />'
			+'<div class="subContainer">'
			+'<div class="infoName"><p>库存</p></div>'
			+'<input name="STNAME" class="stock" type="text" placeholder="整数" value="STOCK" />'
			+'</div>'
			+'<hr />'
			+'</div>';
		str=str.replace("ID","id"+j).replace("TYPEI","分类"+j).replace("ROWI","row"+j).replace("CONFIG1",config1).replace("CONFIG2",config2).replace("CONFIGONE",config1).replace("CONFIGTWO",config2).replace("GPNAME","goodsPrice"+j).replace("GOODSPRICE",goodsPrice).replace("STNAME","stock"+j).replace("STOCK",stock);
		return str;
	}
	
	
	function getGoodById(goodsId){
		console.log("getGoodById");
		var datatosend = {"goodsId":goodsId,
		                  "openid":openid
						};
		//取公共数据的请求
		$.ajax({	
			type:"post",
			url:baseurl+"/goods/showGoodsByGoodsId",
			async:false,
			data:datatosend,
			dataType:"json",
			crossDomain:true,
			success:function(data){
//				console.log(data);
				if(data.result==true){
//					alert("查找商品成功！");
					var defaultName = data.datum.goodsName;
					var defaultPhone = data.datum.phone;
					var defaultWeixin = data.datum.weixin;
					var defaultPost = data.datum.postageFee;
					defaultURL = data.datum.goodsURL;
//					alert(defaultURL);
					if(defaultName!=""&&defaultName!=null&&defaultName!=undefined){
						$("#goodsName").val(data.datum.goodsName);
					}
					if(defaultPhone!=""&&defaultPhone!=null&&defaultPhone!=undefined){
						$("#phone").val(data.datum.phone);
					}
					if(defaultWeixin!=""&&defaultWeixin!=null&&defaultWeixin!=undefined){
						$("#weixin").val(data.datum.weixin);
					}
					if(defaultPost!=""&&defaultPost!=null&&defaultPost!=undefined){
						$("#post").val(data.datum.postageFee);
					}
					if(defaultURL!=""&&defaultURL!=null&&defaultURL!=undefined){
						$("img").attr("src",data.datum.goodsURL);
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
			//取规格数据的请求
		$.ajax({	
			type:"post",
			url:baseurl+"/config/showConfigListByGoodsId",
			async:false,
			data:datatosend,
			dataType:"json",
			crossDomain:true,
			success:function(data){
//				console.log(data);
				if(data.result==true){
//					alert("查找商品成功！");
					var htmlTemp;
					var len = data.datum.length;
					var j;
					for(var i=0;i<len;i++){
						 j = i+1;
						 htmlTemp=configTemp(j,data.datum[i].config1,data.datum[i].config2,data.datum[i].goodsPrice,data.datum[i].stock);
						 $("#accordion").append( htmlTemp);
					}
						$("#accordion").accordion();
					
					
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
	
	function ajaxSubmitForm(){
		//验证商品名
		var goodsName = $("#goodsName").val();
//		if (goodsName.length>13) { 
//			alert("商品名不应超过13个字！"); 
//			$("#goodsName").focus(); 
//			return false; 
//		} 
		//验证电话
		var phone = $("#phone").val();
//		if (!phone.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) { 
//			alert("手机号码格式不正确！"); 
//			//$("#moileMsg").html("<font color='red'>手机号码格式不正确！请重新输入！</font>"); 
//			$("#phone").focus(); 
//			return false; 
//		} 
		//验证微信号
		var weixin = $("#weixin").val();
//		if(weixin!=""){
//			if (!weixin.match(/^[a-z_\d]+$/)) { 
//				alert("请输入正确微信号！"); 
//				$("#weixin").focus(); 
//				return false; 
//			} 
//		}else{
////				alert(weixin);
//			}
		//验证邮费
		var post = $("#post").val();
//		if(post!=""){
//			if (!post.match(/^(([1-9]\d*)|\d)(\.\d{1,2})?$/)) { 
//				alert("请输入正确邮费！"); 
//				$("#post").focus(); 
//				return false; 
//			} 
//		}else{
////				alert(post);
//			}
		
		//规格1
		var arr3 = $(".config1");
		var config1s = new Array();
		for(var p=0;p<arr3.length;p++){
			config1s[p]=arr3[p].value;
			
			//验证的时候改一下即可
//			var config = arr3[p].value;
//			if (!config.match(/^(([1-9]\d*)|\d)(\.\d{1,2})?$/)) { 
//				var l = k+1;
//				alert("请输入分类"+l+"中的正确价格！"); 
//				arr1[k].focus(); 
//				return false; 
//			} 
		}
		
		//规格2
		var arr4 = $(".config2");
		var config2s = new Array();
		for(var q=0;q<arr4.length;q++){
			config2s[q]=arr4[q].value;
			
			//验证的时候改一下即可
//			var config = arr3[p].value;
//			if (!config.match(/^(([1-9]\d*)|\d)(\.\d{1,2})?$/)) { 
//				var l = k+1;
//				alert("请输入分类"+l+"中的正确价格！"); 
//				arr1[k].focus(); 
//				return false; 
//			} 
		}
		
		
		//验证价格
		var arr1 = $(".goodsPrice");
		var prices=new Array();
//		alert(arr1.length);
		var defaultPrice;
		for(var k=0;k<arr1.length;k++){
			prices[k]=arr1[k].value;
//			alert("prices[k]:"+prices[k]);
			if(k==0){
				defaultPrice=prices[k];
			}else if(parseInt(prices[k])<parseInt(defaultPrice)){
				defaultPrice=prices[k];
			}
//			alert("defaultPrice1:"+defaultPrice);
			var goodsPrice = arr1[k].value;
			if(goodsPrice==""||goodsPrice==null||goodsPrice==undefined){
				var l = k+1;
				$.MsgBox.Alert("","请输入分类"+l+"中的价格");
				$("a.id"+l).click();
//				arr1[k].focus(); 
				return false; 		
			}else if (!goodsPrice.match(/^(([1-9]\d*)|\d)(\.\d{1,2})?$/)) { 
				var l = k+1;
				$.MsgBox.Alert("","请输入分类"+l+"中的正确价格");
				$("a.id"+l).click();
//				arr1[k].focus(); 
				return false; 
			} 
		}
		

		
		//库存数正整数
		var arr2 = $(".stock");
		var stocks=new Array();
//		alert(arr2.length);
		for(var k=0;k<arr2.length;k++){
			stocks[k]=arr2[k].value;
			var stock = arr2[k].value;
			if(stock==""||stock==null||stock==undefined){
				var l = k+1;
				$.MsgBox.Alert("","请输入分类"+l+"中的库存");
				$("a.id"+l).click();
//				arr1[k].focus(); 
				return false; 		
			}else if (!(stock.match(/^(\+|-)?\d+$/) && stock>=0)) { 
				var l = k+1;
				$.MsgBox.Alert("","分类"+l+"中的库存数必须为整数");
				$("a.id"+l).click();
//				arr2[k].focus(); 
				return false; 
			} 
		}
		
		var d = new Date();
		var reDate = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.toLocaleTimeString();
		var updateGoodFirst = {
			"goodsId":goodsId,
			"goodsName":goodsName,
			"phone":phone,
			"weixin":weixin,
			"postageFee":post,
			"defaultPrice":defaultPrice,
			"configValue_1":config1s,
			"configValue_2":config2s,
			"configPrice":prices,
			"stock":stocks,
			"openid":openid
//			"reDate":reDate
		};
		
//		var  updateGoodSecond=new Array();
//		for(var m=0;m<prices.length;m++){
//			updateGoodSecond[m]={
//				"goodsId":goodsId,
//				"config1":config1s[m],
//				"config2":config2s[m],
//				"goodsPrice":prices[m],
//				"stock":stocks[m]
//				
//			}
//		}
		$.MsgBox.Confirm("","确认修改？",changeGoods);//这里切记不可以加括号
		return false;
//		var msg=confirm("确认修改？");

		function changeGoods() {
		//1.修改所有数据的请求
		    $.ajax({	
				type:"post",
				url:baseurl+"/goods/updateGoodsByGoodsId",
				async:false,
				data:updateGoodFirst,
				dataType:"json",
				crossDomain:true,
				success:function(data){
	//				console.log(data);
					if(data.result==true){
	//					alert("修改商品成功！");
						var updateId = data.datum.id;  
//						alert("defaultPrice2:"+defaultPrice);
						defaultPrice=defaultPrice+"元";
						var oMyForm = new FormData();
						oMyForm.append("goodsID", updateId);
						oMyForm.append("goodsPrice", defaultPrice);
						oMyForm.append("goodsName", goodsName);
						oMyForm.append("businessName", nick);
						oMyForm.append("userfile", defaultURL);
//						window.location.href = "changeGoods.html?goodsId="+updateId+"&openid="+openid;
						
						
						//2.生成大图并返回大图和商品图片URL的请求
					$.ajax({	
						type:"post",
						url:baseurlImg,
						async:false,
						data:oMyForm,
						dataType:"json",
						processData: false,  // 告诉jQuery不要去处理发送的数据
			  			contentType: false ,
						crossDomain:true,
						success:function(data){
	//				        console.log(data);
//							if(data.result==true){
	//							alert("成功生成图片！");
//								var goodsURL = data.goodsUrl;
								var bgURL = data.goodsDetailUrl;
//								alert("goodsURL"+goodsURL);
//								alert("bgURL"+bgURL);
//								alert("goodsId2:"+goodsId);
								
	//							$("img").attr("src",bgURL);
								var datatourl = {"goodsId":updateId,
												"goodsURL":defaultURL,
												"bgURL":bgURL
												};

//								//3.存储图片URL的请求
								$.ajax({	
									type:"post",
									url:baseurl+"/goods/saveImg",
									async:false,
									data:datatourl,
									dataType:"json",
									crossDomain:true,
									success:function(data){
	//									console.log(data);
										if(data.result==true){
	//										alert("存储图片URL成功！");
											window.location.href = encodeURI("changeGoods.html?goodsId="+updateId+"&openid="+openid+"&nick="+nick);
											
										}else{
											alert(data.reason);
																			
										}
									},
									error: function(XMLHttpRequest, textStatus, errorThrown) {
	//		         						    console.log("+++++");
												console.log(XMLHttpRequest.status);
												console.log(XMLHttpRequest.readyState);
												console.log(textStatus);
											}
								});				
																
//							}else{
//								alert(data.reason);
//																
//							}
						},
						error: function(XMLHttpRequest, textStatus, errorThrown) {
//		           					console.log("+++++");
									alert("生成图片error");
									console.log(XMLHttpRequest.status);
									console.log(XMLHttpRequest.readyState);
									console.log(textStatus);
								 }
					});
						
						
						
					}else{
						alert(data.reason);
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
			            console.log("+++++");
			            console.log(XMLHttpRequest.status);
						console.log(XMLHttpRequest.readyState);
						console.log(textStatus);
			       }
			});
		
		 }
		
		
		

	}
	$("button.delete").on("click",function(e){
		e.preventDefault();
		console.log("1");
		var datatosend = {"goodsId":goodsId};
		$.MsgBox.Confirm("","确认删除？",deleteGoods);//这里切记不可以加括号
		return false;
//		var msg2=confirm("确认删除？");

		function deleteGoods() {
			$.ajax({	
				type:"post",
				url:baseurl+"/goods/deleteGoodsByGoodsId",
				async:false,
				data:datatosend,
				dataType:"json",
				crossDomain:true,
				success:function(data){
	//				console.log(data);
					if(data.result==true){
//						alert("删除商品成功！");
						window.location.href = "goodsManagement.html?openid="+openid+"&pageSize=5&pageNo=1";
						
					}else{
						alert(data.reason);
						
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
			            console.log("del");
			            console.log(XMLHttpRequest.status);
						console.log(XMLHttpRequest.readyState);
						console.log(textStatus);
			       }
			});
		}
		
	})
			
		
})
