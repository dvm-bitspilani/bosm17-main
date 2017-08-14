// timeline for sceneOut
(function(){
       var sceneOutTimeline = new TimelineLite();
       var torch = $('#sceneOut g[data-name=Torch]');
       var buildings = $('#sceneOut .building');
       var bushTree = $('#sceneOut g[data-name=Bushes_Trees]');
       var fire = $('#sceneOut g[data-name=Fire]');
       var lights = $('#sceneOut g[data-name=Shine]');
       var stadium = $('#sceneOut g[data-name=Stadium]');
       var skyEle = $('#sceneOut g[data-name=Sky_Elements]');
       var grass = $('#sceneOut .grass');
       var background = $('#sceneOut .background');
       var carpet = $('#sceneOut .carpet');
       var line_art = $('#sceneOut g[data-name=Line_art] path');
       var sculpture = $('#sceneOut .sculpture');
       var origin_stadium_x = $(window).width()/2 - stadium.offset().left ;
       console.log(origin_stadium_x, $(window).width()/2)
       
       bushTree.each(function(ind, ele){
       	  if(!($(ele).hasClass('bush'))){
       	  	$(ele).addClass('tree');
       	  }
       })

       $('#sceneOut .cloud').addClass('float');

       var tree = $('#sceneOut .tree');
       var fadeIn = {autoAlpha:1, ease:Power4.easeOut, yPercent: 0};
       stadium.css('position', 'relative');


       sceneOutTimeline.set([skyEle, bushTree, torch, fire, lights, buildings, carpet, $('#sceneOut g[data-name=Line_art] rect')],{autoAlpha:0, yPercent: 10, transformOrigin:  '50% 50%'})
       .set(stadium, {transformOrigin: '38.75% 60%'})
       .set(grass[0], {transformOrigin:'50% 50%'})
       .set(grass[1], {transformOrigin: '100% 50%'})
       .set(grass[2], {transformOrigin: '0% 50%'})
       .set(line_art[0], {transformOrigin: '100% 200%'})
       .set(line_art[1], {transformOrigin: origin_stadium_x+ stadium.offset().left - 300+'px 230%'})
       .set(fire, {className:"+=flicker"})
       .set(torch, {className:"+=walk"})
       // .to([grass,background], .01, fadeIn)
       
       sceneOutTimeline.to(buildings, .3, fadeIn)
       .to([skyEle,bushTree, carpet, lights], .3, fadeIn)
       .to(torch, .1, fadeIn)
       .to(fire, 0.2, fadeIn)
       .to([stadium, carpet, grass, line_art, bushTree], 4, {scale: 60,yPercent:200, ease: Power4.easeOut})
       .to(lights,2, {autoAlpha:0}, '-=2')
       .to([tree],.1,{scale: 5, ease: Power4.easeOut}, '-=1');

       window.sceneOutTimeline = sceneOutTimeline;

})(window)      
      
      	
       