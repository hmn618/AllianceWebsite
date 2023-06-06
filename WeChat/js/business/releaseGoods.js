//保存的就是这一版777
var baseurl="http://111.207.243.66:8886/SZBProject";
var baseurlOpenid="http://182.92.222.75/wechatService";
var baseurlImg="http://szb.4thservice.net/CreateImage/CreateImageUrl";
//var openid= "oCYIxuHKjG6CZkfL_YAZ-s2tu0q4";
var openid,nick,goodsId;
var updateGoodFirst;
var defaultPrice;
var goodsName;
//input type="file"
var fileInputElement;
$(function(){
	
	//optional(element)，用于表单控件的值不为空时才触发验证。
	//联系电话
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
//	 	 		$.MsgBox.Alert("","正在加载图片，请稍后。。。");
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
//	       		isPrice:"请输入正确的价格"
//	       },
//	       stock:{
//	       		required: "请输入库存",
//	       		isStock:"库存数必须为整数"
//	       }
        }
      
    })
	
	
	
	
	
	
	
	
	//jueryUI
	$("#accordion").accordion();
	function getQueryString(name) {
		console.log("调用了getQueryString");
		//接收参数id
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
		if (r != null) 
			return unescape(r[2]);
		return null;
	  }
	if(!sessionStorage.openid){
//		alert("sessionStorage.openid是空："+sessionStorage.openid);
		var code=decodeURI(getQueryString("code"));
	//	alert("code是："+code);
//		console.log(code);
		
		getOpenid();
	}else{
//		alert("sessionStorage.openid不是空："+sessionStorage.openid);
		
		openid = sessionStorage.openid;
		nick = sessionStorage.nick;
		getUser();
	}
	
	function getOpenid(){
		console.log("调用了getOpenid");
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
//					alert("nick是："+nick);
					getUser();
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
	
	//	getUser();
	function getUser(){
		
		console.log("1");
		var datatosend = {"openid":openid};
		$.ajax({	
			type:"post",
			url:baseurl+"/user/findUserByOpenid",
			async:false,
			data:datatosend,
			dataType:"json",
			crossDomain:true,
			success:function(data){
//				console.log(data);
				if(data.result==true){
//					alert("查找用户成功！");
					var defaultPhone = data.datum.phone;
					var defaultWeixin = data.datum.weixin;
					if(defaultPhone!=""&&defaultPhone!=null&&defaultPhone!=undefined){
						$("#phone").val(data.datum.phone);
					}
					if(defaultWeixin!=""&&defaultWeixin!=null&&defaultWeixin!=undefined){
						$("#weixin").val(data.datum.weixin);
					}
					
				}else{
//					alert(data.reason);
					
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
	
	
	$(".goodsInfo").on("submit",function(e){
//		$.MsgBox.Alert("","正在加载图片，请稍后。。。");
		e.preventDefault();
	})

function ajaxSubmitForm(){
//		$.MsgBox.Alert("","正在加载图片，请稍后。。。");
//		window.location.href = "wait.html";
		//验证商品名
		goodsName = $("#goodsName").val();
//		if (goodsName.length>13) { 
//			alert("商品名不应超过13个字！"); 
//			$("#goodsName").focus(); 
//			return false; 
//		} 

		//验证电话
		var phone = $("#phone").val();
//		if (!phone.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) {
//			$.MsgBox.Alert("","手机号码格式不正确！");
////			alert("手机号码格式不正确！"); 
//			//$("#moileMsg").html("<font color='red'>手机号码格式不正确！请重新输入！</font>"); 
//			setTimeout(function() {
//		       $("#phone").focus(); 
//     		}, 3000);
//			
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
		
		for(var k=0;k<arr1.length;k++){
			prices[k]=arr1[k].value;
			if(k==0){
				defaultPrice=prices[k];
			}else if(parseInt(prices[k])<parseInt(defaultPrice)){
				defaultPrice=prices[k];
			}
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
//		console.log("最小价格"+defaultPrice);
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
		//验证图片是否为空
		var a = $("img.target");
		var len = a.length;
		if(len==0){
			$.MsgBox.Alert("","请添加商品图片");
			$("#imgOne").focus(); 
			return false; 
		}
//		$("#post").parent().append("<p>插入</p>");
//		$.MsgBox.Wait("","正在加载图片，请稍后。。。");
		var d = new Date();
		var reDate = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.toLocaleTimeString();
		updateGoodFirst = {
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
		};
//		console.log("规格1"+config1s);
//		console.log("规格2"+config2s);
//		console.log("规格3"+prices);
//		console.log("规格4"+stocks);
		$.MsgBox.Wait("","正在加载图片，请稍后...",ajaxActual);
		
		
	
	}
	function ajaxActual(){
		//1.提交所有数据的请求
		$.ajax({	
			type:"post",
			url:baseurl+"/goods/createGoods",
			async:false,
			data:updateGoodFirst,
			dataType:"json",
			crossDomain:true,
			success:function(data){
//				console.log(data);

				if(data.result==true){
//					window.location.href = "wait.html";
//					alert("添加商品成功！");
					goodsId = data.datum.goodsId;
//					alert("goodsId1:"+goodsId);
//					var defaultPrice = data.datum.defaultPrice;
//					var goodsName = data.datum.goodsName;
					defaultPrice=defaultPrice+"元";
					fileInputElement = document.getElementById("imgOne");
//					alert("exif:"+exif["Orientation"]);//是对的
					var oMyForm = new FormData();
					oMyForm.append("goodsID", goodsId);
					oMyForm.append("goodsPrice", defaultPrice);
					oMyForm.append("goodsName", goodsName);
					oMyForm.append("businessName", nick);
					oMyForm.append("userfile", fileInputElement.files[0]);
					oMyForm.append("orientation", exif["Orientation"]);
//					alert("添加成功！");
//					alert(data);
												
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
								var goodsURL = data.goodsUrl;
								var bgURL = data.goodsDetailUrl;
//								alert("goodsURL"+goodsURL);
//								alert("bgURL"+bgURL);
//								alert("goodsId2:"+goodsId);
								
	//							$("img").attr("src",bgURL);
//								alert("exif:"+exif["Orientation"]);//是对的
								var datatourl = {"goodsId":goodsId,
												"goodsURL":goodsURL,
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
											window.location.href = "goodsDetail.html?bgURL="+bgURL;
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
	
	function configTemp(j){
		var str ='<div id="ACCOR" >'
			+' <h2><a href="#" class="ID">TYPEI：</a></h2>'
			+'<div id="ROWI">'
			+'<div class="subContainer">'
			+'<div class="infoName"><p>规格 1</p></div>'
			+'<input name="config1" class="config1" type="text" placeholder="如：“红色”" value=""  />'
			+'</div>'
			+'<hr />'
			+'<div class="subContainer">'
			+'<div class="infoName"><p>规格2</p></div>'
			+'<input name="config2" class="config2" type="text" placeholder="如：“XL”" value=""  />'
			+'</div>'
			+'<hr />'
			+'<div class="subContainer">'
			+'<div class="infoName"><p>价格</p></div>'
			+'<input name="GOODSPRICE" class="goodsPrice" type="text" placeholder="单位（元）" value="" />'
			+'</div>'
			+'<hr />'
			+'<div class="subContainer">'
			+'<div class="infoName"><p>库存</p></div>'
			+'<input name="STOCK" class="stock" type="text" placeholder="整数" value="" />'
			+'</div>'
			+'<hr />'
			+'</div>'
			+'</div>';
		str=str.replace("ACCOR","accor"+j).replace("ID","id"+j).replace("TYPEI","分类"+j).replace("ROWI","row"+j).replace("GOODSPRICE","goodsPrice"+j).replace("STOCK","stock"+j);
		return str;
	}
	
	
	var num;
	$("button.add").on("click",function(e){
		e.preventDefault();
		var cla = $("h2 a").last().attr("class");
//		alert(cla);
		var k = cla.charAt(2);
		var htmlTemp;
		num = parseInt(k)+1;
		htmlTemp=configTemp(num);
		
		$("#template").append( htmlTemp);
		$("#accor"+num).accordion();
		
//		$("form").validate();
//		// 找到元素之后添加规则
//		var gp = "goodsPrice"+num;
//		$("input[name="+gp+"]").rules("add",  { required: true, messages: { required: "请输入价格"} });
//		$("input[name="+gp+"]").rules("add",  { isPrice: true, messages: { isPrice: "请输入正确的价格"} });
//		var st = "stock"+num;
//		$("input[name="+st+"]").rules("add",  { required: true, messages: { required: "请输入库存"} });
//		$("input[name="+st+"]").rules("add",  { isStock: true, messages: { isPrice: "库存数必须为整数"} });
//		

		
		
		
		
		
	})
		
})
