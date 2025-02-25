document.getElementById('output').innerHTML=0;
var dis="";
var cal="";
var temp=0,final=0;
var tempop='';
var finalstr="";
var c1=0;
function display(a){
if((a!='+')&&(a!='-')&&(a!='/')&&(a!='*')&&(a!='=')){
cal+=a;
}
else {


if(a=='+'){
   if(c1==0){
      tempop=a;
      final=Number(cal);
      cal="";
++c1;
   }
   else{
if(cal.length!=0){
   if(tempop=='-'){
      tempop=a;
      temp=Number(cal);
      sub(temp);
   cal="";
   }
   else{
      tempop=a;
      temp=Number(cal);
      add(temp);
   cal="";
   }
}
}
}
  
else if(a=='-'){
   if(c1==0){
      tempop=a;
      final=Number(cal);
      cal="";
++c1;
   }
   else{
      if(cal.length!=0){
         if(tempop=='+'){
            tempop=a;
            temp=Number(cal);
            add(temp);
         cal="";
         }
         else{
   tempop=a;
temp=Number(cal);
   sub(temp);
   cal="";}}}
}

else{
   if(tempop=='+'){
      temp=Number(cal);
      add(temp);
      cal="";

   }

  else if(tempop=='-'){
      temp=Number(cal);
      sub(temp);
      cal="";

   }
console.log(final);
cal=final;
   document.getElementById('Moutput').innerHTML=cal;

}


}


   dis+=a;
   document.getElementById('output').innerHTML=dis;
}
function allClear(){
   if(dis.length!=0){
      dis="";
      document.getElementById('output').innerHTML=0;
   }
    

}
function remlst(){
   if(dis.length==1){
      dis="";
      document.getElementById('output').innerHTML=0;

   }
   else if(dis==""){
      document.getElementById('output').innerHTML=0;

   }
   else{
      dis= dis.substring(0,dis.length-1);
      document.getElementById('output').innerHTML=dis;
   }
 
}


function add(x){
final+=x;
}


function sub(x){
   final-=x;
   }