$(document).ready(function(){
	function init(){
		var offset = $('#menu_wrapper .item').width()/2;
		$('#menu_wrapper .slider').css('left', -offset);
	}
	init();

	$('#menu_wrapper .item').mouseenter((e)=>{
	
		if($(e.target)!=$('#menu_wrapper .selected')){
			$('#menu_wrapper .selected').removeClass('selected');
			$(e.target).addClass('selected');
		}
	
		
	})

	$('#menu_wrapper').on('DOMscroll',()=>{
		console.log('called')
	})
	$('#menu_wrapper').mousewheel((e, delta)=>{
		move_slider(delta)
		highlight_middle_element();
	})

	function move_slider(p){

		var currentLeft = parseInt($('#menu_wrapper .slider').css('left'));
		var newLeft = currentLeft + p;
		var max_left = -($('#menu_wrapper .item').width()/2);
		var min_left = -($('#menu_wrapper .slider').width() - $('#menu_wrapper .item').width()/2)
		if(newLeft< min_left){
			newLeft = min_left;
		}else if(newLeft> max_left){
			newLeft = max_left;
		}

		$('#menu_wrapper .slider').css('left', newLeft);

		
	}



	function highlight_middle_element(){
		var offset_bar = $('#menu_wrapper .slider-container').offset().left;

		var [middle] = $('#menu_wrapper .item').filter((ind, ele)=>{
			
			var left_cond = (offset_bar> $(ele).offset().left);
			var right_cond = (offset_bar < $(ele).offset().left + $(ele).width());
			return (left_cond && right_cond);
		})
		if(middle!=undefined && $(middle)!=$('#menu_wrapper .selected')){
			$('#menu_wrapper .selected').removeClass('selected');
			$(middle).addClass('selected');
		}
	}
})