$(window).keydown(function(e){
	if(typeof(move_by_key) != "undefined")
		if(e.keyCode == 37)
			move_by_key(-1);
		else if(e.keyCode == 39)
			move_by_key(1);
});

function initMenu(){
	// names array
	var names = "Atheletics;Badminton;Basketball;Football;Cricket;Hockey;Tennis;Table-Tennis;Squash;Swimming;PowerLifting;Taekwondo;Volleyball;Chess;Carrom;Snooker;Rahul Subramanium;Sumit Anand;Contact Us".split(';');
	var large = ($(window).width()>800)
	function init(){
		//initial positioning of slider and nav line and adding text-content
		var offset = $('.lightbox #menu_wrapper .item').width()/2;
		if(large)
			$('.lightbox #menu_wrapper .slider').css('left', -offset);
		
		$('.lightbox #menu_wrapper .selected_text').attr('data', names[0])
		$('.lightbox #menu_wrapper .selected_text').text(names[0])
		var active = $('.lightbox #menu_wrapper .active');
		if(!large){
			$('.lightbox #menu_wrapper .slider').prepend("<div class='info'>SPORTS</div>");
			$('.lightbox #menu_wrapper .selected').removeClass('selected')
		}

		$('.lightbox #menu_wrapper .nav_line').css({'left': active.offset().left, 'right': active.offset().left + active.width(), 'width': active.width()})
	}
	init();


	if(large){
	// hover effect
	$('.lightbox #menu_wrapper .item').mouseenter(function (e){

		if($(e.target)!=$('.lightbox #menu_wrapper .selected')){
			$('.lightbox #menu_wrapper .selected').removeClass('selected');
			$(e.target).addClass('selected');
			update_progress_bar();
		}


	}).mouseleave(function (){
		highlight_middle_element();
	})

	// scroll effect
	$('.lightbox #menu_wrapper').mousewheel(function(e, delta) {
		move_slider(delta)
		highlight_middle_element();
		update_nav_bar();
		e.preventDefault();
	})
	
	window.move_by_key = function (e) {
		var width = parseInt($('.lightbox #menu_wrapper .item').width());
		var minLeft = -1 * parseInt($('.lightbox #menu_wrapper .slider').width());
		var move = -1*e*width;
		var currentLeft = parseInt($('.lightbox #menu_wrapper .slider').css('left'));
		var newLeft = currentLeft + move;

		if(newLeft < minLeft) newLeft = minLeft;
		else if(newLeft > 0) newLeft = 0;

		if(newLeft < -1.5*width)
			$('.bg_text').fadeOut();
		else if(newLeft > -1.5*width)
			$('.bg_text').fadeIn();

		$('.lightbox #menu_wrapper .slider').animate(
			{'left': newLeft},
			100,
			function(){
				highlight_middle_element();
				update_nav_bar();
			}
		);
	}

	}
	// moving slider's left attribute
	function move_slider(p){

		var currentLeft = parseInt($('.lightbox #menu_wrapper .slider').css('left'));
		var newLeft = currentLeft + p;
		var max_left = 0;
		var min_left = -($('.lightbox #menu_wrapper .slider').width());

		var offset = $('.lightbox #menu_wrapper .item').width()/2;
		max_left -= offset;
		min_left += offset;

		if(newLeft< min_left){
			newLeft = min_left;
		}else if(newLeft> max_left){
			newLeft = max_left;
		}

		if(newLeft < -3*offset)
			$('.bg_text').fadeOut();
		else if(newLeft > -3*offset)
			$('.bg_text').fadeIn();

		$('.lightbox #menu_wrapper .slider').css('left', newLeft);


	}


	// finding ele in the middle and highlighiting
	function highlight_middle_element(){
		var offset_bar = $('.lightbox #menu_wrapper .slider-container').offset().left;

		//serching among items
		var middle = $('.lightbox #menu_wrapper .item').filter(function(ind, ele){

			var left_cond = (offset_bar> $(ele).offset().left);
			var right_cond = (offset_bar < $(ele).offset().left + $(ele).width());
			return (left_cond && right_cond);
		})
		if(middle!=undefined){
			if($(middle)!=$('.lightbox #menu_wrapper .selected')){
				$('.lightbox #menu_wrapper .selected').removeClass('selected');
				$(middle).addClass('selected');
				// $(middle).parent('.item').addClass('selected');
			}
		}else{
			//serching among info bars
			var [info] = $('.lightbox #menu_wrapper .info').filter((ind, ele)=>{

				var left_cond = (offset_bar> $(ele).offset().left);
				var right_cond = (offset_bar < $(ele).offset().left + $(ele).width());
				return (left_cond && right_cond);
			})

			if(info!=undefined){
				$('.lightbox #menu_wrapper .selected').removeClass('selected');
			}
		}
		update_progress_bar();
	}
	var old = $('#menu_wrapper .active');
	var active = $('#menu_wrapper .active');
	//positioning of top line
	function position_nav_line(old){
		var currEle = old;
		var newEle = active;
		var oldLeft = currEle.offset().left;
		var newLeft = newEle.offset().left;
		var oldRight = currEle.offset().left + currEle.width();
		var newRight = newEle.offset().left + newEle.width();
		console.log(old[0], active[0])

		if(oldLeft> newLeft){
			$('.lightbox #menu_wrapper .nav_line').animate({'left':newLeft, 'width': oldRight-newLeft},500, function(){

				$('.lightbox #menu_wrapper .nav_line').animate({'right': newRight, 'width': newRight - newLeft});
			})
		}else{
			$('.lightbox #menu_wrapper .nav_line').animate({'right':newRight, 'width': newRight- oldLeft},500, function(){

				$('.lightbox #menu_wrapper .nav_line').animate({'left': newLeft, 'width': newRight - newLeft});
			})
		}
	}

	//position an item at the center
	function position_item_at_center(item){
		var left = parseInt($('.lightbox #menu_wrapper .slider').css('left'));
		var offset = item.offset().left + item.width()/2 - $(window).width()/2;
		$('.lightbox #menu_wrapper .slider').animate({'left': left-offset}, 500, highlight_middle_element);
	}

	$('.lightbox #menu_wrapper .topics li').click(function (e) {

		old = $('.lightbox #menu_wrapper .active');
		$('.lightbox #menu_wrapper .active').removeClass('active');
		$(e.target).addClass('active');
		active = $(e.target);
		position_nav_line(old);
		var n = ($('.lightbox #menu_wrapper .topics li').index($(e.target)));
		var item = ($('.lightbox #menu_wrapper .slider div[data="begin"]').eq(n))
		if(large){
			position_item_at_center(item);
			update_progress_bar();
		}else{
			var info = $($('.lightbox #menu_wrapper .info')[n]);
			var start = $($('.lightbox #menu_wrapper .info')[0])
			// console.log(info)
			 $('.lightbox #menu_wrapper .slider').animate({
       			 scrollTop: info.offset().top - start.offset().top
   			 }, 2000)
		}

	})

	// update progress bar length
	function update_progress_bar(){
		var n = $('.lightbox #menu_wrapper .item').index($('.lightbox #menu_wrapper .selected'));

		var l = $('.lightbox #menu_wrapper .item').length;

		var width = Math.round((n/(l-1))* $(window).width() * .95);


		if(n!=-1 &&  $('.lightbox #menu_wrapper .selected_text').attr('data') !== names[n] ){
			$('.lightbox #menu_wrapper .selected_text').attr('data',names[n])
			$('.lightbox #menu_wrapper .selected_text').fadeOut(400,function(){
				$('.lightbox #menu_wrapper .selected_text').text(names[n]);
				$('.lightbox #menu_wrapper .selected_text').fadeIn(200);
			} );


		}


		if(n!= -1){
			$('.lightbox #menu_wrapper .line-fill').css({'width': width+'px'})
		}



	}

	// update the active element on nav bar according to scroll position
	function update_nav_bar(){

		var bar = $(window).width()/2;
		var n = $('.lightbox #menu_wrapper .info').filter(function(ind, ele){
			return $(ele).offset().left + $(ele).width()/2 < bar;
		}).length;
		// console.log(n + " info");
		
		if($($('.lightbox #menu_wrapper .topics li').eq(n)[0]).text() != active.text()){
			old = active;
			$('.lightbox #menu_wrapper .active').attr("class", "");
			$('.lightbox #menu_wrapper .topics li').eq(n).attr("class",'active');
			active = $('.lightbox #menu_wrapper .topics li').eq(n);
			position_nav_line(old);
		}
	}


}
