function ObjectAD() {
  /* Define Variables*/
  this.ADID        = 0;
  this.ADType      = 0;
  this.ADName      = "";
  this.ImgUrl      = "";
  this.ImgWidth    = 0;
  this.ImgHeight   = 0;
  this.FlashWmode  = 0;
  this.LinkUrl     = "";
  this.LinkTarget  = 0;
  this.LinkAlt     = "";
  this.Priority    = 0;
  this.CountView   = 0;
  this.CountClick  = 0;
  this.InstallDir  = "";
  this.ADDIR       = "";
}

function BannerZoneAD(_id) {
  /* Define Constants */
  this.adNum       = 0;
  this.adDelay     = 6000;

  /* Define Common Variables*/
  this.ID          = _id;
  this.ZoneID      = 0;
  this.ZoneName    = "";
  this.ZoneWidth   = 0;
  this.ZoneHeight  = 0;
  this.ShowType    = 1;
  this.DivName     = "";
  this.Div         = null;

  /* Define Unique Variables*/

  /* Define Objects */
  this.AllAD       = new Array();
  this.ShowAD      = null;

  /* Define Functions */
  this.AddAD       = BannerZoneAD_AddAD;
  this.GetShowAD   = BannerZoneAD_GetShowAD;
  this.Show        = BannerZoneAD_Show;
  this.LoopShow    = BannerZoneAD_LoopShow;

}

function BannerZoneAD_AddAD(_AD) {
  this.AllAD[this.AllAD.length] = _AD;
}

function BannerZoneAD_GetShowAD() {
  if (this.ShowType > 1) {
    this.ShowAD = this.AllAD[0];
    return;
  }
  var num = this.AllAD.length;
  var sum = 0;
  for (var i = 0; i < num; i++) {
    sum = sum + this.AllAD[i].Priority;
  }
  if (sum <= 0) {return ;}
  var rndNum = Math.random() * sum;
  i = 0;
  j = 0;
  while (true) {
    j = j + this.AllAD[i].Priority;
    if (j >= rndNum) {break;}
    i++;
  }
  this.ShowAD = this.AllAD[i];
}

function BannerZoneAD_Show() {
  if (!this.AllAD) {
    return;
  } else {
    this.GetShowAD();
  }

  if (this.ShowAD == null) return false;
  this.DivName = "BannerZoneAD_Div" + this.ZoneID;
  if (!this.ShowAD.ImgWidth) this.ShowAD.ImgWidth = this.ZoneWidth
  if (!this.ShowAD.ImgHeight) this.ShowAD.ImgHeight = this.ZoneHeight
  if (this.ShowAD.ADDIR=="") this.ShowAD.ADDIR = "AD"
  if (this.ShowType == 3) {
    if(document.all) {
      document.write("<div id='" + this.DivName + "' style='visibility:visible; z-index:1; width:" + this.ZoneWidth + "px; height:" + this.ZoneHeight + "px; filter: revealTrans(duration=2,transition=20);'>" + AD_Content(this.ShowAD) + "</div>");
    }
    else {
      document.write("<div id='" + this.DivName + "' style='visibility:visible; z-index:1; width:" + this.ZoneWidth + "px; height:" + this.ZoneHeight + "px'>" + AD_Content(this.ShowAD) + "</div>");
    }
  } 
  else {
    document.write("<div id='" + this.DivName + "' style='visibility:visible; z-index:1; width:" + this.ZoneWidth + "px; height:" + this.ZoneHeight + "px;'>" + AD_Content(this.ShowAD) + "</div>");
    if (this.ShowAD.CountView) {
      document.write ("<script src='" + this.ShowAD.InstallDir + this.ShowAD.ADDIR + "/ADCount.asp?Action=View&ADID=" + this.ShowAD.ADID + "'></" + "script>")
    }
  }
  this.Div = document.getElementById(this.DivName);
  if (this.ShowType == 3) this.LoopShow();
}

function BannerZoneAD_LoopShow() {
  if(document.all) {
    if(this.adNum<this.AllAD.length-1) this.adNum++ ; 
    else this.adNum=0; 
    this.Div.filters.revealTrans.Transition=Math.floor(Math.random()*23); 
    this.Div.filters.revealTrans.apply(); 
    if (this.AllAD[this.adNum].ImgWidth) this.AllAD[this.adNum].ImgWidth = this.ZoneWidth
    if (this.AllAD[this.adNum].ImgHeight) this.AllAD[this.adNum].ImgHeight = this.ZoneHeight
    this.Div.innerHTML=AD_Content(this.AllAD[this.adNum]);
    this.Div.filters.revealTrans.play() 
    this.Div.timer=setTimeout(this.ID+".LoopShow()",this.adDelay);
  }
  else {
    if(this.adNum<this.AllAD.length-1) this.adNum++ ; 
    else this.adNum=0;
    if (this.AllAD[this.adNum].ImgWidth) this.AllAD[this.adNum].ImgWidth = this.ZoneWidth
    if (this.AllAD[this.adNum].ImgHeight) this.AllAD[this.adNum].ImgHeight = this.ZoneHeight
    this.Div.innerHTML=AD_Content(this.AllAD[this.adNum]);
    this.Div.timer=setTimeout(this.ID+".LoopShow()",this.adDelay);
  }
}

function AD_Content(o) {
  var str = "";
  if (o.ADType == 1 || o.ADType == 2) {
  imgurl = o.ImgUrl .toLowerCase()
    if (o.InstallDir.indexOf("http://") != - 1) imgurl = o.InstallDir.substr(0, o.InstallDir.length - 1) + imgurl;
    if (imgurl.indexOf(".swf") !=  - 1) {
      str = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0'";
      str += " name='AD_" + o.ADID + "' id='AD_" + o.ADID + "'";
      str += " width='" + o.ImgWidth + "px'";
      str += " height='" + o.ImgHeight + "px'";
      if (o.style) str += " style='" + o.style + "'";
      if (o.extfunc) str += " " + o.extfunc + " ";
      str += ">";
      str += "<param name='movie' value='" + imgurl + "'>";
      if (o.FlashWmode == 1) str += "<param name='wmode' value='Transparent'>";
      if (o.play) str += "<param name='play' value='" + o.play + "'>";
      if (typeof(o.loop) != "undefined") str += "<param name='loop' value='" + o.loop + "'>";
      str += "<param name='quality' value='autohigh'>";
      str += "<embed ";
      str += " name='AD_" + o.ADID + "' id='AD_" + o.ADID + "'";
      str += " width='" + o.ImgWidth + "px'";
      str += " height='" + o.ImgHeight + "px'";
      if (o.style) str += " style='" + o.style + "'";
      if (o.extfunc) str += " " + o.extfunc + " ";
      str += " src='" + imgurl + "'";
      if (o.FlashWmode == 1) str += " wmode='Transparent'";
      if (o.play) str += " play='" + o.play + "'";
      if (typeof(o.loop) != "undefined") str += " loop='" + o.loop + "'";
      str += " quality='autohigh'"
      str += " pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash' type='application/x-shockwave-flash'></embed>";
      str += "</object>";
    } else if (imgurl.indexOf(".gif") !=  - 1 || imgurl.indexOf(".jpg") !=  - 1 || imgurl.indexOf(".jpeg") !=  - 1 || imgurl.indexOf(".bmp") !=  - 1 || imgurl.indexOf(".png") !=  - 1) {
      if (o.LinkUrl) {
        if (o.CountClick) o.LinkUrl = o.InstallDir + o.ADDIR + "/ADCount.asp?Action=Click&ADID=" + o.ADID
        str += "<a href='" + o.LinkUrl + "' target='" + ((o.LinkTarget == 0) ? "_self" : "_blank") + "' title='" + o.LinkAlt + "'>";
      }
      str += "<img ";
      str += " name='AD_" + o.ADID + "' id='AD_" + o.ADID + "'";
      if (o.style) str += " style='" + o.style + "'";
      if (o.extfunc) str += " " + o.extfunc + " ";
      str += " src='" + imgurl + "'";
      if (o.ImgWidth) str += " width='" + o.ImgWidth + "px'";
      if (o.ImgHeight) str += " height='" + o.ImgHeight + "px'";
      str += " border='0'>";
      if (o.LinkUrl) str += "</a>";
    }
  } else if (o.ADType == 3 || o.ADType == 4) {
    str = o.ADIntro
  } else if (o.ADType == 5) {
    str = "<iframe id='" + "AD_" + o.ADID + "' marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no width=100% height=100% src='" + o.ADIntro + "'>wait</iframe>";
  }
  return str;
}


var ZoneAD_18 = new BannerZoneAD("ZoneAD_18");
ZoneAD_18.ZoneID      = 18;
ZoneAD_18.ZoneWidth   = 665;
ZoneAD_18.ZoneHeight  = 90;
ZoneAD_18.ShowType    = 1;

var objAD = new ObjectAD();
objAD.ADID           = 101;
objAD.ADType         = 4;
objAD.ADName         = "翻牌广告";
objAD.ImgUrl         = "";
objAD.InstallDir     = "http://ahyx.gov.cn/";
objAD.ImgWidth       = 0;
objAD.ImgHeight      = 0;
objAD.FlashWmode     = 0;
objAD.ADIntro        = "<!-- Flash翻牌 开始 -->\n\r\n\r<DIV id=flipper_div align=center></DIV>\n\r<SCRIPT type=text/javascript>\n\r<!--\n\r\n\rvar fp_data = new Array();\n\r\n\r// AE维护部分 开始\n\r\n\r//位置1\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/yygg1.jpg\",\"http://wwww.ahyx.gov.cn/shifosichaye/\"]);\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/yygg2.jpg\",\"http://wwww.ahyx.gov.cn/shifosichaye/\"]);\n\r\n\r//位置2\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/m11.jpg\",\"http://www.sfmltea.com/\"]);\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/m12.jpg\",\"http://www.sfmltea.com/\"]);\n\r\n\r//位置3\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/xccl1.jpg\",\"http://www.ahyx.gov.cn/zt/2015/jiri.html\"]);\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/xccl2.jpg\",\"http://www.ahyx.gov.cn/zt/2015/jiri.html\"]);\n\r\n\r//位置4 \n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/lb1.jpg\",\"http://www.ahyx.gov.cn/zt/2015/ddhy/ddhy.html\"]);\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/lb2.jpg\",\"http://www.ahyx.gov.cn/zt/2015/ddhy/ddhy.html\"]);\n\r\n\r\n\r//位置5\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/jfcj.jpg\",\"http://www.ahyx.gov.cn/zt/xiangmingjiancai.html\"]);\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/jfcj1.jpg\",\"http://www.ahyx.gov.cn/zt/xiangmingjiancai.html\"]);\n\r\n\r\n\r//位置6\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/hx.jpg\",\"#\"]);\n\rfp_data.push([\"http://ahyx.gov.cn/ad/images/hx.jpg\",\"#\"]);\n\r\n\r//AE维护部分 结束\n\r\n\r\n\rvar fp_pics=\"\",fp_links=\"\";\n\rvar fp_lens = fp_data.length;\n\rfor(var i=0; i<fp_lens; i++){\n\r	fp_pics += fp_data[i][0];\n\r	fp_links += escape(fp_data[i][1]);\n\r	if(i%2==0 && i!=fp_lens-1){\n\r		fp_pics += \"§\";\n\r		fp_links += \"§\";\n\r	}else if(i%2==1 && i!=fp_lens-1){\n\r		fp_pics += \"§_§\";\n\r		fp_links += \"§_§\";\n\r	}\n\r}\n\rvar oswf = new sinaFlash(\"http://ahyx.gov.cn/ad/flash/flipper_v2.swf\", \"flipper\", 668, 90, \"7\", \"#FFFFFF\", false, \"High\");\n\roswf.addParam(\"allowScriptAccess\", \"always\");\n\roswf.addParam(\"menu\", \"false\");\n\roswf.addParam(\"wmode\", \"opaque\");\n\roswf.addParam(\"scale\", \"noscale\");\n\roswf.addVariable(\"pic_width\", \"118\");\n\roswf.addVariable(\"pic_height\", \"80\");\n\roswf.addVariable(\"colnum\", \"5\");\n\roswf.addVariable(\"hspace\", \"15\");\n\roswf.addVariable(\"vspace\", \"20\");\n\roswf.addVariable(\"flip_time\", \"200\");\n\roswf.addVariable(\"pause_time\", \"2000\");\n\roswf.addVariable(\"pics\", fp_pics);\n\roswf.addVariable(\"urls\", fp_links);\n\roswf.addVariable(\"rand\", \"0\");\n\roswf.write(\"flipper_div\");\n\r//-->\n\r</SCRIPT>\n\r<!-- Flash翻牌 结束 -->";
objAD.LinkUrl        = "";
objAD.LinkTarget     = 1;
objAD.LinkAlt        = "";
objAD.Priority       = 10;
objAD.CountView      = 1;
objAD.CountClick     = 0;
objAD.ADDIR          = "ahyx_clwl";
ZoneAD_18.AddAD(objAD);

ZoneAD_18.Show();
