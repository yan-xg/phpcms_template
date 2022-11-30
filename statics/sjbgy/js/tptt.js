var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document
/*焦点图切换*/
$(function() {
	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;

    var btn = "<div class='btnBg'></div><div class='btn'>";
    for (var i = 0; i < len; i++) {
        btn += "<span></span>";
    }
    btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
    $("#focus").append(btn);
    $("#focus .btnBg").css("opacity", 0.0);
	
    $("#focus .btn span").css("opacity", 0.3).mouseenter(function () {
        index = $("#focus .btn span").index(this);
        showPics(index);
    }).eq(0).trigger("mouseenter");
	
	
    $("#focus .preNext").css("opacity", 0.3).hover(function () {
        $(this).stop(true, false).animate({ "opacity": "0.7" }, 300);
    }, function () {
        $(this).stop(true, false).animate({ "opacity": "0.3" }, 300);
    });
    $("#focus .pre").click(function () {
        index -= 1;
        if (index == -1) { index = len - 1; }
        showPics(index);
    });
    $("#focus .next").click(function () {
        index += 1;
        if (index == len) { index = 0; }
        showPics(index);
    });
	
	//为数字按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus ol li").mouseenter(function() {
		index = $("#focus ol li").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");
	
	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len + 1));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			if(index == len) { //如果索引值等于li元素个数，说明最后一张图播放完毕，接下来要显示第一张图，即调用showFirPic()，然后将索引值清零
				showFirPic();
				index = 0;
			} else { //如果索引值不等于li元素个数，按普通状态切换，调用showPics()
				showPics(index);
			}
			index++;
		},5000); //此5000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},500); //通过animate()调整ul元素滚动到计算出的position
		$("#focus ol li").removeClass("current").eq(index).addClass("current"); //为当前的按钮切换到选中的效果
		$("#focus .btn span").stop(true, false).animate({ "opacity": "0.4" }, 300).eq(index).stop(true, false).animate({ "opacity": "1" }, 300);
	}
	
	function showFirPic() { //最后一张图自动切换到第一张图时专用
		$("#focus ul").append($("#focus ul li:first").clone());
		var nowLeft = -len*sWidth; //通过li元素个数计算ul元素的left值，也就是最后一个li元素的右边
		$("#focus ul").stop(true,false).animate({"left":nowLeft},500,function() {
			//通过callback，在动画结束后把ul元素重新定位到起点，然后删除最后一个复制过去的元素
			$("#focus ul").css("left","0");
			$("#focus ul li:last").remove();
		}); 
		$("#focus ol li").removeClass("current").eq(0).addClass("current"); //为第一个按钮添加选中的效果
	}
});

}
/*
     FILE ARCHIVED ON 08:59:33 Nov 28, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:49:38 Nov 30, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1436.753
  exclusion.robots: 0.117
  exclusion.robots.policy: 0.108
  cdx.remote: 0.074
  esindex: 0.012
  LoadShardBlock: 616.374 (3)
  PetaboxLoader3.datanode: 587.122 (5)
  CDXLines.iter: 23.631 (3)
  load_resource: 100.148 (2)
  PetaboxLoader3.resolve: 61.081 (2)
*/