var preCell;
var preJ;
var clickTrue = false;
var styleV = "day";
function atCalendarControl(){
  var calendar=this;
  this.calendarPad=null;
  this.prevMonth=null;
  this.nextMonth=null;
  this.prevYear=null;
  this.nextYear=null;
  this.goToday=null;
  this.calendarClose=null;
  this.calendarAbout=null;
  this.head=null;
  this.body=null;
  this.today=[];
  this.currentDate=[];
  this.sltDate;
  this.target;
  this.source;

  /************** 加入日历底板及阴影 *********************/
  this.addCalendarPad=function(){
   document.write("<div id='divCalendarpad' style='position:absolute;top:100;left:0;width:215;display:none;'>");
   document.write("<iframe frameborder=0  width=215></iframe>");
   document.write("<div style='position:absolute;top:2;left:2;width:210;background-color:#336699;'></div>");
   document.write("</div>");
   calendar.calendarPad=document.all.divCalendarpad;
  }
  /************** 加入日历面板 *********************/
  this.addCalendarBoard=function(){
   var BOARD=this;
   var divBoard=document.createElement("div");
   calendar.calendarPad.insertAdjacentElement("beforeEnd",divBoard);
   divBoard.style.cssText="position:absolute;top:0;left:0;width:211;border:0 outset;height:20px;background-color:buttonface;";

   var tbBoard=document.createElement("table");
   divBoard.insertAdjacentElement("beforeEnd",tbBoard);
   tbBoard.style.cssText="position:absolute;top:0;left:0;width:100%;height:20px;font-size:9pt;";
   tbBoard.cellPadding=0;
   tbBoard.cellSpacing=1;
   tbBoard.bgColor="#333333";

  /************** 设置各功能按钮的功能 *********************/
   /*********** Calendar About Button ***************/
   trRow = tbBoard.insertRow(0);
    /* calendar.calendarAbout=calendar.insertTbCell(trRow,0,"-","center");
   calendar.calendarAbout.title="帮助";
   calendar.calendarAbout.onclick=function(){calendar.about();}*/
   /*********** Calendar Head ***************/
   tbCell=trRow.insertCell(0);
   tbCell.colSpan=7;
   tbCell.bgColor="#666666";
   tbCell.align="center";
   // tbCell.style.cssText = "cursor:default";
   tbCell.style.cssText="cursor:default;border:0 solid #99CCCC;background-color:#EAF5F7;height:20px;";
   calendar.head=tbCell;
   /*********** Calendar Close Button ***************/
  /* tbCell=trRow.insertCell(2);
   calendar.calendarClose = calendar.insertTbCell(trRow,2,"x","center");
   calendar.calendarClose.title="关闭";
   calendar.calendarClose.onclick=function(){calendar.hide();}*/

   /*********** Calendar PrevYear Button ***************/
   trRow = tbBoard.insertRow(1);
   calendar.prevYear = calendar.insertTbCell(trRow,0,"&lt;&lt;","center");
   calendar.prevYear.title="上一年";
   calendar.prevYear.onmousedown=function(){
    calendar.currentDate[0]--;
    calendar.show(calendar.target,calendar.currentDate[0]+"-"+calendar.currentDate[1]+"-"+calendar.currentDate[2],calendar.source,styleV);
   }
   /*********** Calendar PrevMonth Button ***************/
   calendar.prevMonth = calendar.insertTbCell(trRow,1,"&lt;","center");
   calendar.prevMonth.title="上一月";
   calendar.prevMonth.onmousedown=function(){

    calendar.currentDate[1]--;
    if(calendar.currentDate[1].toString().length<2)
       calendar.currentDate[1] = "0"+calendar.currentDate[1];
    if(calendar.currentDate[1]==0){
     calendar.currentDate[1]=12;
     calendar.currentDate[0]--;
    }
    calendar.show(calendar.target,calendar.currentDate[0]+"-"+calendar.currentDate[1]+"-"+calendar.currentDate[2],calendar.source,styleV);
   }
   /*********** Calendar Today Button ***************/
   calendar.goToday = calendar.insertTbCell(trRow,2,"当前时间","center",3);
   calendar.goToday.title="选择当前时间";
   calendar.goToday.onclick=function(){
    calendar.sltDate=calendar.today[0]+"-"+calendar.today[1]+"-"+calendar.today[2];
    calendar.target.value=calendar.sltDate;
    calendar.currentDate[0] = calendar.today[0];
    calendar.currentDate[1] = calendar.today[1];
    calendar.currentDate[2] = calendar.today[2];
    calendar.target.value=calendar.sltDate;
    initDateParams();
    //calendar.hide();
    calendar.show(calendar.target,calendar.today[0]+"-"+calendar.today[1]+"-"+calendar.today[2],calendar.source,styleV);
   }
   /*********** Calendar NextMonth Button ***************/
   calendar.nextMonth = calendar.insertTbCell(trRow,3,"&gt;","center");
   calendar.nextMonth.title="下一月";
   calendar.nextMonth.onmousedown=function(){
    calendar.currentDate[1]++;
    if(calendar.currentDate[1].toString().length<2)
       calendar.currentDate[1] = "0"+calendar.currentDate[1];
    if(calendar.currentDate[1]==13){
     calendar.currentDate[1]="01";
     calendar.currentDate[0]++;
    }
    calendar.show(calendar.target,calendar.currentDate[0]+"-"+calendar.currentDate[1]+"-"+calendar.currentDate[2],calendar.source,styleV);
   }
   /*********** Calendar NextYear Button ***************/
   calendar.nextYear = calendar.insertTbCell(trRow,4,"&gt;&gt;","center");
   calendar.nextYear.title="下一年";
   calendar.nextYear.onmousedown=function(){
    calendar.currentDate[0]++;
    calendar.show(calendar.target,calendar.currentDate[0]+"-"+calendar.currentDate[1]+"-"+calendar.currentDate[2],calendar.source,styleV);

   }

   trRow = tbBoard.insertRow(2);
   var cnDateName = new Array("日","一","二","三","四","五","六");
   for (var i = 0; i < 7; i++) {
    tbCell=trRow.insertCell(i)
    tbCell.innerText=cnDateName[i];
    tbCell.align="center";
    tbCell.width=30;
    tbCell.style.cssText="cursor:default;border:0 solid #99CCCC;background-color:#EAF5F7;height:20px";
   }

   /*********** Calendar Body ***************/
   trRow = tbBoard.insertRow(3);
   tbCell=trRow.insertCell(0);
   tbCell.colSpan=7;
   //tbCell.height=97;
   tbCell.vAlign="top";
   tbCell.bgColor="#F0F0F0";
   var tbBody=document.createElement("table");
   tbCell.insertAdjacentElement("beforeEnd",tbBody);
   tbBody.style.cssText="position:relative;top:0;left:0;width:210;font-size:9pt;"
   tbBody.cellPadding=0;
   tbBody.cellSpacing=1;
   calendar.body=tbBody;
  }
  /************** 加入功能按钮公共样式 *********************/
  this.insertTbCell=function(trRow,cellIndex,TXT,trAlign,tbColSpan){
   var tbCell=trRow.insertCell(cellIndex);
   if(tbColSpan!=undefined) tbCell.colSpan=tbColSpan;

   var btnCell=document.createElement("button");
   tbCell.insertAdjacentElement("beforeEnd",btnCell);
   btnCell.value=TXT;
   btnCell.style.cssText="width:100%;border:0 outset;background-color:buttonface;height:20px;";
   btnCell.onmouseover=function(){
    btnCell.style.cssText="width:100%;border:0 outset;background-color:#F0F0F0;height:20px;";

   }
   btnCell.onmouseout=function(){
    btnCell.style.cssText="width:100%;border:0 outset;background-color:buttonface;height:20px;";
   }
  // btnCell.onmousedown=function(){
  //  btnCell.style.cssText="width:100%;border:1 inset;background-color:#F0F0F0;";
  // }
   btnCell.onmouseup=function(){
    btnCell.style.cssText="width:100%;border:0 outset;background-color:#F0F0F0;height:20px;";
   }
   btnCell.onclick=function(){
    btnCell.blur();
   }
   return btnCell;
  }
  this.setDefaultDate=function(){
   var dftDate=new Date();
   calendar.today[0]=dftDate.getYear();
   if((dftDate.getMonth()+1).toString().length<2)
       calendar.today[1]="0"+(dftDate.getMonth()+1);
   else
   	  calendar.today[1]=dftDate.getMonth()+1;
   if(dftDate.getDate().toString().length<2)
      calendar.today[2]="0"+dftDate.getDate();
   else
   	  calendar.today[2]=dftDate.getDate();
  }

  /****************** Show Calendar *********************/
  this.show=function(targetObject,defaultDate,sourceObject,styleView){
   if(targetObject==undefined) {
    alert("未设置目标对像. \n方法: ATCALENDAR.show(obj 目标对像,string 默认日期,obj 点击对像);\n\n目标对像:接受日期返回值的对像.\n默认日期:格式为\"yyyy-mm-dd\",缺省为当日日期.\n点击对像:点击这个对像弹出calendar,默认为目标对像.\n");
    return false;
   }
   else    calendar.target=targetObject;
   if(sourceObject==undefined) calendar.source=calendar.target;
   else calendar.source=sourceObject;
   var firstDay;
   var Cells=new Array();

   if(defaultDate==undefined || defaultDate==""){
	    var theDate=new Array();
	    calendar.head.innerText = "所选日期："+calendar.today[0]+"-"+calendar.today[1]+"-"+calendar.today[2];
	    theDate[0]=calendar.today[0]; theDate[1]=calendar.today[1]; theDate[2]=calendar.today[2];
   }
   else{
    var reg=/^\d{4}-\d{1,2}-\d{2}$/
    if(!defaultDate.match(reg)){
     alert("默认日期的格式不正确\n\n默认日期可接受格式为:'yyyy-mm-dd'");
     return;
    }
    var theDate=defaultDate.split("-");
    styleV = styleView;
    if(styleView=="year")
	    {
			    calendar.head.innerText = "所选年份："+theDate[0];
			    calendar.target.value = defaultDate;
			    initDateParams();
	    }
	    else if(styleView=="month")
	    {
			    calendar.head.innerText = "所选年月："+theDate[0]+"-"+theDate[1];
			    calendar.target.value = defaultDate;
			    initDateParams();
	    }
	    else
	    {
			    calendar.head.innerText = "所选日期："+theDate[0]+"-"+theDate[1]+"-"+theDate[2];
	    }
   }
   calendar.currentDate[0]=theDate[0];
   calendar.currentDate[1]=theDate[1];
   calendar.currentDate[2]=theDate[2];
   theFirstDay=calendar.getFirstDay(theDate[0],theDate[1]);
   theMonthLen=theFirstDay+calendar.getMonthLen(theDate[0],theDate[1]);
   //calendar.setEventKey();

   calendar.calendarPad.style.display="";
   var theRows = Math.ceil((theMonthLen)/7);
   //清除旧的日历;
   while (calendar.body.rows.length > 0) {
    calendar.body.deleteRow(0)
   }
   //建立新的日历;
   var n=0;day=0;
   for(i=0;i<theRows;i++){
    theRow=calendar.body.insertRow(i);
    for(j=0;j<7;j++){
     n++;
     if(n>theFirstDay && n<=theMonthLen){
      day=n-theFirstDay;
      calendar.insertBodyCell(theRow,j,day);
     }

     else{
      var theCell=theRow.insertCell(j);
      theCell.style.cssText="background-color:#FFFFFF;cursor:default;";
     }
    }
   }

   //****************调整日历位置**************//
   var offsetPos=calendar.getAbsolutePos(calendar.source);//计算对像的位置;
   if((document.body.offsetHeight-(offsetPos.y+calendar.source.offsetHeight-document.body.scrollTop))<calendar.calendarPad.style.pixelHeight){
    var calTop=offsetPos.y-calendar.calendarPad.style.pixelHeight;
   }
   else{
    var calTop=offsetPos.y+calendar.source.offsetHeight;
   }
   if((document.body.offsetWidth-(offsetPos.x+calendar.source.offsetWidth-document.body.scrollLeft))>calendar.calendarPad.style.pixelWidth){
    var calLeft=offsetPos.x;
   }
   else{
    var calLeft=calendar.source.offsetLeft+calendar.source.offsetWidth;
   }
   //alert(offsetPos.x);
   calendar.calendarPad.style.pixelLeft=calLeft;
   calendar.calendarPad.style.pixelTop=calTop;
  }
  /****************** 计算对像的位置 *************************/
  this.getAbsolutePos = function(el) {
   var r = { x: el.offsetLeft, y: el.offsetTop };
   if (el.offsetParent) {
    var tmp = calendar.getAbsolutePos(el.offsetParent);
    r.x += tmp.x;
    r.y += tmp.y;
   }
   return r;
  };

  //************* 插入日期单元格 **************/
  this.insertBodyCell=function(theRow,j,day,targetObject){
   var theCell=theRow.insertCell(j);
  if(j==0||j==6) var theBgColor="#EAF5F7";
   else var theBgColor="#FFFFFF";
    if(day==calendar.currentDate[2]&&calendar.currentDate[0]==calendar.today[0]&&calendar.currentDate[1]==calendar.today[1])
    {
    	preCell=theCell;
      preJ=j;
    	var theBgColor="#F0F0F0";
    }
   // if(day==calendar.today[2]) var theBgColor="#99FFCC";
   theCell.bgColor=theBgColor;
   theCell.innerText=day;
   theCell.align="center";
   theCell.width=30;
   theCell.style.cssText="border:0 solid #CCCCCC;cursor:hand;height:18px;font-size:7pt;";
  /* theCell.onmouseover=function(){
    theCell.bgColor="#FFFFCC";
    theCell.style.cssText="border:1 outset;cursor:hand;";
   }*/
   theCell.onmouseout=function(){
    // theCell.bgColor=theBgColor;
    theCell.style.cssText="border:0 solid #CCCCCC;cursor:hand;height:18px;font-size:7pt;";
   }
   theCell.onmousedown=function(){
    theCell.bgColor="#F0F0F0";
    theCell.style.cssText="border:0 inset;cursor:hand;height:18px;font-size:7pt;";
   }
   theCell.onclick=function(){
 		if(preCell != undefined&&preCell!=theCell)
 		{
	   	if(preJ==0||preJ==6)
	   	   preCell.bgColor="#EAF5F7";
	   	else
	   		 preCell.bgColor="#FFFFFF";
   	}
    preCell=theCell;
    preJ=j;
    theBgColor = "#F0F0F0";
    if(calendar.currentDate[1].length<2) calendar.currentDate[1]="0"+calendar.currentDate[1];
    if(day.toString().length<2) day="0"+day;
    calendar.sltDate=calendar.currentDate[0]+"-"+calendar.currentDate[1]+"-"+day;
    calendar.target.value=calendar.sltDate;
    calendar.head.innerText = "所选日期："+calendar.sltDate;
    initDateParams();
    // calendar.hide();
   }
  }
  /************** 取得月份的第一天为星期几 *********************/
  this.getFirstDay=function(theYear, theMonth){
   var firstDate = new Date(theYear,theMonth-1,1);
   return firstDate.getDay();
  }
  /************** 取得月份共有几天 *********************/

  this.getMonthLen=function(theYear, theMonth) {
   theMonth--;
   var oneDay = 1000 * 60 * 60 * 24;
   var thisMonth = new Date(theYear, theMonth, 1);
   var nextMonth = new Date(theYear, theMonth + 1, 1);
   var len = Math.ceil((nextMonth.getTime() - thisMonth.getTime())/oneDay);
   return len;
  }
  /************** 隐藏日历 *********************/
  this.hide=function(){
   //calendar.clearEventKey();
   // calendar.calendarPad.style.display="none";
  }
  this.hide2=function(){
   calendar.clearEventKey();
   calendar.calendarPad.style.display="none";
  }
  /************** 从这里开始 *********************/
  this.setup=function(defaultDate){
   calendar.addCalendarPad();
   calendar.addCalendarBoard();
   calendar.setDefaultDate();
  }
  /************** 关于AgetimeCalendar *********************/
  this.about=function(){
   /*//alert("Agetime Calendar V1.0\n\nwww.agetime.com\n");
   popLeft = calendar.calendarPad.style.pixelLeft+4;
   popTop = calendar.calendarPad.style.pixelTop+25;
   var popup = window.createPopup();
   var popupBody = popup.document.body;
   popupBody.style.cssText="border:solid 2 outset;font-size:9pt;background-color:#F0F0F0;";
   var popHtml = "<span style='color:#336699;font-size:12pt;'><U>关于 AgetimeCalendar</U></span><BR><BR>";
   popHtml+="版本: v1.0<BR>日期: 2004-03-13";
   popupBody.innerHTML=popHtml;
   popup.show(popLeft,popTop,240,136,document.body); */
   var strAbout = "About AgetimeCalendar\n\n";
   strAbout+="?\t: 关于\n";
  // strAbout+="x\t: 隐藏\n";
   strAbout+="<<\t: 上一年\n";
   strAbout+="<\t: 上一月\n";

   strAbout+="今日\t: 返回当天日期\n";
   strAbout+=">\t: 下一月\n";
   strAbout+="<<\t: 下一年\n";
   strAbout+="\nAgetimeCalendar\nVersion:v1.0\nDesigned By: \n";
   alert(strAbout);
  }

  calendar.setup();
 }

