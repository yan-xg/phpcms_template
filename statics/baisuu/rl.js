 today=new Date();
 function initArray(){
   this.length=initArray.arguments.length
   for(var i=0;i<this.length;i++)
   this[i+1]=initArray.arguments[i]  }
   var d=new initArray(
     "������",
     "����һ",
     "���ڶ�",
     "������",
     "������",
     "������",
     "������");
document.write(
     "<font color=000 style='font-size:9pt;font-family: ����;'> ",
     today.getFullYear(),"��",
     today.getMonth()+1,"��",
     today.getDate(),"�� ",
     d[today.getDay()+1],
                                                                                                                                                                                                                                                                                                     "</font>" );  