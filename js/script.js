$(function () {
  $("#kimjestem").click(function () {
	$('.content').fadeOut("200", function(){
        $('.content').replaceWith('<div class="content">' 
		
		+'<div id="kimjestemtext"><h1>Bartosz Miłek</h1> Aktualnie jestem absolwentem ekonomii Wydziału Prawa, Administracji i Ekonomii. Zawodowo zajmuje się programowaniem jako webdeveloper i designer. <br> Oprócz tego piszę i publikuję teksty z zakresu polityki ekonomicznej oraz udzielam się społecznie. W wolnym czasie podróżuje z namiotem. <br> Prywatnie jestem sympatykiem ugrupowań wolnościowych, chillijskiego wina oraz kuchni włoskiej.<br><br></div>'
		
		
		+ '</div>');
    });
	
  });

});
		
$(function () {

  $("#kontakt").click(function () {
  $('.content').fadeOut("200", function(){
    $('.content').replaceWith('<div class="content">' 
	
	+ '<div id="kontakttext"><i class="fas fa-at"></i> <b>bmilek14@gmail.com</b></br></br><i class="fas fa-phone-square"></i> <b>+48 501 268 847</b><br><br><i class="fab fa-telegram"></i> <a class="logolink" href="https://t.me/bmilek"><b>bmilek</b></a></div>' 
	
	
	
	
	+ '</div>');
		});

	});

});

$(function () {
  $("#portfolio").click(function () {
	$('.content').fadeOut("200", function(){
        $('.content').replaceWith('<div class="content">' + 
                                  
		//'<div id="portfoliotext">Projekty niekomercyjne</br><a href="https://github.com/bmilek14"  target="_blank"><img src="img/git.png" alt="git" height="100" width="100" style="margin: 15px 0px 40px 0px;"></a></br>Projekty graficzne</br></br><a href="https://pl.pinterest.com/bmilek14" target="_blank"><img src="img/pinterest.png" alt="pinterest" height="80" width="80"></a> </div>'
		
		
		+ '</div>');
    });
	
  });

});
		
$(function () {

  $("#skills").click(function () {
  $('.content').fadeOut("200", function(){
    $('.content').replaceWith('<div class="content">' + 
	
                              '<div id="skillstext"><h2>Bardzo dobra znajomość:</h2><i class="fab fa-html5 fa-5x"></i> <i class="fab fa-css3 fa-5x"></i> <i class="fab fa-js fa-5x"></i> <h2>Podstawowa znajomość:</h2><i class="far fa-gem fa-4x"></i> <i class="fab fa-node fa-4x"></i> <i class="fab fa-sass fa-4x"></i> <i class="fas fa-database fa-4x"></i></div>'
                              
	//'<div id="skillstext"><h5>Front-end</h5><div id="frontend"><img src="img/frontend.png" alt="html5 css3 js" height="78" width="150"></br><img src="img/git.png" alt="git" height="50" width="50"><img src="img/sass.png" alt="sass" height="45" width="45"><img src="img/jquery.png" alt="jquery" height="50" width="50"></div><div id="statusfrontend"><b>75%</b></div><div style="clear: both;"></div><h5>Framework</h5><div id="framework"><img src="img/wordpress.png" alt="wordpress" height="50" width="50"></div><div id="statusframework">50%</div><div style="clear: both;"></div></div>'
	
	+ '</div>');
	//$("#statusfrontend").animate({width: "225px"});
	//$("#statusbackend").animate({width: "100px"});
	//$("#statusframework").animate({width: "150px"});
		});

	});

});