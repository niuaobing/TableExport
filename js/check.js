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
  //�ж���Ч���ֵ�������ʽ

var pattern=/^(-  |\+)?\d+(\.\d+)?$/;
//var pattern=/^[-]?([1-9]+\.[0-9]+|0\.[0-9]+|[1-9]+\d*)$/;

//�жϾ���ֵ����1��С��
//        var pattern=/^[-]?([1-9]+\.[0-9]+|)$/;

//�жϾ���ֵС��1��С��
//        var pattern=/^[-]?(0\.[0-9]+)$/;

//�ж�����
//        var pattern=/^[-]?([1-9]+\d*)$/;
        
        if(pattern.test(s))
        {
           return true;
        }
        else 
        {
            f_alert(obj,"������Ч����",title);   
           return false;     
        }        
    }

/** 
* ȡ���ַ������ֽڳ��� 
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
���ܣ���֤���֤�����Ƿ���Ч 
��ʾ��Ϣ��δ������������֤�Ų���ȷ�� 
ʹ�ã�f_check_IDno(obj) 
���أ�bool 
*/ 
function f_check_IDno(obj)    
{     
    var aCity={11:"����",12:"���",13:"�ӱ�",14:"ɽ��",15:"���ɹ�",21:"����",22:"����",23:"������",31:"�Ϻ�",32:"����",33:"�㽭",34:"����",35:"����",36:"����",37:"ɽ��",41:"����",42:"����",43:"����",44:"�㶫",45:"����",46:"����",50:"����",51:"�Ĵ�",52:"����",53:"����",54:"����",61:"����",62:"����",63:"�ຣ",64:"����",65:"�½�",71:"̨��",81:"���",82:"����",91:"����"};    
     
    var iSum = 0;    
    var info = "";    
    var strIDno = obj.value;    
    var idCardLength = strIDno.length;      
    if(!/^\d{17}(\d|x)$/i.test(strIDno)&&!/^\d{15}$/i.test(strIDno))     
    {    
        f_alert(obj,"�Ƿ����֤��");    
        return false;    
    }    
     
    //�ں����������x�൱������10,����ת����a    
    strIDno = strIDno.replace(/x$/i,"a");    
   
    if(aCity[parseInt(strIDno.substr(0,2))]==null)    
    {    
        f_alert(obj,"�Ƿ�����");    
        return false;    
    }    
        
    if (idCardLength==18)    
    {    
        sBirthday=strIDno.substr(6,4)+"-"+Number(strIDno.substr(10,2))+"-"+Number(strIDno.substr(12,2));    
        var d = new Date(sBirthday.replace(/-/g,"/"))    
        if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))    
        {           
            f_alert(obj,"�Ƿ�����");    
            return false;    
        }    
   
        for(var i = 17;i>=0;i --)    
            iSum += (Math.pow(2,i) % 11) * parseInt(strIDno.charAt(17 - i),11);    
   
        if(iSum%11!=1)    
        {    
            f_alert(obj,"�Ƿ����֤��");    
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
            f_alert(obj,"�Ƿ�����");    
            return false;    
        }    
    }    
    return true;     
} 


/* �ж��Ƿ�Ϊ�������� */ 
function f_check_zipcode(obj)    
{    
    if(!f_check_number(obj))    
        return false;    
    if(obj.value.length!=6)    
    {    
        f_alert(obj,"�������볤�ȱ�����6λ");    
        return false;    
    }    
    return true;    
}    


/* 
Ҫ��һ���绰���������֡�"("��")"��"-"���� 
�����绰����Ϊ3��8λ 
��������绰�����а��������ţ���ô����Ϊ��λ����λ 
�ġ�������"("��")"��"-"���������ָ��� 
��;���������ĵ绰�����ʽ�Ƿ���ȷ 
���룺 
strPhone���ַ��� 
���أ� 
���ͨ����֤����true,���򷵻�false 
*/ 
function f_check_phone(obj)     
{    
    var regu =/(^([0][1-9]{2,3}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0][1-9]{2,3}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/;     
    var re = new RegExp(regu);    
    if (re.test( obj.value )) {    
      return true;    
    }    
    f_alert(obj,"��������ȷ�ĵ绰����");    
    return false;    
} 


/* 
��;�������������ֵ�Ƿ����E-Mail��ʽ 
���룺str ������ַ��� 
���أ����ͨ����֤����true,���򷵻�false 
*/ 

function f_check_email(obj){      
    var myReg = /^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;     
    if(myReg.test( obj.value )) return true;     
    f_alert(obj,"������Ϸ��ĵ����ʼ���ַ");    
    return false;     
}    

/* 
��;����������ַ����Ƿ�ֻ�ɺ��֡���ĸ��������� 
���룺 
value���ַ��� 
���أ� 
���ͨ����֤����true,���򷵻�false 
*/ 
function f_check_ZhOrNumOrLett(obj){    //�ж��Ƿ��Ǻ��֡���ĸ���������    
    var regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";       
    var re = new RegExp(regu);    
    if (re.test( obj.value )) {    
      return true;    
    }    
    f_alert(obj,"�����뺺�֡���ĸ������");    
    return false;    
} 


/* 
* �ж��Ƿ�ΪӢ����ĸ�����򷵻�true,���򷵻�false 
*/ 

function f_check_letter(obj)    
{           
    if (/^[A-Za-z]+$/.test( obj.value ))     
    {    
       return true;    
    }     
    f_alert(obj,"������Ӣ����ĸ");    
    return false;    
}    


/* 
��;����������ַ����Ƿ�ֻ�ɺ������ 
���ͨ����֤����true,���򷵻�false 
*/ 
function f_check_zh(obj,tit){    
    if (/^[\u4e00-\u9fa5]+$/.test(obj.value)) {    
      return true;    
    }    
    if(tit==undefined){tit = '';}
    f_alert(obj,tit+"Ӧȫ��Ϊ����");    
    return false;
} 

/* 
* �ж��Ƿ�Ϊ���֣����򷵻�true,���򷵻�false 
*/ 

function f_check_number(obj,title)    
{           
    if (/^\d+$/.test(obj.value))    
    {    
       return true;    
    }     
    else     
    {    
       f_alert(obj,"����������",title);    
       return false;    
    }    
}

//�����Ч��
function checkFormElement(form) {
	var flag = true;
	$("input[check]").each(function(i){
		var checkval = $(this).attr("check");
		var val = $(this).val();
		if(checkval=='number' && val!=''){//��Ч����
        	if(!isNum(this)){
        		flag = false;
        		return false;
        	}
        }else if(checkval=='sfz' && val!=''){//���֤��֤
        	if(!f_check_IDno(this)){
        		flag = false;
        		return false;
        	}
        }else if(checkval=='notnull'){//����Ϊ��
        	if(val==''){
        		 f_alert(this,'����Ϊ��!');
        		flag = false;
        		 return false;
        	}
        }else if(checkval=='number,notnull' ){//��Ч���� ���Ҳ���Ϊ��
        	if(val==''){
        		f_alert(this,'����Ϊ��!');
        		flag = false;
        		 return false;
        	}else{
        		if(!isNum(this)){
        		flag = false;
        		return false;
        	}
        	}
        }else if(checkval=='sfz,notnull' ){//��Ч���� ���Ҳ���Ϊ��
        	if(val==''){
        		f_alert(this,'����Ϊ��!');
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

//����������ĳ���
function sumcount(obj1,num,count){
	var remark=obj1.value;
	var len=remark.length;
	var obj2 = document.getElementById(num);
	obj2.innerHTML=len;
	if(len>count){
		alert("�������"+count+"���ַ�");
		obj1.value=remark.substring(0,count);
		obj2.innerHTML=count;
		return;
	}
}

//���������������õ���ȷ�ĳ������
		//˵����javascript�ĳ�����������������������������ʱ���Ƚ����ԡ�����������ؽ�Ϊ��ȷ�ĳ��������
		//���ã�accDiv(arg1,arg2)
		//����ֵ��arg1����arg2�ľ�ȷ���
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
		
		//�������ӷ�����   
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