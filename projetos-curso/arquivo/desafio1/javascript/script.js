let pratoEscolhido = "";
let bebidaEscolhida = "";
let sobremesaEscolhida = "";

function selecionarPrato(botao) {
    pratoEscolhido = botao.innerhtml;
    const pratoSelecionado = document.querySelector(".pratos .selecionado");
    
    if(pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");
}

function selecionarBebida(botao) {
    bebidaEscolhida = botao.innerhtml;
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");

    if(bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");
}

function selecionarSobremesa(botao) {
    sobremesaEscolhida = botao.innerhtml;
    const sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");

    if(sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
    }

    sobremesa.classList.add("selecionado");
    botao.classList.add("selecionado");
}

