// timeline for sceneIn

       var sceneInTimeline = new TimelineLite();
       var torch = $('#sceneIn g[data-name=Torch]');
       var buildings = $('#buildings');
      
       var fire = $('#sceneIn g[data-name=Fire]');

       var lights = $('#sceneIn g[data-name=Shine]');
       var stadium = $('#sceneIn g[data-name=Stadium]');
       var flood = $('#sceneIn g[data-name=Flood_Lights]');
       var ground = $('#sceneIn g[data-name=Ground]');
       var border = $('#sceneIn g[data-name=Border]');
       var boards =$('#sceneIn g[data-name=Boards');
       var people = $('#sceneIn g[data-name=People]');
       var stairs = $('#sceneIn g[data-name=Stairs]');
       var skyEle = $('#skyele');
       var ellipse = $('#ellipse');
       var fireGif = $('#gif_fire');
       var ellipse_width = ellipse.css("width");
       var ellipse_pos = ellipse.position();
       var cloudLeft = $('#sceneIn g[data-name=Cloud2]');
       var cloudRight = $('#cloudandsun');
       var clouds = [cloudLeft,cloudRight];

       var background = $('#sceneIn .background');
       var torchfire = $('#torchfire')

       var flags = [$('g[data-name=flag1]'),$('g[data-name=flag2]'),$('g[data-name=flag3]'),$('g[data-name=flag4]'),$('g[data-name=flag5]'),$('g[data-name=flag6]'),$('g[data-name=flag7]'),$('g[data-name=flag8]'),$('g[data-name=flag9]'),$('g[data-name=flag10]'),$('g[data-name=flag11]'),$('g[data-name=flag12]')];
      
       var background = $('#sceneIn .background');
       var sceneIn = $('#scene');
       
       $('#sceneIn').css('backgroundColor', '#b0e9ff');

       $('#sceneIn .cloud').addClass('float');

       var fadeIn = {autoAlpha:1, yPercent: 0,  ease:Power4.easeOut};

       sceneInTimeline.set([lights, buildings,stadium, flood,boards, ground, border,skyEle, people, stairs,torch,fire],{autoAlpha:0, yPercent: 10, transformOrigin:  '50% 50%'})
       .set(fire, {className:"flicker",position:"absolute"})
       .set(torch, {className:"+=walk",position:"absolute"})
       .set(flags,{scale:0})
       .set(sceneIn,{transformOrigin:'48% 50%'})
       .set(flags,{transformOrigin:'0 top'})
       .set(cloudLeft,{xPercent:-150})
       .set(cloudRight,{xPercent:150})
       .set(fireGif,{autoAlpha:0,zIndex:2,left:ellipse.position().left-100,top:"8vh",position:"absolute"})
       .set($('.wrapper'),{scale:0})

       sceneInTimeline.to([ground, border],.2,  {autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to(stadium,.1,{autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to([buildings,skyEle], .2, fadeIn)
       .to(flood,.1,{autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to(people,.2,{autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to(boards,.2,{autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to([cloudLeft,cloudRight],.3,{xPercent:0})
       .set([cloudLeft,cloudRight,skyEle],{className:"+=cloud"})
       .to([$('g[data-name=flag1]'),$('g[data-name=flag12]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag2]'),$('g[data-name=flag11]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag3]'),$('g[data-name=flag10]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag4]'),$('g[data-name=flag9]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag5]'),$('g[data-name=flag8]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([$('g[data-name=flag6]'),$('g[data-name=flag7]')],.1,{scale:1, ease:Back.easeOut.config( 1.7)})
       .to([torch,fire,stairs],.2,{autoAlpha:1, yPercent: 0,  ease:Elastic.easeOut.config(1, 0.3)})
       .to(lights, .2, fadeIn)
       .to([torch,fire], 0.1, fadeIn);

       var count = 1;
       while(count != 4){
       
              sceneInTimeline.to([$('g[data-name=ppl000-'+count+']'),$('g[data-name=ppl000-'+(count+1)+']'),$('g[data-name=ppl000-'+(count+2)+']'),$('g[data-name=ppl010-'+count+']'),$('g[data-name=ppl010-'+(count+1)+']'),$('g[data-name=ppl010-'+(count+2)+']')],0.03,{y:15})
              if (count > 1) {
                     sceneInTimeline.to([$('g[data-name=ppl000-'+(count-1)+']'),$('g[data-name=ppl010-'+(count-1)+']')],0.03,{y:0})
              }
              console.log('count')
              count++;
       }

       var count = 1;
       while(count != 4){
       
              sceneInTimeline.to([$('g[data-name=ppl001-'+count+']'),$('g[data-name=ppl001-'+(count+1)+']'),$('g[data-name=ppl001-'+(count+2)+']'),$('g[data-name=ppl011-'+count+']'),$('g[data-name=ppl011-'+(count+1)+']'),$('g[data-name=ppl011-'+(count+2)+']')],0.03,{y:15})
              if (count > 1) {
                     sceneInTimeline.to([$('g[data-name=ppl001-'+(count-1)+']'),$('g[data-name=ppl011-'+(count-1)+']')],0.03,{y:0})
              }
              console.log('count')
              count++;
       }

       var count = 1;
       while(count != 4){
       
              sceneInTimeline.to([$('g[data-name=ppl002-'+count+']'),$('g[data-name=ppl002-'+(count+1)+']'),$('g[data-name=ppl002-'+(count+2)+']'),$('g[data-name=ppl012-'+count+']'),$('g[data-name=ppl012-'+(count+1)+']'),$('g[data-name=ppl012-'+(count+2)+']')],0.03,{y:15})
              if (count > 1) {
                     sceneInTimeline.to([$('g[data-name=ppl002-'+(count-1)+']'),$('g[data-name=ppl012-'+(count-1)+']')],0.03,{y:0})
              }
              console.log('count')
              count++;
       }


       var count = 1;
       while(count != 4){
       
              sceneInTimeline.to([$('g[data-name=ppl100-'+count+']'),$('g[data-name=ppl100-'+(count+1)+']'),$('g[data-name=ppl100-'+(count+2)+']'),$('g[data-name=ppl110-'+count+']'),$('g[data-name=ppl110-'+(count+1)+']'),$('g[data-name=ppl110-'+(count+2)+']')],0.03,{y:15})
              if (count > 1) {
                     sceneInTimeline.to([$('g[data-name=ppl100-'+(count-1)+']'),$('g[data-name=ppl110-'+(count-1)+']')],0.03,{y:0})
              }
              console.log('count')
              count++;
       }

       var count = 1;
       while(count != 4){
       
              sceneInTimeline.to([$('g[data-name=ppl101-'+count+']'),$('g[data-name=ppl101-'+(count+1)+']'),$('g[data-name=ppl101-'+(count+2)+']'),$('g[data-name=ppl111-'+count+']'),$('g[data-name=ppl111-'+(count+1)+']'),$('g[data-name=ppl111-'+(count+2)+']')],0.03,{y:15})
              if (count > 1) {
                     sceneInTimeline.to([$('g[data-name=ppl101-'+(count-1)+']'),$('g[data-name=ppl111-'+(count-1)+']')],0.03,{y:0})
              }
              console.log('count')
              count++;
       }

       var count = 1;
       while(count != 4){
       
              sceneInTimeline.to([$('g[data-name=ppl102-'+count+']'),$('g[data-name=ppl102-'+(count+1)+']'),$('g[data-name=ppl102-'+(count+2)+']'),$('g[data-name=ppl112-'+count+']'),$('g[data-name=ppl112-'+(count+1)+']'),$('g[data-name=ppl112-'+(count+2)+']')],0.03,{y:15})
              if (count > 1) {
                     sceneInTimeline.to([$('g[data-name=ppl102-'+(count-1)+']'),$('g[data-name=ppl112-'+(count-1)+']')],0.03,{y:0})
              }
              console.log('count')
              count++;
       }
       sceneInTimeline.to(sceneIn,0.2,{scale:1.9})
       .set(scene,{transformOrigin:'40% 25%'})
       .to(sceneIn,0.2,{scale:2.8})
       .to(fireGif,0.1,{autoAlpha:1})
       .set([torch,fire],{transformOrigin:'50% 50%',className:"-=walk"})
       .set(fire,{transformOrigin:'50% 100%',className:'-=flicker'})
       .to([torch,fire],0.4,{yPercent:'180%'})
       .to([torch,fire],2,{scale:0})
       .set([scene,fireGif],{transformOrigin:'50% 50%'})
       .to($('#sceneIn'),0.2,{scale:3.5})
       .set($('.wrapper'),{scale:1})
       .set(fireGif,{scale:1})
       