<?php
/**
 * 设置公众号的菜单
 * User: markliu
 * Time: 16-7-6 下午6:53
 */
header('Content-type: text/html; charset=utf-8');
echo phpinfo();
$appid = "wx993c24de582fa47c";
$appsecret = "08e1bfc375c9d0d4ac285caf0c495b88";
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";

$output = https_request($url);

$jsoninfo = json_decode($output, true);
// access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token
$access_token = $jsoninfo["access_token"];
echo $access_token;
$jsonmenu = '{
      "button":[
      {
           "name":"关于联盟",
           "sub_button":[
            {
                "type":"view",
                "name":"联盟简介",
                "url":"http://www.4thservice.org/shadiao/my-site/WeChat/alliance_introduction.html"
            },
            {
                "type":"view",
                "name":"联盟章程",
                "url":"http://31544c2ef87a45959cb2714bf3452490.wx.china-tengyun.com:7000/sp/engine/page/orglayout/load.jspx?id=FbJ2JGtiPzz9VtGLkjZ1456816249112&orgId=8a2d9b845330de54015330f975fd0001"
            },
            {
                "type":"view",
                "name":"联盟专委会",
                "url":"http://31544c2ef87a45959cb2714bf3452490.wx.china-tengyun.com:7000/sp/engine/page/orglayout/load.jspx?id=LNbOkLAwfkO91iKfvsl1456816249112&orgId=8a2d9b845330de54015330f975fd0001"
            },
            {
                "type":"click",
                "name":"申请入盟",
                "key":"apply_for_membership"
            }]
       },
       {
           "name":"成员简介",
           "sub_button":[
            {
                "type":"view",
                "name":"理事长单位",
                "url":"http://31544c2ef87a45959cb2714bf3452490.wx.china-tengyun.com:7000/sp/engine/page/orglayout/load.jspx?id=mUE3RGHxYqjNkqVPaN81456816249112&orgId=8a2d9b845330de54015330f975fd0001"
            },
            {
                "type":"view",
                "name":"理事会员",
                "url":"http://31544c2ef87a45959cb2714bf3452490.wx.china-tengyun.com:7000/sp/engine/page/orglayout/load.jspx?id=H5AeNSTWoLDQQ6x8PWm1456816249112&orgId=8a2d9b845330de54015330f975fd0001&wxId=31544c2ef87a45959cb2714bf3452490"
            },
            {
                "type":"view",
                "name":"注册会员",
                "url":"http://31544c2ef87a45959cb2714bf3452490.wx.china-tengyun.com:7000/sp/engine/page/orglayout/load.jspx?id=zBue64DMBdlSORcxqDc1456816249112&orgId=8a2d9b845330de54015330f975fd0001"
            },
            {
                "type":"view",
                "name":"专家入驻",
                "url":"http://www.4thservice.org/shadiao/my-site/WeChat/professor.html"
            }]
       },
       {
           "name":"联盟动态",
           "sub_button":[
            {
                "type":"view",
                "name":"联盟简介",
                "url":"http://www.4thservice.org/shadiao/my-site/WeChat/alliance_introduction.html"
            },
            {
                "type":"view",
                "name":"联盟动态",
                "url":"http://www.4thservice.org/shadiao/my-site/basic/active.html"
            },
            {
                "type":"view",
                "name":"通知公告",
                "url":"http://www.4thservice.org/shadiao/my-site/basic/notice.html"
            },
			{
                "type":"view",
                "name":"行业资讯",
                "url":"http://www.4thservice.org/shadiao/my-site/basic/news.html"
            }，
            {
                "type":"view",
                "name":"共性服务动态",
                "url":"http://31544c2ef87a45959cb2714bf3452490.wx.china-tengyun.com:7000/sp/engine/page/orglayout/load.jspx?id=Vm7FJ3puH8HPYPMgAzm1456816249112&orgId=8a2d9b845330de54015330f975fd0001"
            },
            {
                "type":"view",
                "name":"科技服务动态",
                "url":"http://31544c2ef87a45959cb2714bf3452490.wx.china-tengyun.com:7000/sp/engine/page/orglayout/load.jspx?id=NBHEmseoxiMYEqnfa2J1456816249112&orgId=8a2d9b845330de54015330f975fd0001"
            },
			{
                "type":"click",
                "name":"联系客服",
                "key":"contact_service"
            }]
       
       }]
 }';

$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=" . $access_token;
$result = https_request($url, $jsonmenu);
var_dump($result);

echo "set menu success!";

/**
 * Https request
 * 使用curl库，使用curl库之前，可能需要查看一下php.ini是否已经打开了curl扩展!
 * @param $url
 * @param null $data
 * @return mixed
 */
function https_request($url, $data = null)
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)) {
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}
