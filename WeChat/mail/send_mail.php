<?php
	require_once('class.phpmailer.php'); //载入PHPMailer类 
	function send_mail($flie,$body, $destation_addr)
	{
		$mail = new PHPMailer(); //实例化
		$mail->IsSMTP(); // 启用SMTP 
		$mail->Host = "smtp.163.com"; //SMTP服务器 以163邮箱为例子 
		$mail->Port = 25;  //邮件发送端口 
		$mail->SMTPAuth   = true;  //启用SMTP认证 
		 
		$mail->CharSet  = "utf-8"; //字符集
		$mail->Encoding = "base64"; //编码方式

		$mail->Username = "not_reply_4service@163.com";  //你的邮箱 
		$mail->Password = "4thservice";  //你的密码 
		$mail->Subject = "四方现代服务联盟入盟申请材料"; //邮件标题

		$mail->From = "not_reply_4service@163.com";  //发件人地址（也就是你的邮箱） 
		$mail->FromName = "四方现代服务联盟";  //发件人姓名

		$mail->AddAddress($destation_addr);//添加收件地址

		$mail->AddAttachment($flie); // 添加附件,并指定名称
		$mail->Body = $body;
		//发送 
		if(!$mail->Send()) { 
            return "error";
		} else {
            return "success";
		} 
	}
