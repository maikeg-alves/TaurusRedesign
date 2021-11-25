

// login Area //

var codigoLogin = document.getElementById("login-codigo");
var login = document.getElementById("login");
var btnlogin = document.getElementById("loginbtn");
var btnCreatAccout = document.getElementById("btnCreatAccout");
var closelogin = document.querySelector(".closelogin");

btnlogin.addEventListener("click", function () {
  $("#login").css({
    display: "block",
    "background-color": "#00000063",
  });
  login.classList.add("show");
  codigoLogin.innerHTML += `
  <div class="mb-3 col-10">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            
           </div>
           <div class="mb-3 col-10">
           <label for="exampleInputPassword1" class="form-label">Password</label>
           <input type="password" class="form-control" id="exampleInputPassword1">
           </div>
           <button type="submit" class="btn btn-colors border-primary rounded-pill mt-3 mb-5 col-10">login</button>
           <div>
             <p> Don't have an account?  <a id="btnCreatAccout" href="#creat" > Sing in</a> </p>
           </div>
  `;
});

btnCreatAccout.addEventListener("click", function () {
  $("#login").css({
    display: "block",
    "background-color": "#00000063",
  });
  login.classList.add("show");
  codigoLogin.innerHTML += `
   <div class="mb-3 col-10">
     <label for="exampleInputEmail1" class="form-label">Name</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3 col-10">
     <label for="exampleInputEmail1" class="form-label">Email</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3 col-10">
     <label for="exampleInputPassword1" class="form-label">Password</label>
     <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
 <button type="submit" class="btn btn-colors border-primary rounded-pill mt-3 mb-5 col-10">Creat New Account</button>
  `;
});

closelogin.addEventListener("click", function () {
  $("#login").css({
    display: "none",
    "background-color": "#00000063",
    transition: "opacity .15s linear",
  });
  login.classList.remove("show");
  codigoLogin.innerHTML = "";
});


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
    img: "img/frenzy.png",
    quantidade: 0,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
    price: 10,
  },
  {
    id: 1,
    nome: "Arma 2",
    img: "img/classic.png",
    quantidade: 0,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
    price: 99,
  },
  {
    id: 2,
    nome: "Arma 3",
    img: "img/shorty.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 3,
    nome: "Arma 4",
    img: "img/sheriff.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 4,
    nome: "Arma 5",
    img: "img/CA762IA2-dir.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 5,
    nome: "Arma 6 ",
    img: "img/phantom-article.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 6,
    nome: "Arma 7 ",
    img: "img/judge.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
  {
    id: 7,
    nome: "Arma 8 ",
    img: "img/ump45.png",
    quantidade: 0,
    price: 99,
    delalhes:
      "After generating your fancy text symbols, you can copy and paste the to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text.",
  },
];
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

atualizarCarrinho = () => {
  var containerCarrinho = document.querySelector(".modal-body");
  var valorTotaldosProdutos = document.getElementById("totalproduct");

  valorTotaldosProdutos.innerHTML = "";
  containerCarrinho.innerHTML = "";
  limpartudo = () => {
    valorTotaldosProdutos.innerHTML = "";
    containerCarrinho.innerHTML = "";
  };
  limpartudo();

  items.map((val) => {
    if (val.quantidade > 0) {
      var totalR = val.price * val.quantidade;
      containerCarrinho.innerHTML += `
      <div class="d-flex justify-content-between"> 
      <img src="${val.img}" class="col-auto cartImg"> 
      <p class="px-3"> ${val.nome} </p> 
       <div> 
         <p>${val.quantidade} </p> 
      </div>
       <p> R$${val.price}</p>
      <hr>`;

      var total = items.reduce(getTotal, 0);

      function getTotal(total, item) {
        return total + item.price * item.quantidade;
      }
      valorTotaldosProdutos.innerHTML = `<p style="color:#00da24;"> Valor Total: R$ ${total} </p>`;
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
  items.map((val) => {
    val.quantidade = 0;
  });
  numero = 0;
  contador.innerHTML = null;
  limpartudo();
  removeboll();
}

removeboll = () => {
  if (numero > 0) {
    $(".cart").css({
      visibility: "visible",
    });
  } else {
    $(".cart").css({
      visibility: "hidden",
    });
  }
};

/*  quantidade  */
add = () => {
  var links = document.getElementsByClassName("btn");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let key = this.getAttribute("key");
      items[key].quantidade++;
      removeboll();
      atualizarCarrinho();
    });
  }
};

add();

/* Update quantity */

atualizarCarrinho();
