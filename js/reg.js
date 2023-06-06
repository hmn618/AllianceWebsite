/*功能：注册页面一处理
 *输入：注册信息
 *输出：ajax表单
 *作者：赵文骏
 *开发时间：2016.7.5
 *最后修改时间：2016.7.5
*/
$(function(){			
	//验证码校验
	var inp = document.getElementById('yanzhengma');
    var code = document.getElementById('code');
	var btn = document.getElementById('btn');

    var c = new KinerCode({
        len: 5,//需要产生的验证码长度
//        chars: ["1+2","3+15","6*8","8/4","22-15"],//问题模式:指定产生验证码的词典，若不给或数组长度为0则试用默认字典
        chars: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],//经典模式:指定产生验证码的词典，若不给或数组长度为0则试用默认字典
        question:false,//若给定词典为算数题，则此项必须选择true,程序将自动计算出结果进行校验【若选择此项，则可不配置len属性】,若选择经典模式，必须选择false
        copy: false,//是否允许复制产生的验证码
        bgColor:"",//背景颜色【与背景图任选其一设置】
        bgImg:"../img/bg.png",//若选择背景图片，则背景颜色失效
        randomBg : false,//若选true则采用随机背景颜色，此时设置的bgImg和bgColor将失效
        inputArea: inp,//输入验证码的input对象绑定
        codeArea: code,//验证码放置的区域
        click2refresh:true,//是否点击验证码刷新验证码
        false2refresh:true,//在填错验证码后是否刷新验证码
		validateArea : btn,//触发校验的对象绑定
		validateEven : "click",//触发验证的方法名，如click，blur等
        validateFn : function(result,code){//验证回调函数
            if(result){
                //成功则触发ajax
				if(valiate()){
					var datatosend={
						"name":$("#loginname").val(),
						"pwd":hex_md5($("#loginpwd").val()),
						"email":$("#email").val(),
						"nickname":$("#nickname").val()
					};
					$.ajax({
						type:"post",
						url:'../register/action/register.php',
						data:datatosend,
						crossDomain:true,
						dataType:"json",
						success:function(data){
							//var a=JSON.stringify(data);
							//alert(a)
							if(data.SUCCESS=="true"){
								window.location.href="bind.html";
							}else{
								alert(data.MSG);
							}
						},
						error:function(XMLHttpRequest, textStatus, errorThrown) {
							console.log(XMLHttpRequest.status);
							console.log(XMLHttpRequest.readyState);
							console.log(textStatus);
						}
					});
				}
            }else{
				//失败
				alert("验证码错误!")
				$("#yanzhengma").val("");
				$("#yanzhengma").focus();
            }
        }
    });
})

//校验函数
function valiate(){
	/*用户名校验*/	
	loginname=$("#loginname").val();
	if(loginname=="null"||loginname=="") 
	{
		alert("请输入用户名!")
		$("#loginname").val("");
		$("#loginname").focus();
		return false;
	}
	else if(!(/^[0-9 a-z _ A-Z]*$/g.test(loginname)))
	{
		alert("用户名只能是数字、字母、下划线!")
		$("#loginname").val("");
		$("#loginname").focus();
		return false;
	}
	
	/*邮箱校验*/
	email=$("#email").val();
	if(email=="null"||email=="") 
	{
		alert("请输入邮箱地址!")
		$("#email").val("");
		$("#email").focus();
		return false;
	}
	else if(!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g.test(email)))
	{
		alert("请输入正确的邮箱地址!")
		$("#email").val("");
		$("#email").focus();
		return false;
	}
	/*昵称校验*/	
	nickname=$("#nickname").val();
	if(nickname=="null"||nickname=="") 
	{
		alert("请输入昵称!")
		$("#nickname").val("");
		$("#nickname").focus();
		return false;
	}
	
	/*密码校验*/
	loginpwd=$("#loginpwd").val();
	loginpwd1=$("#loginpwd1").val();
	if(loginpwd=="null"||loginpwd=="") 
	{
		
        alert('请输入密码!');
		$("#loginpwd").val("");
		$("#loginpwd").focus();
		return false;
	} 
	else if(loginpwd.length<6)
	{
		alert('密码至少为6位!');
		$("#loginpwd").val("");
		$("#loginpwd").focus();
		return false;
	}
	if(loginpwd1!=loginpwd) 
	{
		alert('两次密码不等!');
		$("#loginpwd1").val("");
		$("#loginpwd1").focus();
		return false;
	} 	
	return true;
}	