jQuery(document).ready( function(){

  $('#brand').removeClass('hidden');
  $('#brand').addClass('animated zoomInDown');

  $('#button, #heading').removeClass('hidden');
  $('#button, #heading').addClass('animated zoomIn');

  $('#main-nav, #social-media').removeClass('hidden');
  $('#main-nav, #social-media').addClass('animated fadeIn');

  $('#scroll-indicator').removeClass('hidden');
  $('#scroll-indicator').addClass('animated bounce');
});

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.landing').css('top',-(scrolled*0.0315)+'rem');
  $('.landing .column').css('top',-(scrolled*-0.005)+'rem');
  $('.landing .column').css('opacity',1-(scrolled*.00225));
};
