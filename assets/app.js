var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
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
/* menu scroll fix  */

window.onscroll = function(){
	const menu = document.querySelector('.fixed-top')
	var top = window.pageYOffset || document.documentElement.scrollTop
	if (top > 300) {
		menu.classList.add('teste')
		console.log ('maior que 300')
	} else {
		menu.classList.remove('teste')
	}
}

/* $('.addtocart').on('click',function(){
	console.log('teste')
}) */

$(document).ready(function(){
	$('.addtocart').on('click',function(){
	  console.log('apertou')
	  var button = $(this);
	  var cart = $('#cart');
	  var cartTotal = cart.attr('data-totalitems');
	  var newCartTotal = parseInt(cartTotal) + 1;
	  
	  button.addClass('sendtocart');
	  setTimeout(function(){
		button.removeClass('sendtocart');
		cart.addClass('shake').attr('data-totalitems', newCartTotal);
		setTimeout(function(){
		  cart.removeClass('shake');
		},500)
	  },1000)
	})
  })