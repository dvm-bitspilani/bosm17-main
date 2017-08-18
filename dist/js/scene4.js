(function(){
	var sceneFinalTimeline = new TimelineLite();
	var jersey = $('g[data-name=jersey]'); 
	var trophy = $('g[data-name=Trophy]'); 
	 var fadeIn = {autoAlpha:1, ease:Power4.easeOut, yPercent: 0};
	 console.log(jersey)
	sceneOutTimeline.set([jersey, trophy],{opacity:0});
	sceneOutTimeline.to(jersey,3,{opacity:1})
	.to(trophy, 3, {opacity:1});
	window.sceneFinalTimeline=sceneFinalTimeline
})(window);