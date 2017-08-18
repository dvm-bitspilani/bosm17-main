(function(){
	var scrollToBottom = false;
	var curr = 0;
	$(document).ready(function(){
		var scenes = $('.scrollmagic-pin-spacer');
		console.log(scenes.length)
		var length = scenes.length;

		window.scrollTo(0, 0);
		scrollScene(curr, scenes);
		
	});

	function scrollScene(ind, scenes){
		
		if(scrollToBottom || ind > scenes.length-1){console.log("!!!");return;}
		console.log('scroll', ind);

		if(ind == 0){
			window.scrollTo(0, 0);
		}
		var n = $(scenes[ind]).parent().children().index($(scenes[ind]))
		var next = $($(scenes[0]).siblings()[n])
		var bottom = next.offset().top ;
		var height = $(window).height();

		console.log($(scenes[ind]).offset().top,$(scenes[ind]).height() ,height)
		$('html, body').animate({
		        scrollTop: (bottom - height)
		    }, 20000);
		setTimeout(function(){
			changeScene(ind, scenes);
		}, 20000);
	}

	function changeScene(ind, scenes){
		console.log('change', ind);
		if(scrollToBottom || ind>(scenes.length-1))return;

		var n = $(scenes[ind]).parent().children().index($(scenes[ind]))
		var next = $($(scenes[0]).siblings()[n])
		var bottom = next.offset().top;
		console.log(next)
		$('html, body').animate({
		        scrollTop: bottom
		    },1); 
		    
		setTimeout(function(){
					
		    		scrollScene(ind+1, scenes);
		    		curr++;
		    		updateBottom();
		    	},1);
		
	}

	$('#bottom').click(()=>{
		scrollToBottom = true;
		var final = $('#sceneFinal');
		$('html, body').stop(true, false);
		window.scrollTo(0,final.offset().top);
		curr = scenes.length ;
		updateBottom();
	})

	function updateBottom(){
		if(curr == $('.scrollmagic-pin-spacer').length - 1){
			$('#bottom').hide();
		}else{
			$('#bottom').show();
		}
	}

	
})();