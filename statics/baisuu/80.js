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

var ZoneAD_80 = new CodeZoneAD("ZoneAD_80");
ZoneAD_80.ZoneID      = 80;
ZoneAD_80.ZoneWidth   = 0;
ZoneAD_80.ZoneHeight  = 0;
ZoneAD_80.ShowType    = 1;

var objAD = new ObjectAD();
objAD.ADID           = 132;
objAD.ADType         = 4;
objAD.ADName         = "��ҳ���Ӵ���";
objAD.ImgUrl         = "";
objAD.InstallDir     = "http://ahyx.gov.cn/";
objAD.ImgWidth       = 0;
objAD.ImgHeight      = 0;
objAD.FlashWmode     = 0;
objAD.ADIntro        = "<style type=\"text/css\">\n\r<!--\n\r.lianji_01 {letter-spacing: -1px;}\n\r.lianji_01 a{\n\r	letter-spacing: -1px;\n\r	font-size: 13px;\n\r}\n\r.yxw_tjlj_1 {line-height: 20px;color: #F00;}\n\r.yxw_riligd {line-height: 15px;}\n\r-->\n\r</style>\n\r\n\r<table border=0 cellspacing=0 cellpadding=0 width=990 align=center>\n\r  <tr>\n\r    <td><table border=0 cellspacing=0 cellpadding=0 width=\"100%\">\n\r      <tr>\n\r        <td valign=top width=\"100%\"><table border=0 cellspacing=0 cellpadding=0 width=\"100%\">\n\r          <tr>\n\r            <td bgcolor=#ffffff height=40 align=right><table border=0 cellspacing=0 cellpadding=0 width=990 align=center>\n\r              <tr>\n\r                <td><table border=0 cellspacing=0 cellpadding=0 width=\"100%\">\n\r                  <tr>\n\r                    <td valign=top width=\"100%\"><table border=0 cellspacing=0 cellpadding=0 width=\"100%\">\n\r                      <tr>\n\r                        <td bgcolor=#ffffff height=40 align=right><table border=0 cellspacing=0 cellpadding=0 width=990>\n\r                          <tr>\n\r                            <td class=yxw_riligd height=24 align=left><div class=lianji_01><span class=yxw_tjlj_1>�Ƽ�:</span> <a href=\"http://www.yxdx.com.cn/\" target=_blank>��У</a> <a href=\"http://www.yxnyw.com/\" target=_blank>ũҵ</a> <a href=\"http://yxfyw.gov.cn/\" target=_blank>��Ժ</a> <a href=\"http://www.ahjcy.gov.cn/jcy-group/jcy-home/aqyx/index.htm\" target=_blank>���Ժ</a> <a href=\"http://www.yxzgh.gov.cn/\" target=_blank>�ܹ���</a> <a href=\"http://www.54yx.org.cn/\" target=_blank>��ί</a> <a href=\"http://www.yxfgw.gov.cn/\" target=_blank>����ί</a> <a href=\"http://www.yxrsbz.gov.cn/\" target=_blank>����</a> <a href=\"http://www.yxzdj.com/\" target=\"_blank\">�ص��</a> <a href=\"http://www.yxflw.com\" target=_blank>����</a> <a href=\"http://yxcg.ahyx.gov.cn/\" target=_blank>ִ��</a> <a href=\"http://yxshbx.gov.cn/\" target=_blank>�籣</a> <a href=\"http://www.yxmzj.gov.cn/\" target=_blank>����</a> <a href=\"http://ajj.ahyx.gov.cn/\" target=_blank>����</a> <a href=\"http://www.yxlyj.net/\" target=_blank>��ҵ</a> <a href=\"http://www.yxclw.com/\" target=_blank>����</a> <a href=\"http://www.yxtczx.com/\" target=_blank>����</a> <a href=\"http://www.yxgtj.gov.cn/\" target=_blank>����</a> <a href=\"http://yxxgs.cn/\" target=_blank>����</a> <a href=\"http://www.yxxhbj.gov.cn/\" target=_blank>����</a> <a href=\"http://www.ahyxws.gov.cn/wsj/\" target=_blank>����</a>  <a href=\"http://yxdsj.gov.cn/\" target=_blank>��˰</a> <a href=\"http://www.yx.aqjt.cn/\" target=_blank>��ͨ</a> <a href=\"http://www.yxzj.gov.cn\" target=_blank>ס��</a> <a href=\"http://daj.ahyx.cc/\" target=_blank>����</a> <a href=\"http://www.ahyxsfj.com\" target=_blank>˾��</a> <a href=\"http://www.yxglj.cn/\" target=_blank>��·</a> <a href=\"http://www.ahyxcl.org.cn/\" target=_blank>����</a> <a href=\"http://www.yxtwxh.com/\" target=_blank>��Э</a> <a href=\"http://www.yxxjxw.gov.cn/\" target=_blank>����ί</a> </div></td>\n\r                          </tr>\n\r                          <tr>\n\r                            <td class=yxw_riligd height=24 align=left><div class=lianji_01> <a href=\"http://xzlb.ahyx.gov.cn/xzhlb/ShowClass.asp?ClassID=2146\" target=_blank>�����</a> <a href=\"http://www.yxzfgjj.cn/\" target=_blank>������</a> <a href=\"http://yxmzzj.gov.cn/Index.shtml\" target=_blank>�ڽ�</a> <a href=\"http://xzlb.ahyx.gov.cn/xzhlb/ShowClass.asp?ClassID=1957\" target=_blank>ҩ��</a> <a href=\"http://www.cnyxtj.com/\" target=_blank>ͳ��</a> <a href=\"http://www.ahnjh.gov.cn/subarea/yuexi/\" target=_blank>ũ��</a> <a href=\"http://yxwgxj.gov.cn/\" target=_blank>�Ĺ�</a> <a href=\"http://www.yxjyj.com/\" target=_blank>����</a> <a href=\"http://xzlb.ahyx.gov.cn/xzhlb/ShowClass.asp?ClassID=1839\" target=_blank>����</a> <a href=\"http://yxlgj.gov.cn/\" target=_blank>�ϸɾ�</a> <a href=\"http://yxxsjj.gov.cn/\" target=_blank>���</a> <a href=\"http://www.yxslj.gov.cn/\" target=_blank>ˮ��</a> <a href=\"http://www.ahyxjsw.gov.cn/\" target=_blank>����</a> <a href=\"http://xianzhi.ahyx.gov.cn/xianzhi/nonghang/Index.html\" target=_blank>ũ��</a> <a href=\"http://xzlb.ahyx.gov.cn/yxdfz/Index.html\" target=_blank>־��</a> <a href=\"http://fzb.ahyx.gov.cn\">���ư�</a> <a href=\"http://ysy.ahyx.gov.cn/\" target=_blank>��Ȫ����԰</a> <a href=\"http://www.ahyxzj.com/\" target=_blank>ְ������</a> <a href=\"http://www.ahswan.com/\" target=_blank>���</a> <a href=\"http://htzjyw.com/\" target=_blank>��ͼѧУ</a> <a href=\"http://yxdqzx.com/\" target=_blank>����</a> <a href=\"http://yuexigaoqiang.com/\" target=_blank>������ǻ</a> <a href=\"http://www.yxxcjy.com/\" target=_blank>�쳦ѧУ</a> <a href=\"http://ahsdyx.com/\" target=_blank>ˮ��</a> <a href=\"http://www.yxkj.gov.cn/\" target=_blank>�Ƽ�</a> <a href=\"http://www.xjy168.com/\" target=\"_blank\">�¼�Ԫ</a></div></td>\n\r                          </tr>\n\r                          <tr>\n\r                            <td class=yxw_riligd height=24 align=left><div class=lianji_01><a href=\"http://www.xjy168.com/\" target=\"_blank\"></a> <a href=\"http://www.ahgly.com/\" target=\"_blank\">����Դ��</a> <a href=\"http://www.yxxap.com/\" target=_blank>����ƺ</a> <a href=\"http://www.qys.cc/\" target=_blank>ȪԴʢ</a> \n\r<a href=\"http://www.ahzfcj.com/\" target=_blank>���ǲ��</a> <a href=\"http://www.dmtcy888.com/\" target=_blank>�����ò�</a> <a href=\"http://www.miaodaochun.com/\" target=_blank>���ֲ�ҵ</a> <a href=\"http://ahsytea.com/\" target=_blank>�����ҵ</a> <a href=\"http://yxdzr.com/\" target=_blank>����Ȼ������</a> <a href=\"http://xzlb.ahyx.gov.cn/xzhlb/ShowClass.asp?ClassID=1951\" target=_blank></a><a href=\"http://www.yxfycj.com/\" target=_blank>��Դ���</a> <a href=\"http://www.dbslx.com/Index.html\" target=_blank>��������</a> <a href=\"http://www.ahhsny.cn/\" target=_blank>��������</a> <a href=\"http://ahyx.gov.cn/ahyx_clwl/ayqm.html\" target=_blank>������ó</a> <a href=\"http://www.ahhykw.com/\" target=_blank>����</a> <a href=\"http://www.yxlyzx.net/\" target=\"_blank\">����ѧУ</a> <A href=\"http://www.xwjy.org/tresearch/wgindex0.jsp?cid=00014&wgid=WG_899810\" target=\"_blank\">����������</A></div></td>\n\r                          </tr>\n\r                        </table></td>\n\r                      </tr>\n\r                    </table></td>\n\r                  </tr>\n\r                </table></td>\n\r              </tr>\n\r            </table></td>\n\r          </tr>\n\r        </table></td>\n\r      </tr>\n\r    </table></td>\n\r  </tr>\n\r</table>\n\r";
objAD.LinkUrl        = "";
objAD.LinkTarget     = 1;
objAD.LinkAlt        = "";
objAD.Priority       = 1;
objAD.CountView      = 1;
objAD.CountClick     = 0;
objAD.ADDIR          = "ahyx_clwl";
ZoneAD_80.AddAD(objAD);

ZoneAD_80.Show();
