function showiT4(){
 		var p4_w=document.getElementsByClassName('p4_warn')[0];
 		var p4_h=document.getElementsByClassName('p4-h')[0];
 		if(p4_h.style.display == 'none'){
 			p4_h.style.display = 'block';
 		}else{
 			p4_h.style.display = 'none';
 		}
 	}
	
	
$('.div').on('touchstart', function(e) {
	if (e.originalEvent.targetTouches.length == 1) {
		console.log('触发')
	}
});

$('.div').on('touchmove', function(e) {
	if (e.originalEvent.targetTouches.length == 1) {
		var touch = e.originalEvent.targetTouches[0];
		var y = touch.pageY,
			x = touch.pageX;
		$(this).css({
			'left'	:	x-15 + 'px',
			'top'	:	y-15.5 + 'px'
		})
		console.log('移动')
	}
});
	
$('.div').on('touchend', function(e) {
		var touch = e.originalEvent.changedTouches[0];
		var y = touch.pageY,
			x = touch.pageX;
		
		var top = parseInt(touch.pageY-15),
					left = parseInt(touch.pageX-15)
		
		var $inputT = $('#input').offset().top,
					$inputR = $('#input').offset().left+$('#input').width(),
					$inputB = $('#input').offset().top+$('#input').height(),
					$inputL = $('#input').offset().left;
		
		if(top>=100&&top<=$inputB&&left>=38&&left<=$inputR){
				$('#input').append($(this))
				var id = $(this).attr('id')
				$(this).attr('id','')
				$(this).attr('id','i'+id)
				$(this).addClass('inputDiv')
		}else{
			$(this).css({
				'left'	:	'23%',
				'top'	:	'11%'
			})
		}
		var $inputL = $('#input').children().length
		var $domClass = []
		if($inputL == 3 ){
			for (var i=0;i<$inputL;i++) {
				var $inputID = $('#input').children()[i].id
				var $inputIDs = $inputID.substring(1)
				$domClass.push($inputIDs)
			}
			$inputIDs = JSON.stringify($domClass)
			var p4_r=document.getElementById("p4Right");
			var p4_f=document.getElementById('p4Flase');
			var p4Msg = document.getElementById('p4_message');
			
			if($inputIDs == '["six","three","zer"]'){
				
				var p4Timer = 0;
				
				setInterval(function(){
					
					p4Timer += 1;
					
					if(p4Timer == 1){
						p4_r.style.display='block';
					}else if(p4Timer == 4){
						p4Msg.style.display='block';
					}
				},500)
				
			}else{
				p4_f.style.display="block";
			}
		}
});