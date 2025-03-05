var str="";

function display(a){
   if(a != '='){
      str+=a;
      document.getElementById('di').innerHTML=str;
   }
   else{
     
      str+=a;
      document.getElementById('di').innerHTML=str;
      str=str.substring(0,str.length-1);
     
      

      document.getElementById('opt').innerHTML= eval(str);

   }

}

