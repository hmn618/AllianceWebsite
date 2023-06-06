<?php
/**
 * 微信公众号接入第三方服务器的入口。
 * 微信服务器将用户发送GET请求数据(消息和事件)转发到
 * 第三方服务器对于的入口，即该文件。
 *
 * User: markliu
 * Time: 16-7-5 下午5:09
 */
require_once('mail/send_mail.php');
define("TOKEN", "my_token");
// 回复的模板
define("RESPONSE_TEMPLATE", "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[%s]]></MsgType>
							<Content><![CDATA[%s]]></Content>
							</xml>");

define("TRANSFER_CUSTOMER_SERVICE", "<xml>
							<ToUserName><![CDATA[%s]]></ToUserName>
							<FromUserName><![CDATA[%s]]></FromUserName>
							<CreateTime>%s</CreateTime>
							<MsgType><![CDATA[%s]]></MsgType>
							</xml>");

$wechatObj = new Wechat();
if (isset($_GET['echostr'])) {
    $wechatObj->valid();
} else {
    $wechatObj->responseMessage();
}

class Wechat
{
    public function valid()
    {
        $echoStr = $_GET["echostr"];
        if ($this->checkSignature()) {
            header('content-type:text');
            echo $echoStr;
            exit;
        }
    }

    /**
     * 开发者首次提交验证申请时，微信服务器将发送GET请求到填写的URL上，并且带上四个参数（signature、timestamp、nonce、echostr）
     */
    function checkSignature()
    {
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];

        $token = TOKEN;
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode($tmpArr);
        $tmpStr = sha1($tmpStr);

        if ($tmpStr == $signature) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 开发者接收用户消息的时候，微信也都会带上前面三个参数（signature、timestamp、nonce）访问开发者设置的URL
     *
     */
    function responseMessage()
    {
        $postStr = $GLOBALS["HTTP_RAW_POST_DATA"]; // HTTP_RAW_POST_DATA 包含 POST 提交的原始数据,xml格式

        if (empty($postStr)) {
            exit;
        }

        $postObj = simplexml_load_string($postStr);
        $toUsername = $postObj->FromUserName;
        $fromUserName = $postObj->ToUserName;     # 公众号的原始ID
        $createTime = time();

        // 事件信息
        if (strtolower($postObj->MsgType) == "event") {
            if (strtolower($postObj->Event) == "subscribe") { // subscribe事件
                //回复用户的消息(纯文本格式)
                $msgType = "text";
                $content =
                    "终于等到你啦/:handclap，从现在起现代服务产业联盟将陪伴您一起走进现代服务业，服务业这里更精彩！
-----------------------
回复数字“1”，获得单位会员入盟申请表下载地址；
回复数字“2”，获得个人会员入盟申请表下载地址；
回复数字“3”，获得联盟联系电话。
-----------------------
<a href=\"http://www.4thservice.org\">点击这里访问官方网站</a>";

                $responseMsg = sprintf(RESPONSE_TEMPLATE, $toUsername, $fromUserName, $createTime, $msgType, $content);
                echo $responseMsg;
            }

            if (strtolower($postObj->Event) == "click") {
                // 添加联系客服
                if ($postObj->EventKey == "contact_service") {
                    // 获取客服在线状态
//                    $appid = "wx993c24de582fa47c";
//                    $appsecret = "08e1bfc375c9d0d4ac285caf0c495b88";
//                    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";
//                    $output = https_request($url);
//                    $jsoninfo = json_decode($output, true);
//                    // access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token
//                    $access_token = $jsoninfo["access_token"];
                    $access_token = "aF7-13YfqXnkcPcgkwxT4p-SxNeOj7TGdcupe6svgIUSKZbyAwbkOir-sOZpqS8yvXImCIxWR1oRJcICwqoa4sOGCXhJ8DhPAaTK3DsS4-FhxVHaRWGg44yggj8PxuCeTTYiAIAKKP";
//                    $responseMsg = "正在为您接入客服，请稍后...".$access_token;
//                    $time     = time();
//                    $msgType  = 'text';
//                    echo sprintf(RESPONSE_TEMPLATE, $toUsername, $fromUserName, $time, $msgType, $responseMsg);

                    $service_url = "https://api.weixin.qq.com/cgi-bin/customservice/getonlinekflist?access_token=$access_token";

                    $kf_online_list = https_request($service_url);
                    $kf_online_list = json_decode($kf_online_list, true);
                    // 获取所有在线客服
                    $kf_online = $kf_online_list["kf_online_list"];
                    $count_json = count($kf_online);

                    if ($count_json > 0) {
                        $responseMsg = "正在为您接入客服，等待客服回复...";
                        $time     = time();
                        $msgType  = 'text';
                        echo sprintf(RESPONSE_TEMPLATE, $toUsername, $fromUserName, $time, $msgType, $responseMsg);
                        // 将消息转发到微信服务器的多客服功能模块
                        $time     = time();
                        $msgType  = 'transfer_customer_service';
                        echo sprintf(TRANSFER_CUSTOMER_SERVICE, $toUsername, $fromUserName, $time, $msgType);
                    }else {
                        $responseMsg = "客服忙，请稍后重试，谢谢！";
                        $time     = time();
                        $msgType  = 'text';
                        echo sprintf(RESPONSE_TEMPLATE, $toUsername, $fromUserName, $time, $msgType, $responseMsg);
                    }
//                    $min_accepted_case = 2147483647;
//                    $min_kf_account = "";
//                    for ($i = 0; $i < $count_json; $i++) {
//                        $kf_account = $kf_online[$i]['kf_account'];
//                        $accepted_case = $kf_online[$i]['accepted_case'];
//                        // 找到正在接待的会话数最少的客服
//                        if ($accepted_case < $min_accepted_case) {
//                            $min_kf_account = $kf_account;
//                            $min_accepted_case = $accepted_case;
//                        }
//                    }
//                    // 发送消息提醒给接待的会话数最少的客服
//                    $create_service_session_url = "https://api.weixin.qq.com/customservice/kfsession/create?access_token=$access_token";
//                    $data = '{"kf_account" : '.$min_kf_account.',"openid" : "OPENID"}';
//                    $output = https_request($create_service_session_url, $data);
//                    $jsoninfo = json_decode($output, true);

                    }

                // 申请入盟
                if ($postObj->EventKey == "apply_for_membership") {
                    $responseMsg = "请输入您的邮箱地址，我们将入盟申请表发送至您的邮箱，谢谢！";
                    $time     = time();
                    $msgType  = 'text';
                    echo sprintf(RESPONSE_TEMPLATE, $toUsername, $fromUserName, $time, $msgType, $responseMsg);
                }
            }
        }

        // 文本信息
        if (strtolower($postObj->MsgType) == "text") {
            $userContent = trim($postObj -> Content);
            $userContent = trim($userContent);

            if ($userContent == "1" || $userContent == "2" || $userContent == "3") {
                $responseMsg = "<a href=\"http://www.4thservice.org/pages/applyrm.php\">单位会员入盟申请表格下载</a> 在页面中点击下载申请表进行下载";
                if ($userContent == "2") {
                    $responseMsg = "<a href=\"http://www.4thservice.org/pages/applyrm.php\">个人会员入盟申请表下载</a> 在页面中点击下载申请表进行下载";
                } elseif ($userContent == "3") {
                    $responseMsg = "
电话： 010-61198848
联系地址：北京市海淀区西土城路10号北京邮电大学新科研楼821
-----------------
期待您的加入哦/:,@-D
";
                }
                $time     = time();
                $msgType  = 'text';
                echo sprintf(RESPONSE_TEMPLATE, $toUsername, $fromUserName, $time, $msgType, $responseMsg);
            }

            // 如果用户发送的是邮箱消息，则发送入盟申请表
            $email = $userContent;
            if (preg_match('/^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$/i',$email)){
                $time     = time();
                $msgType  = 'text';

                // 发送邮件
                $basedir = dirname(__FILE__);
                $flie = $basedir."/mail/4thservice_apply.zip";
                $body =  "附件为入盟申请材料，该邮件由系统自动发送，请勿回复，如有疑问，请公众号联系客服人员，谢谢！";
                $destation_addr = $email;
                $result = send_mail($flie, $body, $destation_addr);
                if($result == "success") {
                    $responseMsg = "入盟申请表已发送至您的邮箱:".$email."，请注意查收！";
                }else{
                    $responseMsg = "请输入正确的邮箱！";
                }
                echo sprintf(RESPONSE_TEMPLATE, $toUsername, $fromUserName, $time, $msgType, $responseMsg);

            } else { // 非邮箱信息则发送给微信服务器的客服系统
                $time     = time();
                $msgType  = 'transfer_customer_service';
                echo sprintf(TRANSFER_CUSTOMER_SERVICE, $toUsername, $fromUserName, $time, $msgType);
            }
        }
    } // responseMessage()
}

/**
 * Https request
 * 使用curl库，使用curl库之前，可能需要查看一下php.ini是否已经打开了curl扩展!
 * @param $url
 * @param null $data
 * @return mixed
 */
function https_request($url,$data = null){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)){
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}
