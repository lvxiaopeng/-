
var i = 0;
function doit(){
	var p1=document.getElementsByClassName('p1')[0];
	var p0=document.getElementsByClassName('p0')[0];
   i = i + 1;
   var o = document.getElementById('sl');
   o.innerHTML = i.toString()+'%';
   if(i<100) {
    setTimeout('doit()',27);
    p1.style.display='none';
    p0.style.display='block';
  }
   else{
    p0.style.display='none';
    p1.style.display='block';
  }
}


//}
doit();