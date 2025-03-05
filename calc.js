var str="";

function display(a){
   if(a != '='){
      str+=a;
      document.getElementById('exampleFormControlTextarea1').innerHTML=str;
   }
   else{
     
      document.getElementById('opt').innerHTML= a+eval(str);

   }

}

