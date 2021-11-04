var X,Y;
var Xtratado, Ytratado;

function mover()
{
  traslate = 'translate('+Xtratado+'px,'+Ytratado+'px)';
  
  $(".fundo").css({
    'transform': traslate
  });
  
  window.requestAnimationFrame(mover)
}

$( document ).on( "mousemove", function( event ) {
  X = event.pageX;
  Y = event.pageY;
  
  ancho = $(window).width() / 2;
  largo = $(window).height() / 2;
  
  Xtratado =  (ancho - X)*(1/50);
  Ytratado =  (largo - Y)*(1/50);

});

mover();

/* carossel */

window.onload = function() {
	recCarouselEvents();
}

function recCarouselEvents() {

	// RECOMMENDATION CAROUSELS
	var recTranslate = 0;
	var recTranslateIncrem = 904;
	var carRecsItems = $('.carousel-recs .carousel-listitem');
	var carRecsItem = $(carRecsItems[0]);
	var carRecsItemWidth = carRecsItem.outerWidth(true);
	var carRecsRowWidth = (carRecsItemWidth * 4);
	var carRecsMaxRowWidth = (carRecsItemWidth * carRecsItems.length);

	$('.carousel-prev-rec').click(function() {
		// PREV RECS
		carRecsList = $(this).parents('.carousel-header')
			.siblings('.carousel-body').find('.carousel-list');
		recTranslate += recTranslateIncrem;

		if (recTranslate <= 0) {
			carRecsList.css('transform', 'translatex(' + recTranslate + 'px)');
		} else {
			recTranslate = 0;
		}
	})

	$('.carousel-next-rec').click(function() {
		// NEXT RECS
		carRecsList = $(this).parents('.carousel-header')
			.siblings('.carousel-body').find('.carousel-list');
		recTranslate -= recTranslateIncrem;

		if (recTranslate >= -1808) {
			carRecsList.css('transform', 'translatex(' + recTranslate + 'px)');
		} else {
			recTranslate = -1808;
		}

	});
}