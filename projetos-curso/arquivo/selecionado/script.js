let caixa1 = "";
let caixa2 = "";
let caixa3 = "";

let itemSelecionado = false; 


function selecionarCaixaA(botao) {
    caixa1 = botao.innerHTML;

    const box1 = document.querySelector(".itens-a .selecionado")

    if(box1 !== null) {
        box1.classList.remove("selecionado");
    }

    botao.classList.add("selecionado")
}

function selecionarCaixaB(botao) {
    caixa2 = botao.innerHTML;

    const box2 = document.querySelector(".itens-b .selecionado")

    if(box2 !== null) {
        box2.classList.remove("selecionado");
    }

    botao.classList.add("selecionado")
}


function selecionarCaixaC(botao) {
    caixa3 = botao.innerHTML;

    const box3 = document.querySelector(".itens-c .selecionado")

    if(box3 !== null) {
        box3.classList.remove("selecionado");
    }

    botao.classList.add("selecionado")
}


function verificarSelecaoEAlterarBotao() {
    const botao = document.getElementById('meuBotao');
  
    if (itemSelecionado) {
      botao.classList.add("escondido"); 
    } 
  }
  
  function selecionarCaixaA() {

    itemSelecionado = true;
    verificarSelecaoEAlterarBotao();
  }

  