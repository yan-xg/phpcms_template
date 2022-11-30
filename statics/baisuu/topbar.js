(function(){

var pthis = this;

//获取对象
this.$ = function(id){if(document.getElementById){return eval('document.getElementById("'+id+'")')}else{return eval('document.all.'+id)}};

//获取cookie
this.getAdCookie = function(N){
	var c=document.cookie.split("; ");
	for(var i=0;i<c.length;i++){var d=c[i].split("=");if(d[0]==N)return unescape(d[1]);}
	return "";
};

//设置cookie
this.setAdCookie = function(N,V,Q){
	var L=new Date();
	var z=new Date(L.getTime()+Q*60000);
	
	//document.cookie=N+"="+escape(V)+";path=/;expires="+z.toGMTString()+";";
	document.cookie=N+"="+escape(V)+";path=/;domain=sina.com.cn;expires="+z.toGMTString()+";";
	
};

//构造函数
this.init = function(){
  try{
    document.write('\
      <style type="text/css">\
        body{background:url(http://ahyx.gov.cn/2016newyear/images/default/2016year.jpg) no-repeat top center;padding-top:0;margin-top:0;}\
        .topAD{background:#fff;}\
        #wrap{padding-top:0;margin-top:0;}\
      </style>\
      <div id="2008TopBar" style="clear:both;width:990px;height:120px;margin:0 auto;padding:0;background:url(http://ahyx.gov.cn/2016newyear/images/default/60_zty_950x38.jpg) no-repeat;overflow:hidden;position:relative;">\
        <a href="http://www.ahyx.gov.cn" target="_blank" style="position:absolute;left:0;top:0;height:80px;padding:0;margin:0;cursor:pointer;width:990px;z-index:1;"></a>\
        <div id="60Btncls" style="width:40px;height:18px;padding:0;margin:0;position:absolute;right:0;bottom:0;cursor:pointer;display:block;background:url(http://ahyx.gov.cn/2016newyear/images/default/60_zty_cls1.jpg) no-repeat;z-index:2;" title="关闭背景"></div>\
      </div>\
      <div id="2008TopBlank" style="clear:both;height:5px;line-height:0;font-size:0;overflow:hidden;display:none;"></div>\
    ');

    var tmpImg = document.createElement("img");
    tmpImg.src="http://ahyx.gov.cn/2016newyear/images/default/60_zty_cls2.jpg";

    pthis.$("60Btncls").onmouseover = function(){pthis.$("60Btncls").style.background = "url(http://ahyx.gov.cn/2016newyear/images/default/60_zty_cls2.jpg) no-repeat";};
    pthis.$("60Btncls").onmouseout = function(){pthis.$("60Btncls").style.background = "url(http://ahyx.gov.cn/2016newyear/images/default/60_zty_cls1.jpg) no-repeat";};
    pthis.$("60Btncls").onclick = function(){
		document.body.style.background = "none";
		pthis.$("2008TopBar").style.display = "none";
		pthis.$("2008TopBlank").style.display = "block";
	    pthis.setAdCookie("60yearBgCookie",0,1440);
	};
  }catch(e){}
}

 var cookie = pthis.getAdCookie("60yearBgCookie");
 cookie = cookie==""?1:cookie;
 if(cookie==1){pthis.init();}

})();