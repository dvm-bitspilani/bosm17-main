// timeline for sceneOut
(function(){
       var sceneOutTimeline = new TimelineLite();
       var scene = $('#sceneOut');
       var torch = $('#sceneOut g[data-name=Torch]');
       var buildings = [$('#sceneOut rect[data-name=left4]'),$('#sceneOut rect[data-name=left3]'), $('#sceneOut rect[data-name=left2]'), $('#sceneOut polygon[data-name=left1]'), $('#sceneOut rect[data-name=right3]'), $('#sceneOut rect[data-name=right2]'), $('#sceneOut polygon[data-name=right1]')];

       // console.log(buildings)
       var clockTower = $('#sceneOut g[data-name=ClockTower]');     // clock tower
       var bushTree = $('#sceneOut g[data-name=Tree]').parent();
       var tree = $('#sceneOut g[data-name=Tree]');
       var fire = $('#sceneOut g[data-name=Fire]');
       var lights = $('#sceneOut .b64b253f-3619-4469-90ac-8ac64780de59').parent();  // data_name Shine? 
       var stadium = $($('#sceneOut g[data-name=Stadium]')[1]);
     
       var skyEle = $('#sceneOut g[data-name=Sky_Elements]');
       var grass = [$('#sceneOut .afc15315-5189-4aae-b657-d4b7606c6ad7'),$('#sceneOut .a676a66d-0142-4a90-8606-74fdb30f0426'), $('#sceneOut .63bdab31-2532-4581-a223-5c5c2963c73f')];
       var background = $('#sceneOut .background');
       var carpet = $('#sceneOut g[data-name=Pathway]');
       var line_art = $('#sceneOut g[data-name=Line_art]'); // data-name Line art
       var lines = $('#sceneOut g[data-name=Line_art] path');
       var sculpture = $('#sceneOut g[data-name=BOSM]');
       // console.log(sculpture);
       var sun = $('#sceneOut g[data-name=Sun]');
       var origin_stadium_x = $(window).width()/2 - stadium.offset().left ;
       var clouds = [$('#sceneOut g[data-name=Cloud1]'), $('#sceneOut g[data-name=Cloud2]'), $('#sceneOut g[data-name=Cloud3]')];
       // console.log(clouds);
       var re = [$('#sceneOut g[data-name=re1]'),$('#sceneOut g[data-name=re2]'),$('#sceneOut g[data-name=re3]'),$('#sceneOut path[data-name=re4]'),$('#sceneOut path[data-name=re5]'),$('#sceneOut path[data-name=re6]'),$('#sceneOut path[data-name=re7]'), $('#sceneOut g[data-name=re8]')]
       re.forEach(function(ele, ind){
       	$(ele).addClass('ele');
       })
       // clouds.forEach(function(ele, ind){
       // 	// console.log($(ele).addClass('cloud'));
       // 	$(ele).addClass('cloud');

       // });
       

       // bushTree.each(function(ind, ele){
       // 	  if($(ele)!= tree){
       // 	  	$(ele).addClass('bush');
       // 	  }
       // })

       var bush = $(bushTree).children().not(tree);
       

       // $('#sceneOut .cloud').addClass('float');
       $('#sceneOut').css('backgroundColor','#b0e9ff');

       // var tree = $('#sceneOut .tree');
       var fadeIn = {autoAlpha:1, ease:Power4.easeOut, yPercent: 0};
      
       var fadeInBuildings = {autoAlpha:.25, ease: Back.easeOut.config(1.7), yPercent: 0};
       var fadeInHorizontal = {autoAlpha:1, ease:Expo.easeOut, xPercent: 0};
       stadium.css('position', 'relative');


       sceneOutTimeline.set([skyEle, torch,bush,  fire, lights, carpet,stadium, grass[0], grass[1], grass[2],tree,  sun,re[0], re[1], re[2],line_art, re[3], re[4] ,re[5], re[6], re[7], sculpture, $('#sceneOut g[data-name=Line_art] rect')],{autoAlpha:0, yPercent: 10, transformOrigin:  '50% 50%'})
       .set(clouds.slice(-2), {autoAlpha:0, xPercent: 100, transformOrigin:  '50% 50%'})
       .set(clouds[0], {autoAlpha:0, xPercent: -100, transformOrigin:  '50% 50%'})
       .set([ buildings[0], buildings[1], buildings[2], buildings[3],buildings[4], buildings[5],buildings[6],clockTower], {autoAlpha:0, yPercent: 100, transformOrigin:  '50% 50%'})
       // .set(stadium, {transformOrigin: '48% 60%'})
       .set(stadium.parent(), {transformOrigin: "38.5% 50%"})
       .set(fire, {className:"+=flicker"})
       .set(torch, {className:"+=walk"})
       .set(tree, {transformOrigin: "100% 50%"})
       // .set(scene, {transformOrigin: "50% 50%"})
       .set(grass[0], {transformOrigin: "50% 50%"})
       .set(grass[1], {transformOrigin: "100% 50%"})
       .set(grass[2], {transformOrigin: "0% 50%"})
       .set(re, {className: "+=ele"})
       .set(lines[0], {transformOrigin: "100% 200%"})
       .set(lines[1], {transformOrigin: "0% 400%"})
       
       .set(bushTree, {transformOrigin: "50% 0%"})
       // .set(sculpture,{transformOrigin:"-500% 50%"})
       
       sceneOutTimeline
       .to([grass[0], grass[1], grass[2], line_art, stadium, tree, bush], 1, fadeIn)
       .to(sun, 1, fadeIn)
       .to(clouds, 1, fadeInHorizontal)
       .set(clouds, {className: "+=cloud"})
       
       // .to(sculpture, 1, fadeIn)
       .to(re, 2, fadeIn, "-=1")
       .to([buildings[0], buildings[4],  buildings[3]], 1, fadeInBuildings)
       .to([buildings[6],buildings[5], buildings[1]], 1, fadeInBuildings)
       .to(sculpture, 1, fadeIn)
       .to(buildings[2], 1, fadeInBuildings)
       
       .to(clockTower,1, fadeInBuildings)
       .to(lights, 1,fadeIn)
       
       .to([torch, fire], 2, fadeIn)
       .to(carpet, 1, fadeIn)
       .to([stadium.parent(), grass[0], grass[1], grass[2], lines[0], lines[1],carpet, sculpture], 2, {scale: 90,yPercent:10, xPercent: 0, ease: Power4.easeIn})
       .to(lights, 1,{autoAlpha: 0}, "-=2")
       .to([bushTree],1, {scale: 90,yPercent:20, xPercent: 0, ease:  Power4.easeIn}, "-=1.7")
       .to(tree, 2, {xPercent: -50,yPercent: -1000,  ease: Power4.easeIn},"-=2")
       .to(sculpture, 2, {xPercent: 180}, "-=1.5")
       
      	console.log(stadium)
      


       window.sceneOutTimeline = sceneOutTimeline;

})(window)      
      
      	
       