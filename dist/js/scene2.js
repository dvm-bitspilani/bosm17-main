// timeline for sceneIn

       var sceneInTimeline = new TimelineLite();
       var torch = $('#sceneIn g[data-name=Torch]');
       var buildings = $('#sceneIn .building');
      
       var fire = $('#sceneIn g[data-name=Fire]');

       var lights = $('#sceneIn g[data-name=Shine]');
       var stadium = $('#sceneIn g[data-name=Stadium]');
       var flood = $('#sceneIn g[data-name=Flood_lights]');
       var ground = $('#sceneIn g[data-name=Ground]');
       var border = $('#sceneIn g[data-name=Border]');
       var people = $('#sceneIn g[data-name=People]');
       var stairs = $('#sceneIn g[data-name=Stairs]');
       var skyEle = $('#sceneIn g[data-name=Sky]');
       
       var background = $('#sceneIn .background');
       
       
       $('#sceneIn').css('backgroundColor', '#232323');

       $('#sceneIn .cloud').addClass('float');

      
       var fadeIn = {autoAlpha:1, yPercent: 0,  ease:Power4.easeOut};
     


       sceneInTimeline.set([skyEle, lights, buildings,stadium, flood, ground, border, people, stairs],{autoAlpha:0, yPercent: 10, transformOrigin:  '50% 50%'})
       .set(fire, {className:"flicker"})
       .set(torch, {className:"+=walk"})
       
       
       sceneInTimeline.to([stadium, flood, ground, border, people, stairs],.2,  {autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to(buildings, .3, fadeIn)
       .to([skyEle, lights], .3, fadeIn)
       .to(torch, .1, fadeIn)
       .to(fire, 0.2, fadeIn)
       // .to([stadium], 4, {scale: 60,yPercent:200, ease: Power4.easeOut})
       // .to(lights,2, {autoAlpha:0}, '-=2')
       // .to([tree],.1,{scale: 5, ease: Power4.easeOut}, '-=1');
       
      
      	
       