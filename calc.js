var str="";

function display(a){
   if((a==str.charAt(str.length-1)&&(a=='+'||a=='-'||a=='*'||a=='/'||a=='('||a==')'||a=='.'))){
      document.getElementById('floatingTextarea').innerHTML=str;
   }
  else if( (( str.charAt(str.length-1) =='-')|| ( str.charAt(str.length-1) =='+')|| ( str.charAt(str.length-1) =='/')|| ( str.charAt(str.length-1) =='*')||( str.charAt(str.length-1) =='(')||( str.charAt(str.length-1) ==')')||( str.charAt(str.length-1) =='.')) &&(a=='+'||a=='-'||a=='/'||a=='*'||a=='.'||a=='('||a==')')){
   document.getElementById('floatingTextarea').innerHTML=str;
  }
  else if(a != '='){
      str+=a;
      document.getElementById('floatingTextarea').innerHTML=str;
   }
   else{
     
      document.getElementById('opt').innerHTML= a+eval(str);

   }

}
function alclr(){
    str=""
    document.getElementById('floatingTextarea').innerHTML=str;
    document.getElementById('opt').innerHTML= str;


}

function del(){
   str=str.substring(0,str.length-1);
   document.getElementById('floatingTextarea').innerHTML=str;

}