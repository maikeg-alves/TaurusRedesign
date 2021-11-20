var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

var X, Y;
var Xtratado, Ytratado;

function mover() {
  traslate = "translate(" + Xtratado + "px," + Ytratado + "px)";

  $(".fundo").css({
    transform: traslate,
  });

  window.requestAnimationFrame(mover);
}

$(document).on("mousemove", function (event) {
  X = event.pageX;
  Y = event.pageY;

  ancho = $(window).width() / 2;
  largo = $(window).height() / 2;

  Xtratado = (ancho - X) * (1 / 50);
  Ytratado = (largo - Y) * (1 / 50);
});

mover();

/* carossel */

window.onload = function () {
  recCarouselEvents();
};

function recCarouselEvents() {
  // RECOMMENDATION CAROUSELS
  var recTranslate = 0;
  var recTranslateIncrem = 904;
  var carRecsItems = $(".carousel-recs .carousel-listitem");
  var carRecsItem = $(carRecsItems[0]);
  var carRecsItemWidth = carRecsItem.outerWidth(true);
  var carRecsRowWidth = carRecsItemWidth * 4;
  var carRecsMaxRowWidth = carRecsItemWidth * carRecsItems.length;

  $(".carousel-prev-rec").click(function () {
    // PREV RECS
    carRecsList = $(this)
      .parents(".carousel-header")
      .siblings(".carousel-body")
      .find(".carousel-list");
    recTranslate += recTranslateIncrem;

    if (recTranslate <= 0) {
      carRecsList.css("transform", "translatex(" + recTranslate + "px)");
    } else {
      recTranslate = 0;
    }
  });

  $(".carousel-next-rec").click(function () {
    // NEXT RECS
    carRecsList = $(this)
      .parents(".carousel-header")
      .siblings(".carousel-body")
      .find(".carousel-list");
    recTranslate -= recTranslateIncrem;

    if (recTranslate >= -1808) {
      carRecsList.css("transform", "translatex(" + recTranslate + "px)");
    } else {
      recTranslate = -1808;
    }
  });
}
/* menu scroll fix  */

window.onscroll = function () {
  const menu = document.querySelector(".fixed-top");
  var top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 130) {
    menu.classList.add("teste");
    console.log("maior que 300");
  } else {
    menu.classList.remove("teste");
  }
};

/*     CARRINHO DE COMPRAS  */

/* array com os produtos  */
const items = [
  {
    id: 0,
    nome: "Arma 1",
    img: "/img/frenzy.png",
    quantidade: 0,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
    price: 10,
    },
  {
    id: 1,
    nome: "Arma 2",
    img: "/img/classic.png",
    quantidade: 0,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
    price: 99,
    },
  {
    id: 2,
    nome: "Arma 3",
    img: "/img/shorty.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 3,
    nome: "Arma 4",
    img: "/img/sheriff.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 4,
    nome: "Arma 5",
    img: "/img/CA762IA2-dir.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 5,
    nome: "Arma 6 ",
    img: "/img/phantom-article.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 6,
    nome: "Arma 7 ",
    img: "/img/judge.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 7,
    nome: "Arma 8 ",
    img: "/img/ump45.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
];
productsInCart = [];

/* inicializador da loja  */
inicializarLoja = () => {
  var containerProdutos = document.getElementById("produtos");
  items.map((val) => {
    $(".cart").css({
      visibility: "hidden",   
    });
    console.log(val.nome);
    containerProdutos.innerHTML += `
                <li class="coll-3 p-3">
                  <section class="banner">
                    <h1 class="pt-3 text-center">${val.nome}</h1>
                    <img class="py-5 px-4" src="${val.img}">
                    <p class="px-4 fs-6">T4 11,5 (FULL-AUTO)</p>
                    <p class="px-4">Detalhes</p>
                    <p class="c pb-5 px-4 text-break"> ${val.delalhes} </p>
                    <div class="d-flex align-items-center justify-content-evenly">
                      <button key="${val.id}" onclick="contar()" class="add-to-cart btn btn-green btn-primary rounded-pill" type="button">Comprar</button>
                      <button data-name="arma 8" data-price="100" class="add-to-cart addtocart btn btn-primary rounded-pill btn-white " type="button"><i
                          class="fas fa-plus"></i></button>
                    </div>
                  </section>
                </li>
                
                `;
  });
};

inicializarLoja();

/*       carrinho  */
atualizarCarrinho = () => {
  var containerCarrinho = document.querySelector(".modal-body");
  var valorTotaldosProdutos = document.getElementById("totalproduct")
  valorTotaldosProdutos.innerHTML = "";
  containerCarrinho.innerHTML = "";
  limpartudo = () => {
    valorTotaldosProdutos.innerHTML = "";
    containerCarrinho.innerHTML = "";
  }
  limpartudo()
  items.map((val) => {
    if (val.quantidade > 0) {
      var totalR =  val.price * val.quantidade 
      containerCarrinho.innerHTML += `
      <div class="d-flex"> 
      <img src="${val.img}" class="col-auto cartImg"> 
      <p class="px-3"> ${val.nome} </p> 
        <div> 
        <input type="button" class="plus" onclick="menos()" value="-">
          ${val.quantidade}
        <input type="button" onclick="mais()" value="+">
        </div>
        <p class="total-item px-3 "> R$ ${totalR}</p>       
      </div>
      <hr>`;

      var total = items.reduce(getTotal, 0);

      function getTotal(total, item) {
       return total + (item.price * item.quantidade);
      }
   /*    $('.btn').addEventListener('click', function(){
        valorTotaldosProdutos.innerHTML= ""
      }) */
      valorTotaldosProdutos.innerHTML = `<p> Valor Total: R$ ${total} </p>`
    }
  });
  
};

/* contador total de itens  */
var numero = 0;
var contador = document.querySelector(".total-count");

function contar() {
  ++numero;
  contador.innerHTML = numero;
}

function zerar() {
   items.map((val)=>{
     val.quantidade = 0
   })
   numero = 0
   contador.innerHTML = null
   limpartudo()
   removeboll()
 } 

 removeboll = () => {
 if (numero > 0 ) {
  $(".cart").css({
    visibility: "visible",
  });
  }else {
  $(".cart").css({
    visibility: "hidden",   
  });
  }
}

/*  quantidade  */
var links = document.getElementsByClassName("btn");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    items[key].quantidade++;
    removeboll()
    atualizarCarrinho();
  });
}
atualizarCarrinho();

/* function totalCost(items) {
  // console.log("The product price is", product.price);
   items.map((val)=>{
   let cartCost = val.quantidade
   if(cartCost != null) {
       cartCost parseInt(cartCost);
       var totaal = ( cartCost +
       val.price);
    }else {
      var totaal = val.price);
   }
  })
  }
  totalCost() */