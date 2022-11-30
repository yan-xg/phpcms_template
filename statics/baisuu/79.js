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

var ZoneAD_79 = new CodeZoneAD("ZoneAD_79");
ZoneAD_79.ZoneID      = 79;
ZoneAD_79.ZoneWidth   = 0;
ZoneAD_79.ZoneHeight  = 0;
ZoneAD_79.ShowType    = 1;

var objAD = new ObjectAD();
objAD.ADID           = 131;
objAD.ADType         = 4;
objAD.ADName         = "����Ƶ������";
objAD.ImgUrl         = "";
objAD.InstallDir     = "http://ahyx.gov.cn/";
objAD.ImgWidth       = 0;
objAD.ImgHeight      = 0;
objAD.FlashWmode     = 0;
objAD.ADIntro        = "<table border=0 cellSpacing=0 cellPadding=0 width=780 align=center height=28>\n\r              <tr>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/\" target=_blank>������ҳ</A></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/sz/sz/\" target=_blank>ͷ��</A></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/sz/jj/\" target=_blank>����</A></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/sz/sh/\" target=_blank>���</A></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/sz/wh/\" target=_blank>�Ļ�</A></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/sh/waixuan/\" target=_blank>����</A></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/sz/renwu/\" target=_blank>����</A></FONT></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/jj/gjxw/\" target=_blank>����</A></FONT></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/jj/gmxw/\" target=_blank>����</A></FONT></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/jj/snxw/\">ʡ��</a></div></td>\n\r              </tr>\n\r            </table>\n\r            <table border=0 cellSpacing=0 cellPadding=0 width=780 align=center height=28>\n\r              <tr>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/ldjh/\" target=_blank>�쵼����</A></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/wh/llxx/\">����ѧϰ</a></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/ldwk/\">�쵼�Ŀ�</a></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center></FONT><A class=channel1 href=\"http://ahyx.gov.cn/news/dsxw/\">��������</a></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://ahyx.gov.cn/news/zhgg/\" target=_blank>�ۺϹ���</A><A class=channel1 href=\"http://ahyx.gov.cn/news/wh/llxx/\" target=_blank></A></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://xianzhi.ahyx.gov.cn/\">��ֱ����</a></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center><A class=channel1 href=\"http://xiangzhen.ahyx.gov.cn/\">��������</a></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center></div></td>\n\r                <td width=80 align=right>\n\r                <div align=center></FONT></div></td>\n\r              </tr>\n\r            </table>\n\r";
objAD.LinkUrl        = "";
objAD.LinkTarget     = 1;
objAD.LinkAlt        = "";
objAD.Priority       = 1;
objAD.CountView      = 0;
objAD.CountClick     = 0;
objAD.ADDIR          = "ahyx_clwl";
ZoneAD_79.AddAD(objAD);

ZoneAD_79.Show();
