$(document).ready(function(){
	var names = "qweerreerwetttyturwrefsgdfgdg".split('');


	function init(){
		var offset = $('#menu_wrapper .item').width()/2;
		$('#menu_wrapper .slider').css('left', -offset);
		$('#menu_wrapper .selected_text').text(names[0])
		var active = $('#menu_wrapper .active');
		console.log(active.offset().left)
		$('#menu_wrapper .nav_line').css({'left': active.offset().left, 'right': active.offset().left + active.width(), 'width': active.width()})
	}
	init();

	$('#menu_wrapper .item').mouseenter((e)=>{
	
		if($(e.target)!=$('#menu_wrapper .selected')){
			$('#menu_wrapper .selected').removeClass('selected');
			$(e.target).addClass('selected');
			update_progress_bar();
		}
	
		
	}).mouseleave(()=>{
		highlight_middle_element();
	})
	var isDragging = false;
	var oldX = 0;
	
	$('#menu_wrapper').mousewheel((e, delta)=>{
		move_slider(delta)
		highlight_middle_element();
	})

	function move_slider(p){

		var currentLeft = parseInt($('#menu_wrapper .slider').css('left'));
		var newLeft = currentLeft + p;
		var max_left = 0;
		var min_left = -($('#menu_wrapper .slider').width());
		
		var offset = $('#menu_wrapper .item').width()/2;
		max_left -= offset;
		min_left += offset;
		
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
		if(middle!=undefined){
			if($(middle)!=$('#menu_wrapper .selected')){
				$('#menu_wrapper .selected').removeClass('selected');
				$(middle).addClass('selected');
			}
		}else{
			var [info] = $('#menu_wrapper .info').filter((ind, ele)=>{
			
				var left_cond = (offset_bar> $(ele).offset().left);
				var right_cond = (offset_bar < $(ele).offset().left + $(ele).width());
				return (left_cond && right_cond);
			})

			if(info!=undefined){
				$('#menu_wrapper .selected').removeClass('selected');
			}
		}
		update_progress_bar();
	}

	function position_nav_line(old){
		var currEle = old;
		var newEle = $('#menu_wrapper .active');
		var oldLeft = currEle.offset().left;
		var newLeft = newEle.offset().left;
		var oldRight = currEle.offset().left + currEle.width();
		var newRight = newEle.offset().left + newEle.width();

		if(oldLeft> newLeft){
			$('#menu_wrapper .nav_line').animate({'left':newLeft, 'width': oldRight-newLeft},500, function(){
			
				$('#menu_wrapper .nav_line').animate({'right': newRight, 'width': newRight - newLeft});
			})
		}else{
			$('#menu_wrapper .nav_line').animate({'right':newRight, 'width': newRight- oldLeft},500, function(){
					
				$('#menu_wrapper .nav_line').animate({'left': newLeft, 'width': newRight - newLeft});
			})
		}
	}

	function position_item_at_center(item){
		var left = parseInt($('#menu_wrapper .slider').css('left'));
		var offset = item.offset().left + item.width()/2 - $(window).width()/2;
		$('#menu_wrapper .slider').animate({'left': left-offset}, 500, highlight_middle_element);
	}

	$('#menu_wrapper .topics li').click((e)=>{
		
		var old = $('#menu_wrapper .active');
		$('#menu_wrapper .active').removeClass('active');
		$(e.target).addClass('active');
		position_nav_line(old);
		var n = ($('#menu_wrapper .topics li').index($(e.target)));
		var item = ($('#menu_wrapper .slider div[data="begin"]').eq(n))
		position_item_at_center(item);
		update_progress_bar();

		
	})

	function update_progress_bar(){
		var n = $('#menu_wrapper .item').index($('#menu_wrapper .selected'));
		var l = $('#menu_wrapper .item').length;
		var width = Math.round(n/(l-1)) * $(window).width * .95;
		$('#menu_wrapper .line-fill').animate({'width':width});
		$('#menu_wrapper .selected_text').text(names[n]);

	}
	

	
})