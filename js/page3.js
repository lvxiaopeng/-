
//  	var c1=document.getElementsByClassName('c_c1');
//		var c2=document.getElementsByClassName('c_c2');

 if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function (event) {
            var g = document.getElementById('gamma'),
                b = document.getElementById('beta'),
                gamma = event.gamma,
                beta = event.beta;
               
//              if(alpha <= 60 || alpha >= 200){
//              	alert(alpha);
//              }
				if(gamma>=70){
					 ht();//ar c1_1=document.getElementsByClassName('c_c1_1');
//					var c2_1=document.getElementsByClassName('c_c2_1');
					
				};
 
        }, false);
    } else {
        document.querySelector('body').innerHTML = '你的浏览器不支持陀螺仪';
    };
    function ht(){
    	
//  	alert('qqqqqq');
    	var c1=document.getElementById("c1");
    	var c2 = document.getElementById('c2');
    	var c_c1=document.getElementById('c_c1');
    	var c_c2=document.getElementById('c_c2');
    	var cr1=document.getElementById('cr1');
    	var cr2=document.getElementById("cr2");
    	if(c1.style.display="block"){
    		c1.style.display="none";
    		c2.style.display="none";
    	}else{
    		c1.style.display="block";
    		c2.style.display="block";
    	}
		if(c_c1.style.display='none'){
			c_c1.style.display="block";
			c_c2.style.display="block";
		}else{
			c_c1.style.display="none";
			c_c2.style.display="none";
		}
		if(cr1.style.display="block"){
			cr1.style.display='none';
			cr2.style.display='none';
		}
//		alert(c1.style.display);
		p3Timer();
	};
	
	function p3Timer(){
		var timer = 0;
		var p3_r=document.getElementById('p3_r');
		var p3Msg = document.getElementById('p3_message');
		
		setInterval(function(){
			timer += 0.5;
			if(timer == 2){
				p3_r.style.display='block';
			}else if(timer == 5){
				p3Msg.style.display='block';	
			}
			
		},500);
	}
	function showIt3(){
      var p3_h=document.getElementsByClassName("gh")[0];
      var p3_w=document.getElementsByClassName('p3_warn')[0];
      if(p3_h.style.display=="none"){
        p3_h.style.display="block";
      }else{
        p3_h.style.display="none";
      }
    }

					
