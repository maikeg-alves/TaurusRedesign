// login Area //
var codigoLogin = document.getElementById("login-codigo");
var login = document.getElementById("login");
var btnlogin = document.getElementById("loginbtn");
var btnCreatAccout = document.getElementById("singup");
var closelogin = document.querySelector(".closelogin");
var body = document.getElementById("body");
var loginmodal = document.getElementById("loginpass");
const token = localStorage.getItem("token")
// ixibir modal de login //
textologin = () => {
  ShowOfClean();
  codigoLogin.innerHTML += `
    <div class="mb-3 col-10">
       <label for="email" id="labelEmail" class="form-label">Email</label>
       <input id="email"  type="email" class="form-control" aria-describedby="emailHelp">
    </div>

    <div class="mb-3 col-10">
        <label for="senha" id="labelPassword" class="form-label">Password</label>
        <input id="senha"  type="password" class="form-control" >
        <i class="material-icons vision-password" style="top: 211px;"> remove_red_eye</i> 
     </div> 

      <button type="button" onclick="entrar()" class="btn btn-colors border-primary rounded-pill mt-3 mb-5 col-10">login</button>
      
     <div class="msgsucss">
        <p class="m-2">Acessando...</p>
     </div>
     <div class="msgerro">
       <p class="m-2">Usúario não encontrado </p>
     </div>
     `;
  showpassword();
};

btnlogin.addEventListener("click", function () {
  textologin();
});

//tela de login
loginmodal.addEventListener("click", function () {
  textologin();
});

//tela de cadastro
btnCreatAccout.addEventListener("click", function () {
  ShowOfClean();
  codigoLogin.innerHTML += `
   <div class="mb-3 col-10">
        <label for="nome" id="labelNome" class="form-label">Name</label>

        <input id="nome"  type="text" class="form-control"aria-describedby="emailHelp">
    </div>

    <div class="mb-3 col-10">
        <label for="email" id="labelEmail" class="form-label">Email</label>

        <input id="email"  type="email" class="form-control" aria-describedby="emailHelp">
    </div>

    <div class="mb-3 col-10">
        <label for="senha" id="labelPassword" class="form-label">Password</label>

        <input id="senha"  type="password" class="form-control" >
     
        <i class="material-icons vision-password" style="top: 303px;"> remove_red_eye</i> 
     </div>  
     
    </div>
    <button type="button" class="creat btn btn-colors border-primary rounded-pill mt-3 mb-5 col-10 cadastrar" href="#" >Creat New Account</button>
    <div class="msgerro">
     <p class="m-2">preencha todos os campos</p>
    </div>
    <div class="msgsucss">
    <p class="m-2">cadastrado com sucesso, agurde ...</p>
   </div>
  `;

  showpassword();
  SetCadastro();
});

//close moldal //
$(document).dblclick((event)  => {
  if (
    !$(event.target).closest(".modal-content").length ==
    !$(event.target).closest("#loginbtn").length
  ) {
    $("#login").css({
      display: "none",
      "background-color": "#00000063",
    });
    login.classList.remove("show");
    codigoLogin.innerHTML = "";
  }
});

//mostrar senha //
showpassword = () => {
  var visionPass = document.querySelector(".vision-password");

  visionPass.addEventListener("click", function () {
    let inputsenha = document.querySelector("#senha");

    if (inputsenha.getAttribute("type") == "password") {
      inputsenha.setAttribute("type", "text");
    } else {
      inputsenha.setAttribute("type", "password");
    }
  });
};

//limpar dados do modal ao selecionar outro //
ShowOfClean = () => {
  codigoLogin.innerHTML = "";
  $("#login").css({
    display: "block",
    "background-color": "#00000063",
    transition: "transform .3s ease-out",
  });
  $("#body").css({
    "padding-right": "0px",
  });
  body.classList.add("modal-open");
  login.classList.add("show");
};

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
                      <button key="${val.id}" onclick="contar1()" class="add-to-cart btn btn-green btn-primary rounded-pill" type="button">Comprar</button>
                      <button key="${val.id}" onclick="contar2()" class="add-to-cart addtocart btn btn-primary rounded-pill btn-white " type="button"><i
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

function contar2() {
  ++numero;
  contador.innerHTML = numero;
}

function contar1() {
  if (token == null ) {
    alert('voce precisa está logado')
    document.querySelector('#Sing').scrollIntoView();
  }else {
  ++numero;
  contador.innerHTML = numero;
  }
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

var links = document.getElementsByClassName("btn");
  
  for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
      let key = this.getAttribute("key");
      items[key].quantidade++;
      removeboll();
      atualizarCarrinho();
    });
  }

/* Update quantity */

atualizarCarrinho();

/* variaveis scroll page */
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

//EVENTS DE SCROLL CLICK //
function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget);
  scrollToPosition(to);
}

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

// Smooth scroll animation
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}

// login AUTENTICAÇÃO DE USER  ///

SetCadastro = () => {
  let LabelNomne = document.querySelector("#labelNome");
  let nome = document.querySelector("#nome");
  let validNome = false;

  let LabelEmail = document.querySelector("#labelEmail");
  let email = document.querySelector("#email");
  let validEmail = false;

  let LabelSenha = document.querySelector("#labelPassword");
  let senha = document.querySelector("#senha");
  let validSenha = false;

  //validaçoes de keyup
  nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2) {
      LabelNomne.setAttribute("style", "color: red");
      nome.setAttribute("style", "border-color: red");
      validNome = false;
    } else {
      LabelNomne.setAttribute("style", "color: #11f511");
      nome.setAttribute("style", "border-color: #11f511");
      validNome = true;
    }
  });

  email.addEventListener("keyup", () => {
    if (email.value.length <= 4) {
      LabelEmail.setAttribute("style", "color: red");
      email.setAttribute("style", "border-color: red");
      validEmail = false;
    } else {
      LabelEmail.setAttribute("style", "color: #11f511");
      email.setAttribute("style", "border-color: #11f511");
      validEmail = true;
    }
  });

  senha.addEventListener("keyup", () => {
    if (senha.value.length <= 6) {
      LabelSenha.setAttribute("style", "color: red");
      senha.setAttribute("style", "border-color: red");
      validSenha = false;
    } else {
      LabelSenha.setAttribute("style", "color: #11f511");
      senha.setAttribute("style", "border-color: #11f511");
      validSenha = true;
    }
  });

  $(".cadastrar").click(() => {
    if (validNome && validEmail && validSenha) {
      let listaUsers = JSON.parse(localStorage.getItem("listaUsers") || "[]");

      listaUsers.push({
        nomeCad: nome.value,
        emailCad: email.value,
        senhaCad: senha.value,
      });

      localStorage.setItem("listaUsers", JSON.stringify(listaUsers));

      $(".msgerro").css({ display: "none" });
      $(".msgsucss").css({ display: "block" });

      setTimeout(() => {
        textologin();
      }, 3000);
    } else {
      $(".msgsucss").css({ display: "none" });
      $(".msgerro").css({ display: "block" });
    }
  });
};


function entrar() {
  let LabelEmail = document.querySelector("#labelEmail");
  let email = document.querySelector("#email");

  let LabelSenha = document.querySelector("#labelPassword");
  let senha = document.querySelector("#senha");

  let listaUsers = [];

  let userValid = {email:null, senha:null};

  listaUsers = JSON.parse(localStorage.getItem("listaUsers"));

  listaUsers.map((item) => {
    if (email.value == item.emailCad && senha.value == items.enhaCad) {
      userValid = {
        email: item.emailCad,
        senha: item.senhaCad
      };
    }
  });

  if (email.value == userValid.email && senha.value == userValid.senha) {

    LabelEmail.setAttribute("style", "color: #11f511");
    email.setAttribute("style", "border-color: #11f511");
    LabelSenha.setAttribute("style", "color: #11f511");
    senha.setAttribute("style", "border-color: #11f511");
    $(".msgsucss").css({ display: "block" });
    $(".msgerro").css({ display: "none" });

    setTimeout(() => {
      let token =
      Math.random().toString(16).substr(2) +
      Math.random().toString(16).substr(2);
      localStorage.setItem("token", token);
      localStorage.setItem('userLogado', JSON.stringify(userValid));
      window.location.href = "/index.html";
    }, 1000);

    $("#login").css({
      display: "none",
      "background-color": "#00000063",
    });
    login.classList.remove("show");
    codigoLogin.innerHTML = "";

  } else {
    localStorage.removeItem("token");
    LabelEmail.setAttribute("style", "color: red");
    email.setAttribute("style", "border-color: red");
    LabelSenha.setAttribute("style", "color: red");
    senha.setAttribute("style", "border-color: red");
    $(".msgsucss").css({ display: "none" });
    $(".msgerro").css({ display: "block" });
    email.focus();
  }
}

/* finalizar compra  */
var finalizar = document.querySelector('.finalizar-compra')
 
finalizar.addEventListener('click', ()=> {
  if (token == null) {
    alert('voce precisa está logado')
    document.querySelector('#Sing').scrollIntoView();
         
   } else {
        alert('você pode comprar ')
   }
})

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado')
  window.location.href = "/index.html";
}

var pop = document.querySelector('.pop')

$(".user-log").click(()=>{
  if (token == null) {
   document.querySelector("#Sing").scrollIntoView()
  } else { 
  let userLogado = JSON.parse(localStorage.getItem("userLogado"))
   $(".pop").css({display:"block"})
  pop.innerHTML = ` 
  <div class="box arrow-top d-flex flex-column">
   <p class="logado m-0">0lá ${userLogado.email}</p>
   <button class="btn btn-light rounded-pill logout" onclick="logout()"> sair</button>
  </div>`
}
})
$(document).dblclick( (eve) => {
  if ( !$(eve.target).closest(".box").length || !$(eve.target).closest(".user-log").length) {
    $(".pop").css({display:"none"})
  } 
});



/*                                      CODIGO TESTE                                             */
/* items.map((val) => {
let listaProdutos = JSON.parse(localStorage.getItem("listaProdutos") || "[]");

listaProdutos.push({
  idCad: val.id,
  nomeCad: val.name,
  imgCad: val.img,
  quantidadeCad: val.quantidade,
  priceCad: val.price,
});

localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

}) */
