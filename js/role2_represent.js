/**
 * Created by dell on 2016/7/20.
 */

$(document).ready(function () {
    //从数据库读入已存信息
    $.ajax({
        type: "post",
        url: 'action/extend_query.php',
        crossDomain: true,
        dataType: "json",
        success: function (data) {
            // var a=JSON.stringify(data);
            // alert(a);
            if (data.SUCCESS == true) {
                // 基本信息
                $("#represent1_name").val(data.represent1_name);
                $("#represent1_pos").val(data.represent1_pos);
                $("#represent1_tel").val(data.represent1_tel);
                $("#represent1_fax").val(data.represent1_fax);
                $("#represent1_flied").val(data.represent1_flied);
                $("#represent1_mail").val(data.represent1_mail);
                $("#represent1_brief").val(data.represent1_brief);

                $("#represent2_name").val(data.represent2_name);
                $("#represent2_pos").val(data.represent2_pos);
                $("#represent2_tel").val(data.represent2_tel);
                $("#represent2_fax").val(data.represent2_fax);
                $("#represent2_flied").val(data.represent2_flied);
                $("#represent2_mail").val(data.represent2_mail);
                $("#represent2_brief").val(data.represent2_brief);
            }
        },
        error:function (data) {
            var a=JSON.stringify(data);
            alert(a);
        }
    });

    // 提交表单保存数据
    $("#represent_submit_btn").click(function () {
        // 获取表单数据
        var represent1_name  = $("#represent1_name").val();
        var represent1_pos   = $("#represent1_pos").val();
        var represent1_tel   = $("#represent1_tel").val();
        var represent1_fax   = $("#represent1_fax").val();
        var represent1_flied = $("#represent1_flied").val();
        var represent1_mail  = $("#represent1_mail").val();
        var represent1_brief = $("#represent1_brief").val();

        var represent2_name  = $("#represent2_name").val();
        var represent2_pos   = $("#represent2_pos").val();
        var represent2_tel   = $("#represent2_tel").val();
        var represent2_fax   = $("#represent2_fax").val();
        var represent2_flied = $("#represent2_flied").val();
        var represent2_mail  = $("#represent2_mail").val();
        var represent2_brief = $("#represent2_brief").val();

        var datatosend = {
            //represent1
            "represent1_name": represent1_name,
            "represent1_pos": represent1_pos,
            "represent1_tel": represent1_tel,
            "represent1_fax": represent1_fax,
            "represent1_flied": represent1_flied,
            "represent1_mail": represent1_mail,
            "represent1_brief": represent1_brief,
            //represent2
            "represent2_name": represent2_name,
            "represent2_pos": represent2_pos,
            "represent2_tel": represent2_tel,
            "represent2_fax": represent2_fax,
            "represent2_flied": represent2_flied,
            "represent2_mail": represent2_mail,
            "represent2_brief": represent2_brief
        };

        // ajax发送表单
        $.ajax({
            type: "post",
            url: 'action/extend_insert.php',
            data: datatosend,
            dataType: "json",
            success: function (data) {
                // var a=JSON.stringify(data);
                // alert(a);
                if (data.SUCCESS == "true") {
                    alert("保存成功！");
                }
            },
            error:function (data) {
                var a=JSON.stringify(data);
                alert(a);
            }
        });
    });

    // 重置表单
    $("#clear_btn").click(function () {
        $(":input").val("");
    });
    
    	
	//登出函数
	$("#logout").click(function(){
		window.location.href = "../checklogout.php";
	});
});