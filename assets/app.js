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
	if (top > 130) {
		menu.classList.add('teste')
		console.log ('maior que 300')
	} else {
		menu.classList.remove('teste')
	}
}

/* $('.addtocart').on('click',function(){
	console.log('teste')
}) */

/* $(document).ready(function(){
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
 */
/*   cart script  */

 // ************************************************
      // Shopping Cart APIas
      // ************************************************

      var shoppingCart = (function () {
        // =============================
        // Private methods and propeties
        // =============================


        /* o array responsavel por gurdar os valores adiconados ao carrinho  */
        cart = [];

        // Constructor
/*         aqui ele vai procurar pelas palavras name, prince e count para 
        quando eu clicar no add cart ele acionar o nome, valor e a conta de todos juntos 
        sem precisar adicionar os procutos em um aray com id */ 
        function Item(name, price, count) {
          this.name = name;
          this.price = price;
          this.count = count;
        }

        // Save cart   
        function saveCart() {
          sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
        }

        // Load cart
        function loadCart() {
          cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
        }
        if (sessionStorage.getItem("shoppingCart") != null) {
          loadCart();
        }

        // =============================
        // Public methods and propeties
        // =============================
        var obj = {};

        // Add to cart
        obj.addItemToCart = function (name, price, count) { 
          for (var item in cart) {
            if (cart[item].name === name) {
              cart[item].count++;
              saveCart();
              return;
            }
          }
          var item = new Item(name, price, count);
          cart.push(item);
          saveCart();
        };
        // Set count from item
        obj.setCountForItem = function (name, count) {
          for (var i in cart) {
            if (cart[i].name === name) {
              cart[i].count = count;
              break;
            }
          }
        };
        // Remove item from cart
        obj.removeItemFromCart = function (name) {
          for (var item in cart) {
            if (cart[item].name === name) {
              cart[item].count--;
              if (cart[item].count === 0) {
                cart.splice(item, 1);
              }
              break;
            }
          }
          saveCart();
        };

        // Remove all items from cart
        obj.removeItemFromCartAll = function (name) {
          for (var item in cart) {
            if (cart[item].name === name) {
              cart.splice(item, 1);
              break;
            }
          }
          saveCart();
        };

        // Clear cart
        obj.clearCart = function () {
          cart = [];
          saveCart();
        };

        // Count cart
        obj.totalCount = function () {
          var totalCount = 0;
          for (var item in cart) {
            totalCount += cart[item].count;
          }
          return totalCount;
        };

        // Total cart
        obj.totalCart = function () {
          var totalCart = 0;
          for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
          }
          return Number(totalCart.toFixed(2));
        };

        // List cart
        obj.listCart = function () {
          var cartCopy = [];
          for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
              itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
          }
          return cartCopy;
        };

        // cart : Array
        // Item : Object/Class
        // addItemToCart : Function
        // removeItemFromCart : Function
        // removeItemFromCartAll : Function
        // clearCart : Function
        // countCart : Function
        // totalCart : Function
        // listCart : Function
        // saveCart : Function
        // loadCart : Function
        return obj;
      })();

      // *****************************************
      // Triggers / Events
      // *****************************************
      // Add item
      $(".add-to-cart").click(function (event) {
        event.preventDefault();
        var name = $(this).data("name");
        var price = Number($(this).data("price"));
        shoppingCart.addItemToCart(name, price, 1);
        displayCart();
      });

      // Clear items
      $(".clear-cart").click(function () {
        shoppingCart.clearCart();
        displayCart();
      });

      function displayCart() {
        var cartArray = shoppingCart.listCart();
        var output = "";
        for (var i in cartArray) {
          output +=
            "<tr>" +
            "<td>" +
            cartArray[i].name +
            "</td>" +
            "<td>(" +
            cartArray[i].price +
            ")</td>" +
            "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" +
            cartArray[i].name +
            ">-</button>" +
            "<input type='number' class='item-count form-control' data-name='" +
            cartArray[i].name +
            "' value='" +
            cartArray[i].count +
            "'>" +
            "<button class='plus-item btn btn-primary input-group-addon' data-name=" +
            cartArray[i].name +
            ">+</button></div></td>" +
            "<td><button class='delete-item btn btn-danger' data-name=" +
            cartArray[i].name +
            ">X</button></td>" +
            " = " +
            "<td>" +
            cartArray[i].total +
            "</td>" +
            "</tr>";
        }
        $(".show-cart").html(output);
        $(".total-cart").html(shoppingCart.totalCart());
        $(".total-count").html(shoppingCart.totalCount());
      }

      // Delete item button

      $(".show-cart").on("click", ".delete-item", function (event) {
        var name = $(this).data("name");
        shoppingCart.removeItemFromCartAll(name);
        displayCart();
      });

      // -1
      $(".show-cart").on("click", ".minus-item", function (event) {
        var name = $(this).data("name");
        shoppingCart.removeItemFromCart(name);
        displayCart();
      });
      // +1
      $(".show-cart").on("click", ".plus-item", function (event) {
        var name = $(this).data("name");
        shoppingCart.addItemToCart(name);
        displayCart();
      });

      // Item count input
      $(".show-cart").on("change", ".item-count", function (event) {
        var name = $(this).data("name");
        var count = Number($(this).val());
        shoppingCart.setCountForItem(name, count);
        displayCart();
      });

      displayCart();
      //# sourceURL=pen.js

