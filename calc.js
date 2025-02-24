document.getElementById('output').innerHTML="0";
let dis="";

function display(a){
   dis+=a;
   document.getElementById('output').innerHTML=dis;
}
function allClear(){
     dis="";
     document.getElementById('output').innerHTML=0;

}
function remlst(){
 dis= dis.substring(0,dis.length-1);
 document.getElementById('output').innerHTML=dis;
}
