(function () {
  $.MsgBox = {
    Alert: function (title, msg) {
      GenerateHtml("alert", title, msg);
      $("#mb_box").click(function () {
      	$("#mb_box,#mb_con").remove();
    	});
      btnOk(); 
      btnNo();
    },
    Confirm: function (title, msg, callback) {
      GenerateHtml("confirm", title, msg);
      btnOk(callback);
      btnNo();
    }
  }
 
  //create Html
  var GenerateHtml = function (type, title, msg) {
 
    var _html = "";
 
    _html += '<div id="mb_box"></div><div id="mb_con"><div id="mb_tit">' + title + '</div>';
    _html += '<div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';
 
    if (type == "alert") {
      _html += '<input id="mb_btn_ok" type="button" value="完成" />';
      
    }
    if (type == "confirm") {
      _html += '<input id="mb_btn_ok" type="button" class="btn" value="完成" />';
      _html += '<input id="mb_btn_no" type="button" class="btn" value="取消" />';
    }
    _html += '</div></div>';
 
    //put the _html into body and then CSS style
    $("body").append(_html); GenerateCss(type);
  }
 
  //create Css
  var GenerateCss = function (type) {
 	
    $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
      filter: 'Alpha(opacity=60)', backgroundColor: 'white', top: '0', left: '0', opacity: '0.4'
    });
 

    //close button hover style at the right top
    $("#mb_ico").hover(function () {
      $(this).css({ backgroundColor: 'Red', color: 'White' });
    }, function () {
      $(this).css({ backgroundColor: '#DDD', color: 'black' });
    });
 
    var _widht = document.documentElement.clientWidth; //width of screen
    var _height = document.documentElement.clientHeight; //height of screen
 
    var boxWidth = $("#mb_con").width();
    var boxHeight = $("#mb_con").height();
 
    //set the alert in the center
    $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
  }
 

  //"ok" button event
  var btnOk = function (callback) {
    $("#mb_btn_ok").click(function () {
      
      if (typeof (callback) == 'function') {
        callback();
      }
      $("#mb_box,#mb_con").remove();
    });
  }
 
  //"cancel" button event
  var btnNo = function () {
    $("#mb_btn_no,#mb_ico").click(function () {
      $("#mb_box,#mb_con").remove();
    });
  }
})();