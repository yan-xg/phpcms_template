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

function CodeZoneAD(_id) {
  /* Define Common Variables*/
  this.ID          = _id;
  this.ZoneID      = 0;

  /* Define Unique Variables*/

  /* Define Objects */
  this.AllAD       = new Array();
  this.ShowAD      = null;

  /* Define Functions */
  this.AddAD       = CodeZoneAD_AddAD;
  this.GetShowAD   = CodeZoneAD_GetShowAD;
  this.Show        = CodeZoneAD_Show;

}

function CodeZoneAD_AddAD(_AD) {
  this.AllAD[this.AllAD.length] = _AD;
}

function CodeZoneAD_GetShowAD() {
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

function CodeZoneAD_Show() {
  if (!this.AllAD) {
    return;
  } else {
    this.GetShowAD();
  }

  if (this.ShowAD == null) return false;
  document.write(this.ShowAD.ADIntro);
}

var ZoneAD_64 = new CodeZoneAD("ZoneAD_64");
ZoneAD_64.ZoneID      = 64;
ZoneAD_64.ZoneWidth   = 0;
ZoneAD_64.ZoneHeight  = 0;
ZoneAD_64.ShowType    = 1;

var objAD = new ObjectAD();
objAD.ADID           = 187;
objAD.ADType         = 4;
objAD.ADName         = "����&nbsp;����&nbsp;���&nbsp;�ֽ�&nbsp;�ɾ�-�ٶ��й�";
objAD.ImgUrl         = "";
objAD.InstallDir     = "http://ahyx.gov.cn/";
objAD.ImgWidth       = 0;
objAD.ImgHeight      = 0;
objAD.FlashWmode     = 0;
objAD.ADIntro        = "<!-- ���λ������ҳ������� -->\n\r<script type=\"text/javascript\" >BAIDU_CLB_SLOT_ID = \"818825\";</script>\n\r<script type=\"text/javascript\" src=\"http://cbjs.baidu.com/js/o.js\"></script>";
objAD.LinkUrl        = "";
objAD.LinkTarget     = 1;
objAD.LinkAlt        = "";
objAD.Priority       = 1;
objAD.CountView      = 1;
objAD.CountClick     = 0;
objAD.ADDIR          = "ahyx_clwl";
ZoneAD_64.AddAD(objAD);

ZoneAD_64.Show();
