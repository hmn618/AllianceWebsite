/**
 * 回到顶部效果
 */
window.onload = function() {
	var gototop_btn = document.getElementById("gototop_btn");
	var timer = null;
	//  gototop的标志位
	var gototop_able = true;
	gototop_btn.onclick = function() {
		timer = setInterval(function() {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.round(scrollTop / 6);
			document.documentElement.scrollTop = scrollTop - speed;
			document.body.scrollTop = scrollTop - speed;
			gototop_able = true;
			if(scrollTop < 6) {
				clearInterval(timer);
			}
		}, 30);
	}
	
	// 同时监听window的onscroll事件，窗口发生滚动事件
	window.onscroll = function() {
		if(!gototop_able) {
			clearInterval(timer);
		}
		gototop_able = false;
		
		// 按钮的隐藏与显示
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		// 页面可视区域的高度
		var clientHeight = document.documentElement.clientHeight;
		if(scrollTop >= clientHeight) {
			gototop_btn.style.display = 'block';
		} else {
			gototop_btn.style.display = 'none';
		}
	}
}