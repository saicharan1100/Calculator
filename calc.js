document.getElementById('output').innerHTML=0;
let dis="";

function display(a){
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
