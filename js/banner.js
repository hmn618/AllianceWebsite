jQuery(function ($) {
    if ($(".slide-pic").length > 0) {
        var defaultOpts = { interval: 5000, fadeInTime: 300, fadeOutTime: 200 };
        var _titles = $("ul.slide-txt li");
        var _titles_bg = $("ul.op li");
        var _bodies = $("ul.slide-pic li");
        var _count = _titles.length;
        var _current = 0;
        var _intervalID = null;
        var index=1;
        var stop = function () { window.clearInterval(_intervalID); };
        var slide = function (opts) {
            if (opts) {
                _current = opts.current || 0;
            } else {
                _current = (_current >= (_count - 1)) ? 0 : (++_current);
            };
            _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function () {
                _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
                _bodies.removeClass("cur").eq(_current).addClass("cur");
            });
            _titles.removeClass("cur").eq(_current).addClass("cur");
            _titles_bg.removeClass("cur").eq(_current).addClass("cur");
        };
        var go = function () {
            stop();
            _intervalID = window.setInterval(function () { slide(); }, defaultOpts.interval);
        };
        var itemMouseOver = function (target, items) {
            stop();
            var i = $.inArray(target, items);
            slide({ current: i });
        };
        _titles.hover(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles); } else { stop(); } }, go);
        _bodies.hover(stop, go);
        go();
    }
    
    var pre = document.getElementById("leftarrow");
    var next= document.getElementById("rightarrow");
    var slides = document.getElementById("slide-pic").getElementsByTagName("li");
    
 
 function showButton(){
 	for(var i=0;i<3;i++){
    			if(slides[i].className="cur"){
    				slides[i].style='display:none';
    			}
    		}
 	slides[index].style='display:list-item';
 }
 
    	$('#leftarrow').click(function(){
    		
    		
    		if(index=="0"){
    			index="2";
    		}
    		else{
    			index--;
    		}
    	showButton();
    });
    		
    	
    	$('#rightarrow').click(function(){
    		if(index==2){
    			index=0;
    		}
    		else{
    			index++;
    		}
    	showButton();
    });
    })