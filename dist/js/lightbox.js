var lightboxes = {
  "sports": {
    "basketball": {
      "image": "icons/basketball.png",
      "bcapt": "Vishal Verma",
      "bcno": "8146675797",
      "gcapt": "Mitali Jain",
      "gcno": "7877111996",
      "mplayers": "12",
      "pdf": ""
    },
    "chess": {
      "image": "icons/chess.png",
      "mplayers": "5 (classical: 4 + 1 reserve), 5 (Blitz: 4 + 1 reserve), 4 (Problem Solving)",
      "capt": "Simantini",
      "cno": "9422729502",
      "pdf": ""
    },
    "cricket": {
      "image": "icons/cricket.png",
      "bcapt": "Sri Harsha",
      "bcno": "8058733360",
      "mplayers": "15",
      "pdf": ""
    },
    "powerlifting": {
      "image": "icons/power-lift.png",
      "mplayers": " - ",
      "capt": "Satrajit Nath",
      "cno": "8860549691",
      "pdf": ""
    },
    "athletics": {
      "image": "icons/athletics.png",
      "bcapt": "Utkarsh Vashishtha",
      "bcno": "9871483169",
      "gcapt": "Harshita Verma",
      "gcno": "7891055201",
      "mplayers": " - ",
      "pdf": "",
      "link":"https://www.google.com"
    },
    "badminton": {
      "image": "icons/badminton.png",
      "bcapt": "Aman Agarwal",
      "bcno": "9928066227",
      "gcapt": "M Mahitha",
      "gcno": "7073606977",
      "mplayers": " 4 ",
      "pdf": ""
    },
    "hockey": {
      "image": "icons/hockey.png",
      "bcapt": "Prashant Rai",
      "bcno": "8003359586",
      "mplayers": " - ",
      "pdf": ""
    },
    "squash": {
      "image": "icons/squash.png",
      "bcapt": "Shreyas Verma",
      "bcno": "9987295874",
      "mplayers": "3+1",
      "pdf": ""
    },
    "swimming": {
      "image": "icons/swimming.png",
      "bcapt": "Prayag Katta",
      "bcno": "8058967899",
      "gcapt": "Mrudula",
      "gcno": "8826034708",
      "mplayers": " - ",
      "pdf": ""
    },
    "tabletennis": {
      "image": "icons/table-tennis.png",
      "bcapt": "Neel Joshi",
      "bcno": "9561643458",
      "gcapt": "Saima Rashid",
      "gcno": "9983089614",
      "mplayers": " 5",
      "pdf": ""
    },
    "tennis": {
      "image": "icons/tennis.png",
      "bcapt": "Surakshit Soni",
      "bcno": "9001436050",
      "gcapt": "Saniya Dasot",
      "gcno": "9887770000",
      "mplayers": " 4",
      "pdf": ""
    },
    "taekwondo": {
      "image": "icons/tykondo.png",
      "mplayers": " - ",
      "capt": "Mitul",
      "cno": "7838453778",
      "pdf": ""
    },
    "football": {
      "image": "icons/football.png",
      "bcapt": "Siddharth Kaushal",
      "bcno": "8295572443",
      "gcapt": "Prakriti Roy",
      "gcno": "9773383506",
      "mplayers": " 16",
      "pdf": ""
    },
    "volleyball": {
      "image": "icons/volleyball.png",
      "bcapt": "Sahil",
      "bcno": "9882641234",
      "gcapt": "Shreya Pathak",
      "gcno": "9983088851",
      "mplayers": " 10",
      "pdf": ""
    },
    "carrom": {
      "image": "icons/carrom.png",
      "capt": "Sai Sourya",
      "cno": "9676196078",
      "mplayers": " -",
      "pdf": ""
    },
    "snooker": {
      "image": "icons/snooker.png",
      "capt": "Anirudh Tandon",
      "cno": "9756800830",
      "mplayers": " -",
      "pdf": ""
    },
  },
  "profshows": {
    "rahul": {
      "image": "icons/rahul.png",
      "description": "Rahul Subramanian is a Tamilian engineer-turned-comedian who realized he was too good for the world of mechanics. The 29-year-old is a regular at all the leading comedy venues in the country, and recently came out with a fresh set of jokes, a solo set titled Kal Main Udega that makes fun of all his break-ups, and his time at B-school. The Mumbai-based comedian has been performing since 2014, as he broke into the scene by winning comedy competitions like Virgin Pants and Canvas Laugh Club - all India open-mics. Recently he played a role in AIB's web series Honest Engineering Campus Placements."
    },
    "sumit": {
      "image": "icons/sumit.png",
      "description": "Sumit Anand has been doing stand up for 4 years and has performed in London, Singapore, Malaysia and India, in order of preference to respective countries. Albeit he admits that he loves India the most (and money).<br><br>In other news, he has a Youtube channel.What people say about him:<br><br>\
\"Extraordinaire potential in Judo\" - Class IV Teacher<br><br>\
\"You were funnier last week\" - Repeat Audience Member<br><br>;)"
    }
  }
  // "contact":{

  // }
}

// Launch primary lightbox
function launchPrimary() {
  var lightbox = document.createElement('div');
  lightbox.className = "lightbox primary";
  document.body.appendChild(lightbox);
  return lightbox;
}

// Close primary lightbox
function closePrimary() {
  document.querySelector('.lightbox.primary').remove();
}

// Launch secondary lightbox
function launchSecondary() {
  var lightbox = document.createElement('div');
  lightbox.className = "lightbox secondary";
  document.body.appendChild(lightbox);
  return lightbox;
}

// Close secondary lightbox
function closeSecondary() {
  document.querySelector('.lightbox.secondary').remove();
}

function launchMenu() {
  var menu = launchPrimary();
  menu.style.background = "#fff";
  menu.innerHTML = $('#menu')[0].innerHTML;
  initMenu();
}

function launchEvent(name) {
  var type = (lightboxes.sports.hasOwnProperty(name))?'SPORTS EVENT':'PROF SHOW';
  var ev = launchSecondary();
  var item = lightboxes.sports[name] || lightboxes.profshows[name];
  ev.style.background = "transparent";
  if(name=="rahul") name="Rahul Subramanian";
  if(name=="sumit") name="Sumit Anand";
  if (type == "PROF SHOW")
  var html = '\
  <div id="sport-wrapper">\
    <div class="atheletics">\
      <div class="main_div">\
        <div class="col img" style="flex:0.3">\
        </div>\
        <div class="col">\
          <div class="details">'
          +item.description+
          '</div>\
          <div class="sport">'+name.toUpperCase()+'</div>\
        </div>\
        <div class="heading">'+type+'</div>\
        <img src="'+item.image+'" alt="'+name.toUpperCase()+'">\
        <div class="border"></div>\
      </div>\
    </div>\
  </div>\
  ';
  else
  var html = '\
  <div id="sport-wrapper">\
    <div class="atheletics">\
      <div class="main_div">\
        <div class = "button"><a href="pdfs/'+name+'.pdf">Download PDF</a>\
        </div>\
        <div class="col img" style="flex:0.3">\
        </div>\
        <div class="col">\
          <div class="details">\
            <strong><h2>Team captain details:</h2></strong>';
  if(item.hasOwnProperty('bcapt') && item.hasOwnProperty('gcapt'))
    html +=
            '<ul>\
              <li>Boys:<br>\
              Name: '+item.bcapt+'<br>\
              Contact No.: '+item.bcno+'\
              </li><li>Girls:<br>\
              Name: '+item.gcapt+'<br>\
              Contact No.: '+item.gcno+'\
              </li>\
            </ul>\
            <br><strong>Max. no. of players: </strong>'+item.mplayers;
  else if(item.hasOwnProperty('bcapt') && !item.hasOwnProperty('gcapt'))
    html+=
          '<ul>\
              <li>Boys:<br>\
              Name: '+item.bcapt+'<br>\
              Contact No.: '+item.bcno+'\
              </li>\
            </ul>\
            <br><strong>Max. no. of players: </strong>'+item.mplayers;
  else if(!item.hasOwnProperty('bcapt') && !item.hasOwnProperty('gcapt'))
    html+=
        '<ul>\
              <li>\
              Name: '+item.capt+'<br>\
              Contact No.: '+item.cno+'\
              </li>\
            </ul>\
            <br><strong>Max. no. of players: </strong>'+item.mplayers;
    html+=
          '</div>\
          <div class="sport">'+name.toUpperCase()+'</div>\
        </div>\
        <div class="heading">'+type+'</div>\
        <img src="'+item.image+'" alt="'+name.toUpperCase()+'">\
        <div class="border"></div>\
      </div>\
    </div>\
  </div>\
  ';
  ev.innerHTML = html;
  return ev;
}

function launchInfo() {
  var info = launchSecondary();
  var html = '\
  <div id="sport-wrapper">\
    <div class="atheletics">\
      <div class="main_div">\
        <div class="col img" style="flex:0.3">\
        </div>\
        <div class="col">\
          <div class="details">'
          +""+
          '</div>\
          <div class="sport">'+""+'</div>\
        </div>\
        <div class="heading">'+""+'</div>\
        <img src="'+""+'" alt="'+""+'">\
        <div class="border"></div>\
      </div>\
    </div>\
  </div>\
  ';

}

function launchVideo() {
  var video = launchPrimary();
  video.style.background = "rgba(0,0,0,0.9)";
  video.style.display = "flex";
  video.style.alignItems = "center";
  video.style.justifyContent = "center";
  video.innerHTML = $('#iframe')[0].innerHTML;
  video.className = video.className+" fadein video";
}

$(window).on("load",function(){
  $('#menu_trigger').on("click", function(){
    launchMenu();
  });
  $('#video_trigger').on("click", function(){
    launchVideo();
  });
  $('#facebook').on("click", function(){
    window.open("https://www.facebook.com/bosmbitspilani/");
  });
  $('#youtube').on("click", function(){
    window.open("https://www.youtube.com/user/bitsbosm/");
  });
  $('#home_trigger').on("click", function(){
    $('html,body').animate({scrollTop:0},0);
  });
  $(document).on("click", ".slider .item.event",function(e){
    launchEvent(e.target.getAttribute('name'));
    $('.lightbox.primary .slider').addClass('fadeout');
  });
  $(document).on("click", ".slider .item.contact",function(e){
    launchInfo();
    $('.lightbox.primary .slider').addClass('fadeout');
  });
  $(document).on("click", ".lightbox #sport-wrapper",function(){
    $('.lightbox.secondary').remove();
    $('.lightbox.primary .slider').removeClass('fadeout');
  });
  $(document).on("click", ".lightbox .close",function(){
    if($('.lightbox.secondary').length == 0)
      $('.lightbox').remove();
    else $('.lightbox.secondary').remove();
  });
  $(document).on("mousewheel", ".lightbox.secondary", function(e,d){
    // $('.lightbox.secondary .details').scrollTop += ( d < 0 ? 1 : -1 ) * 10;
    // e.preventDefault();
  });
  $(document).on("click", '.primary.video', function(){
    $('.primary').remove();
  });

  $('rect.56e797b3-ff7c-4d1b-84dc-5d00f20e79ce').on('click',function(){
    window.location.href = "https://bits-bosm.org/2017/registrations";
  });
});
