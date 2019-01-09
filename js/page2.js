window.onload = function(){
		ion.sound({
    sounds: [
    	{name: "bgm"},
        {name: "car"},
        {name: "gz"},
    ],
    path: "music/",
    preload: true,
    volume: 1.0
	});
	 ion.sound.play("car");	
	}		
		
		
    function showIt2(){
    	  var p2_w=document.getElementsByClassName('p2_warn')[0];
      var p2_h=document.getElementsByClassName("p1_h1")[0];
      if(p2_h.style.display=="none"){
        p2_h.style.display="block";
      }else{
        p2_h.style.display="none";
      }
    }
if(window.DevicaOrientationEvent){
  window.addEventListener('deviceorientation',function (event){
    	var a=documnet.getElementById('alpha'),
    		  b=documnet.getElementById('beta'),
    			g=documnet.getElementById('gamma'),
    			alpha=event.alpha,
    			beta=event.beta,
    			gamma=event.gamma;
  },false);
}
var currhandle=0;//判断操作是否完成
if(window.DeviceMotionEvent){
  var speed = 15;  
  var x = y = z = lastX = lastY = lastZ = 0;  
  window.addEventListener('devicemotion', function(){  
    var acceleration =event.accelerationIncludingGravity;  
        x = acceleration.x;  
        y = acceleration.y;  
        z = acceleration.z;
  if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed+10) {  
    if(currhandle==0){
      //alert('判定');
      hq();
      //摇一摇事件触发后执行操作
      currhandle=1;
    }	
  }  
  lastX = x;  
  lastY = y;  
  lastZ = z;
}, true);  
}else{
  alert("您的设备不支持感应设备");    
}
function hq() {
	
	var b6 = document.getElementById('boxs6');
	var b5 = document.getElementById('boxs5');
	var b4 = document.getElementById('boxs4');
	var b3 = document.getElementById('boxs3');
	var b2 = document.getElementById('boxs2');
	var b1 = document.getElementById('boxs1');
	var b0 = document.getElementById('boxs0');
	var cp = document.getElementById('c_p');
	b6.style.display = 'block';
	b5.style.display = 'block';
	b4.style.display = 'block';
	b3.style.display = 'block';
	b2.style.display = 'block';
	b1.style.display = 'block';
	b0.style.display = 'block';
	cp.style.display = 'block';
	
	right();
}
function right(){
	var r=document.getElementById('Right');
	var Msg = document.getElementById('message');
	
	
	var Timer = 0;
	
	setInterval(function(){
		
		Timer += 0.5;
		
		if(Timer == 1){
			r.style.display="block";
		}else if(p2Timer == 3){
			Msg.style.display='block';
		}
		
	},500);
	
}