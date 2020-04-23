function f_alert(obj,txt,title){
	if(title!=undefined){
		alert(title+txt);
	}else{
		alert(txt);
	}
	obj.select();
} 

function AntiSqlValid(oField)
{
    var re= /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
    if (re.test(oField.value) )
    {
        oField.value = "";
        oField.className="errInfo";
        oField.focus();
        return false;
    }
}

function AntiSqlValid_str(str)
{
    // var re= /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
    var re= /select|update|delete|exec|count|'|"|=|>|<|%/i;
    if (re.test(str) )
    {
        return false;
    }else{
		return true;
	}
}

function isNum(obj,title)

    {
          var s=obj.value;
  //判断有效数字的正则表达式

var pattern=/^(-  |\+)?\d+(\.\d+)?$/;
//var pattern=/^[-]?([1-9]+\.[0-9]+|0\.[0-9]+|[1-9]+\d*)$/;

//判断绝对值大于1的小数
//        var pattern=/^[-]?([1-9]+\.[0-9]+|)$/;

//判断绝对值小于1的小数
//        var pattern=/^[-]?(0\.[0-9]+)$/;

//判断整数
//        var pattern=/^[-]?([1-9]+\d*)$/;
        
        if(pattern.test(s))
        {
           return true;
        }
        else 
        {
            f_alert(obj,"不是有效数字",title);   
           return false;     
        }        
    }

/** 
* 取得字符串的字节长度 
*/ 

function strlen(str)    
{    
    var i;    
    var len;    
        
    len = 0;    
    for (i=0;i<str.length;i++)    
    {    
        if (str.charCodeAt(i)>255) len+=2; else len++;    
    }    
    return len;    
}  

/* 
功能：验证身份证号码是否有效 
提示信息：未输入或输入身份证号不正确！ 
使用：f_check_IDno(obj) 
返回：bool 
*/ 
function f_check_IDno(obj)    
{     
    var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};    
     
    var iSum = 0;    
    var info = "";    
    var strIDno = obj.value;    
    var idCardLength = strIDno.length;      
    if(!/^\d{17}(\d|x)$/i.test(strIDno)&&!/^\d{15}$/i.test(strIDno))     
    {    
        f_alert(obj,"非法身份证号");    
        return false;    
    }    
     
    //在后面的运算中x相当于数字10,所以转换成a    
    strIDno = strIDno.replace(/x$/i,"a");    
   
    if(aCity[parseInt(strIDno.substr(0,2))]==null)    
    {    
        f_alert(obj,"非法地区");    
        return false;    
    }    
        
    if (idCardLength==18)    
    {    
        sBirthday=strIDno.substr(6,4)+"-"+Number(strIDno.substr(10,2))+"-"+Number(strIDno.substr(12,2));    
        var d = new Date(sBirthday.replace(/-/g,"/"))    
        if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))    
        {           
            f_alert(obj,"非法生日");    
            return false;    
        }    
   
        for(var i = 17;i>=0;i --)    
            iSum += (Math.pow(2,i) % 11) * parseInt(strIDno.charAt(17 - i),11);    
   
        if(iSum%11!=1)    
        {    
            f_alert(obj,"非法身份证号");    
            return false;    
        }    
    }    
    else if (idCardLength==15)    
    {    
        sBirthday = "19" + strIDno.substr(6,2) + "-" + Number(strIDno.substr(8,2)) + "-" + Number(strIDno.substr(10,2));    
        var d = new Date(sBirthday.replace(/-/g,"/"))    
        var dd = d.getFullYear().toString() + "-" + (d.getMonth()+1) + "-" + d.getDate();       
        if(sBirthday != dd)    
        {    
            f_alert(obj,"非法生日");    
            return false;    
        }    
    }    
    return true;     
} 


/* 判断是否为邮政编码 */ 
function f_check_zipcode(obj)    
{    
    if(!f_check_number(obj))    
        return false;    
    if(obj.value.length!=6)    
    {    
        f_alert(obj,"邮政编码长度必须是6位");    
        return false;    
    }    
    return true;    
}    


/* 
要求：一、电话号码由数字、"("、")"和"-"构成 
二、电话号码为3到8位 
三、如果电话号码中包含有区号，那么区号为三位或四位 
四、区号用"("、")"或"-"和其他部分隔开 
用途：检查输入的电话号码格式是否正确 
输入： 
strPhone：字符串 
返回： 
如果通过验证返回true,否则返回false 
*/ 
function f_check_phone(obj)     
{    
    var regu =/(^([0][1-9]{2,3}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0][1-9]{2,3}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/;     
    var re = new RegExp(regu);    
    if (re.test( obj.value )) {    
      return true;    
    }    
    f_alert(obj,"请输入正确的电话号码");    
    return false;    
} 


/* 
用途：检查输入对象的值是否符合E-Mail格式 
输入：str 输入的字符串 
返回：如果通过验证返回true,否则返回false 
*/ 

function f_check_email(obj){      
    var myReg = /^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;     
    if(myReg.test( obj.value )) return true;     
    f_alert(obj,"请输入合法的电子邮件地址");    
    return false;     
}    

/* 
用途：检查输入字符串是否只由汉字、字母、数字组成 
输入： 
value：字符串 
返回： 
如果通过验证返回true,否则返回false 
*/ 
function f_check_ZhOrNumOrLett(obj){    //判断是否是汉字、字母、数字组成    
    var regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";       
    var re = new RegExp(regu);    
    if (re.test( obj.value )) {    
      return true;    
    }    
    f_alert(obj,"请输入汉字、字母或数字");    
    return false;    
} 


/* 
* 判断是否为英文字母，是则返回true,否则返回false 
*/ 

function f_check_letter(obj)    
{           
    if (/^[A-Za-z]+$/.test( obj.value ))     
    {    
       return true;    
    }     
    f_alert(obj,"请输入英文字母");    
    return false;    
}    


/* 
用途：检查输入字符串是否只由汉字组成 
如果通过验证返回true,否则返回false 
*/ 
function f_check_zh(obj,tit){    
    if (/^[\u4e00-\u9fa5]+$/.test(obj.value)) {    
      return true;    
    }    
    if(tit==undefined){tit = '';}
    f_alert(obj,tit+"应全部为汉字");    
    return false;
} 

/* 
* 判断是否为数字，是则返回true,否则返回false 
*/ 

function f_check_number(obj,title)    
{           
    if (/^\d+$/.test(obj.value))    
    {    
       return true;    
    }     
    else     
    {    
       f_alert(obj,"请输入数字",title);    
       return false;    
    }    
}

//检查有效性
function checkFormElement(form) {
	var flag = true;
	$("input[check]").each(function(i){
		var checkval = $(this).attr("check");
		var val = $(this).val();
		if(checkval=='number' && val!=''){//有效数字
        	if(!isNum(this)){
        		flag = false;
        		return false;
        	}
        }else if(checkval=='sfz' && val!=''){//身份证验证
        	if(!f_check_IDno(this)){
        		flag = false;
        		return false;
        	}
        }else if(checkval=='notnull'){//不能为空
        	if(val==''){
        		 f_alert(this,'不能为空!');
        		flag = false;
        		 return false;
        	}
        }else if(checkval=='number,notnull' ){//有效数字 并且不能为空
        	if(val==''){
        		f_alert(this,'不能为空!');
        		flag = false;
        		 return false;
        	}else{
        		if(!isNum(this)){
        		flag = false;
        		return false;
        	}
        	}
        }else if(checkval=='sfz,notnull' ){//有效数字 并且不能为空
        	if(val==''){
        		f_alert(this,'不能为空!');
        		flag = false;
        		return false;
        	}else{
        		if(!f_check_IDno(this)){
        		flag = false;
        		return false;
        	}
        	}
        }
	});
	if(flag){
		return true;
	}
}

//控制输入域的长度
function sumcount(obj1,num,count){
	var remark=obj1.value;
	var len=remark.length;
	var obj2 = document.getElementById(num);
	obj2.innerHTML=len;
	if(len>count){
		alert("最多输入"+count+"个字符");
		obj1.value=remark.substring(0,count);
		obj2.innerHTML=count;
		return;
	}
}

//除法函数，用来得到精确的除法结果
		//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
		//调用：accDiv(arg1,arg2)
		//返回值：arg1除以arg2的精确结果
		function accDiv(arg1,arg2){
			var t1=0,t2=0,r1,r2;
			try{t1=arg1.toString().split(".")[1].length}catch(e){}
			try{t2=arg2.toString().split(".")[1].length}catch(e){}
			with(Math){
				r1=Number(arg1.toString().replace(".",""))
				r2=Number(arg2.toString().replace(".",""))
				return Math.round((r1/r2)*pow(10,t2-t1)*10000)/100;
			}
		}
		
		//浮点数加法运算   
		 function FloatAdd(arg1,arg2){   
		   var r1,r2,m;   
		   try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}   
		   try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}   
		   m=Math.pow(10,Math.max(r1,r2))   
		   return (arg1*m+arg2*m)/m   
		  }   
		  
		  String.prototype.replaceAll=function(A,B){
				raRegExp=new RegExp(A,"g");
				return this.replace(raRegExp,B);
			}
		  
		  function tools_open_dialog(url,lurl,rurl,detail){
			var strUrl=url;
			if(lurl!=null&&lurl!=''){
				lurl=lurl.replaceAll('&','@');
				strUrl+="?lUrl="+lurl;
			}
			if(rurl!=null&&rurl!=''){
				rurl=rurl.replaceAll('&','@');
				strUrl+="?rUrl="+rurl;
			}
			var ret_value=showModalDialog(strUrl,window,detail);
			return ret_value;
		}