/*功能：微信端添加个人会员的基本信息
 *输入：ajax表单
 *输出：json
 *作者：刘庆
 *开发时间：2016.8.1
 */
window.onload = function () {
    $("#photoUpload").wrap("<form id='myupload' action='action/handleImage.php' method='post' enctype='multipart/form-data'></form>");
    $("#photoUpload").on("change", function () {
        $("#myupload").ajaxSubmit({
            dataType: 'json',
            success: function (data) {
                var url = data.name;
                console.log(url);
                var serviceurl = url.replace("../upload/img/", "upload/img/");
                $("#photo_in").attr("src", serviceurl);
                $("#photo_in").attr("data-url", serviceurl);
                $("#photo_in").attr("alt", url);
                $("#photo_in").show();
            },
            error:function (data) {
                var a=JSON.stringify(data);
                alert(a);
            }
            // error: function (xhr) { //fail to upload
            //     console.log("error");
            //     console.log(xhr.responseText); //return the error msg
            // }
        });
    });

};

function clickImgUp() {
    document.getElementById('photoUpload').click();
}

$(document).ready(function () {

    $("#submit").click(function () {

        // 账号信息
        var username = $("#username").val();
        var nickname = $("#nickname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        password = hex_md5(password);

        // 基本信息
        var name = $("#name").val();
        var sex = $("input:radio[name='sex']:checked").val();
        var birthday = $("#birthday").val();
        var cardtype = "身份证";
        var cardnum = $("#cardnum").val();
        var photodir = $("#photo_in").data('url');

        // 工作经历
        var title = $("#title").val();
        var workunit = $("#workunit").val();
        var unittype = $("#unittype").val();
        var profession = $("#profession").val();

        // 学习经历
        var degree = $("#degree").val();
        var school = $("#school").val();

        // 联系方式
        var mobile = $("#mobile").val();
        var addr = $("#addr").val();
        var post = $("#post").val();

        // individual_member_work（个人会员工作信息表）
        var searchcontent = $("#searchcontent").val();
        var contribute = $("#contribute").val();

        // individual_member_stdy（个人会员科研信息表）
        var social_academic_job = $("#social_academic_job").val();

        var datatosend = {
            "username": username,
            "nickname": nickname,
            "email": email,
            "password": password,
            "name": name,
            "sex": sex,
            "birthday": birthday,
            "cardtype": cardtype,
            "cardnum": cardnum,
            "photodir":photodir,
            // 工作经历
            "title": title,
            "workunit": workunit,
            "unittype": unittype,
            "profession": profession,

            // 学习经历
            "degree": degree,
            "school": school,

            // 联系方式
            "mobile": mobile,
            "addr": addr,
            "post": post,

            // 个人会员工作信息表
            "searchcontent": searchcontent,
            "contribute": contribute,

            // 个人会员科研信息表
            "social_academic_job": social_academic_job
        };

        $.ajax({
            type: "post",
            url: "action/add_professor.php",
            data: datatosend,
            dataType: "json",
            success: function (data) {
                alert(data.MSG);
                // if (data.SUCCESS == true) {
                //     alert(data.MSG); // 专家信息录入成功，等待审核
                // }
            },
            error:function (data) {
                alert("error");
                var a=JSON.stringify(data);
                alert(a);
            }
            // error: function (XMLHttpRequest, textStatus, errorThrown) {
            //     console.log(XMLHttpRequest.status);
            //     console.log(XMLHttpRequest.readyState);
            //     console.log(textStatus);
            // }
        });
    });
});
