(function(){
	var scrollToBottom = false;
	var curr = 0;
	window.onload = function(){
		var scenes = $('.scrollmagic-pin-spacer');
		console.log(scenes)
		var length = scenes.length;
	

		// for(var i = 0; i<length-1; i++){
		// 	var curr = $(scenes[i]).height();
		// 	var next = $(scenes[i+1]).offset().top;
		// 	console.log(next)
		// 	$('html, body').animate({
		//         scrollTop: (next - curr)
		//     }, 10000, function(){
		//     	$('html, body').css({
		//         	scrollTop: next
		//      	})
		//     });
		// }

		window.scrollTo(0, 0);
		scrollScene(curr, scenes);
	}
	function scrollScene(ind, scenes){
		
		if(scrollToBottom || ind > scenes.length-2)return;
		console.log('scroll', ind);
		var bottom = $(scenes[ind+1]).offset().top;
		var height = $(window).height();
		$('html, body').animate({
		        scrollTop: (bottom - height)
		    }, 20000);
		setTimeout(function(){
			changeScene(ind, scenes);
		}, 20000);
	}

	function changeScene(ind, scenes){
		console.log('change', ind);
		if(scrollToBottom || ind>(scenes.length-2))return;

		var next = $(scenes[ind+1]).offset().top;
		
		$('html, body').animate({
		        scrollTop: next
		    },1); 
		    
		setTimeout(function(){
		    		scrollScene(ind+1, scenes);
		    		curr++;
		    		updateBottom();
		    	},1);
		
	}

	$('#bottom').click(()=>{
		scrollToBottom = true;
		var scenes = $('.scrollmagic-pin-spacer');
		console.log(curr);
		$('html, body').stop(true, false);
		window.scrollTo(0,$(scenes[scenes.length - 1]).offset().top);
		curr = scenes.length - 1;
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