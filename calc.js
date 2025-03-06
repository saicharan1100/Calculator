var str="";
var result=0;
function display(a){
   if((a==str.charAt(str.length-1)&&(a=='+'||a=='-'||a=='*'||a=='/'||a=='.'))){
alert("Enter Number Or Decimal Or Clear");    
 
   }
   else if(str.charAt(str.length-1)=='('&&(a=='*'||a=='/')){
alert("Enter Number Or Decimal Or Clear");  }
   else if((str.charAt(str.length-1)=='+'||str.charAt(str.length-1)=='-'||str.charAt(str.length-1)=='*'||str.charAt(str.length-1)=='/'||str.charAt(str.length-1)=='(')&&a==')'){
alert("Enter Number Or Decimal Or  Clear");
   }
else if( ( (str.charAt(str.length-1)!=('+')&&str.charAt(str.length-1)!=('-')&&str.charAt(str.length-1)!=('*')&&str.charAt(str.length-1)!=('/')&&str.charAt(str.length-1)!=('.')&&str.charAt(str.length-1)!=(')')&&str.charAt(str.length-1)!=('('))&&(str!="")  )&&(a=='(')             ){
str+='*';
str+='(';
document.getElementById('floatingTextarea').innerHTML=str;

}
   else if(str==""&&(a=='+'||a=='-'||a=='*'||a=='/')){
str+="0"+a;
document.getElementById('floatingTextarea').innerHTML=str;

   }
   else if (( str.charAt(str.length-1) =='+')&&a=='-') {
alert("Enter Number Or Decimal Or  Clear");
   }
  else if( (( str.charAt(str.length-1) =='-')|| ( str.charAt(str.length-1) =='+')|| ( str.charAt(str.length-1) =='/')|| ( str.charAt(str.length-1) =='*')||( str.charAt(str.length-1) =='.')) &&(a=='+'||a=='/'||a=='*'||a=='.')){
   alert("Enter Number Or Enter Decimal Or Enter Clear");
  }
  else if (( str.charAt(str.length-1) =='.')&&(a=='+'||a=='-'||a=='*'||a=='/'||a=='('||a==')')) {
   alert("Enter Number Or Enter Decimal Or Enter Clear");
  }
  else if(( str.charAt(str.length-1) =='.')&&(a=='('||a==')')){
   alert("Enter Number Or Enter Decimal Or Enter Clear");

  }
  else if(( str.charAt(str.length-1) ==')')&&((a=='('))||(( str.charAt(str.length-1) ==')')&&((a!='+')&&(a!='-')&&(a!='*')&&(a!='/')&&(a!=')')&&(a!='=')))){
str+="*"+a;
document.getElementById('floatingTextarea').innerHTML=str;

  }
  else if(a != '='){
      str+=a;
      document.getElementById('floatingTextarea').innerHTML=str;
   }
   else{
      if(str==""){
         document.getElementById('opt').innerHTML=str;
      }
      else{
         try{
     result=eval(str);
      document.getElementById('opt').innerHTML= a+result;
      }
      catch(error){
         document.getElementById('opt').innerHTML= "error";
         alert("Invalid input");
         


      }
      
   }
   }

}
function alclr(){
    str="";
    result=0;
    document.getElementById('floatingTextarea').innerHTML=str;
    document.getElementById('opt').innerHTML= str;


}

function del(){
   str=str.substring(0,str.length-1);
   document.getElementById('floatingTextarea').innerHTML=str;
   document.getElementById('opt').innerHTML= "";

}