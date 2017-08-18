// timeline for sceneIn

       var sceneInTimeline = new TimelineLite();
       var torch = $('#sceneIn g[data-name=Torch]');
       var buildings = $('#sceneIn .building');
      
       var fire = $('#sceneIn g[data-name=Fire]');

       var lights = $('#sceneIn g[data-name=Shine]');
       var stadium = $('#sceneIn g[data-name=Stadium]');
       var flood = $('#sceneIn g[data-name=Flood_Lights]');
       var ground = $('#sceneIn g[data-name=Ground]');
       var border = $('#sceneIn g[data-name=Border]');
       var people = $('#sceneIn g[data-name=People]');
       var stairs = $('#sceneIn g[data-name=Stairs]');
       var skyEle = $('#sceneIn g[data-name=Sky]');
       var ellipse = $('#ellipse');
       var fireGif = $('#gif_fire');
       var ellipse_width = ellipse.css("width");
       var ellipse_pos = ellipse.position();
       var cloudLeft = $('#sceneIn g[data-name=Cloud2]');
       var cloudRight = $('#sceneIn g[data-name=Cloud1]');
       var clouds = [cloudLeft,cloudRight];

       var background = $('#sceneIn .background');
       var torchfire = $('#torchfire')

       var flags = [$('g[data-name=flag1]'),$('g[data-name=flag2]'),$('g[data-name=flag3]'),$('g[data-name=flag4]'),$('g[data-name=flag5]'),$('g[data-name=flag6]'),$('g[data-name=flag7]'),$('g[data-name=flag8]'),$('g[data-name=flag9]'),$('g[data-name=flag10]'),$('g[data-name=flag11]'),$('g[data-name=flag12]')];
      
       var background = $('#sceneIn .background');
       var sceneIn = $('#scene');
       
       $('#sceneIn').css('backgroundColor', '#b0e9ff');

       $('#sceneIn .cloud').addClass('float');

       var fadeIn = {autoAlpha:1, yPercent: 0,  ease:Power4.easeOut};

       sceneInTimeline.set([lights, buildings,stadium, flood, ground, border, people, stairs,torch,fire],{autoAlpha:0, yPercent: 10, transformOrigin:  '50% 50%'})
       .set(fire, {className:"flicker",position:"absolute"})
       .set(torch, {className:"+=walk",position:"absolute"})
       .set(flags,{scale:0})
       .set(sceneIn,{transformOrigin:'48% 50%'})
       .set(flags,{transformOrigin:'0 top'})
       .set(cloudLeft,{xPercent:-150})
       .set(cloudRight,{xPercent:150})
       .set(fireGif,{autoAlpha:0,width:500,zIndex:5,height:"auto",left:ellipse_pos.left,top:"35%",position:"absolute"})
       .set($('.wrapper'),{scale:0})
       sceneInTimeline.to([ground, border],.2,  {autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to(stadium,.1,{autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to(flood,.1,{autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to(people,.2,{autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to([cloudLeft,cloudRight],.3,{xPercent:0})
       .set([cloudLeft,cloudRight],{className:"float"})
       .to([$('g[data-name=flag1]'),$('g[data-name=flag12]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag2]'),$('g[data-name=flag11]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag3]'),$('g[data-name=flag10]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag4]'),$('g[data-name=flag9]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag5]'),$('g[data-name=flag8]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag6]'),$('g[data-name=flag7]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([torch,fire,stairs],.2,{autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to(buildings, .2, fadeIn)
       .to([skyEle, lights], .2, fadeIn)
       .to([torch,fire], 0.1, fadeIn)
       .to([$('g[data-name=ppl000-1]'),$('g[data-name=ppl010-1]')],0.02,{y:15})

       .to([$('g[data-name=ppl000-2]'),$('g[data-name=ppl010-2]')],0.02,{y:15})

       .to([$('g[data-name=ppl000-3]'),$('g[data-name=ppl010-3]')],0.02,{y:15})

       .to([$('g[data-name=ppl000-4]'),$('g[data-name=ppl010-4]')],0.02,{y:15})

       .to([$('g[data-name=ppl000-5]'),$('g[data-name=ppl010-5]')],0.02,{y:15})

       .to([$('g[data-name=ppl000-6]'),$('g[data-name=ppl010-6]')],0.02,{y:15})

       .to([$('g[data-name=ppl001-1]'),$('g[data-name=ppl011-1]')],0.02,{y:15})

       .to([$('g[data-name=ppl001-2]'),$('g[data-name=ppl011-2]')],0.02,{y:15})

       .to([$('g[data-name=ppl001-3]'),$('g[data-name=ppl011-3]')],0.02,{y:15})

       .to([$('g[data-name=ppl001-4]'),$('g[data-name=ppl011-4]')],0.02,{y:15})

       .to([$('g[data-name=ppl001-5]'),$('g[data-name=ppl011-5]')],0.02,{y:15})

       .to([$('g[data-name=ppl001-6]'),$('g[data-name=ppl011-6]')],0.02,{y:15})

       .to([$('g[data-name=ppl002-1]'),$('g[data-name=ppl012-1]')],0.02,{y:15})

       .to([$('g[data-name=ppl002-2]'),$('g[data-name=ppl012-2]')],0.02,{y:15})

       .to([$('g[data-name=ppl002-3]'),$('g[data-name=ppl012-3]')],0.02,{y:15})

       .to([$('g[data-name=ppl002-4]'),$('g[data-name=ppl012-4]')],0.02,{y:15})

       .to([$('g[data-name=ppl002-5]'),$('g[data-name=ppl012-5]')],0.02,{y:15})

       .to([$('g[data-name=ppl002-6]'),$('g[data-name=ppl012-6]')],0.02,{y:15})

       .to([$('g[data-name=ppl100-1]'),$('g[data-name=ppl110-1]')],0.02,{y:15})

       .to([$('g[data-name=ppl100-2]'),$('g[data-name=ppl110-2]')],0.02,{y:15})

       .to([$('g[data-name=ppl100-3]'),$('g[data-name=ppl110-3]')],0.02,{y:15})

       .to([$('g[data-name=ppl100-4]'),$('g[data-name=ppl110-4]')],0.02,{y:15})

       .to([$('g[data-name=ppl100-5]'),$('g[data-name=ppl110-5]')],0.02,{y:15})

       .to([$('g[data-name=ppl100-6]'),$('g[data-name=ppl110-6]')],0.02,{y:15})

       .to([$('g[data-name=ppl101-1]'),$('g[data-name=ppl111-1]')],0.02,{y:15})

       .to([$('g[data-name=ppl101-2]'),$('g[data-name=ppl111-2]')],0.02,{y:15})

       .to([$('g[data-name=ppl101-3]'),$('g[data-name=ppl111-3]')],0.02,{y:15})

       .to([$('g[data-name=ppl101-4]'),$('g[data-name=ppl111-4]')],0.02,{y:15})

       .to([$('g[data-name=ppl101-5]'),$('g[data-name=ppl111-5]')],0.02,{y:15})

       .to([$('g[data-name=ppl101-6]'),$('g[data-name=ppl111-6]')],0.02,{y:15})

       .to([$('g[data-name=ppl102-1]'),$('g[data-name=ppl112-1]')],0.02,{y:15})

       .to([$('g[data-name=ppl102-2]'),$('g[data-name=ppl112-2]')],0.02,{y:15})

       .to([$('g[data-name=ppl102-3]'),$('g[data-name=ppl112-3]')],0.02,{y:15})

       .to([$('g[data-name=ppl102-4]'),$('g[data-name=ppl112-4]')],0.02,{y:15})

       .to([$('g[data-name=ppl102-5]'),$('g[data-name=ppl112-5]')],0.02,{y:15})

       .to([$('g[data-name=ppl102-6]'),$('g[data-name=ppl112-6]')],0.02,{y:15})
       .to(sceneIn,0.2,{scale:1.9})
       .set(scene,{transformOrigin:'40% 25%'})
       .to(sceneIn,0.2,{scale:2.8})
       .to(fireGif,0.2,{autoAlpha:1})
       .set([torch,fire],{transformOrigin:'50% 50%',className:"-=walk"})
       .set(fire,{transformOrigin:'50% 100%',className:'-=flicker'})
       .to([torch,fire],0.4,{yPercent:'180%'})
       .to([torch,fire],2,{scale:0})
       .set([scene,fireGif],{transformOrigin:'50% 50%'})
       .to([scene,fireGif],0.2,{scale:3.5})
       .set($('.wrapper'),{scale:1})
       .set(fireGif,{scale:1})
       