let prato = "";
let bebida = "";
let sobremesa = "";

let pratoSelecionado = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;

function selecionarPrato(prato) {
    const pratoEscolhidoAntes = document.querySelector(".prato-selecionado .selecionado");

    if(pratoEscolhidoAntes !== null) {
        pratoEscolhidoAntes.classList.remove("selecionado")
    }
    
    prato.classList.add("selecionado");

}

function selecionarBebida(bebida) {
    const bebidaEscolhidoAntes = document.querySelector(".prato-selecionado .selecionado");

    if(bebidaEscolhidoAntes !== null) {
        bebidaEscolhidoAntes.classList.remove("selecionado")
    }
    
    bebida.classList.add("selecionado");

}

function selecionarSobremesa(sobremesa) {
    const sobremesaEscolhidoAntes = document.querySelector(".sobremesa-selecionada .selecionado");

    if(sobremesaEscolhidoAntes !== null) {
        sobremesaEscolhidoAntes.classList.remove("selecionado")
    }
    
    sobremesa.classList.add("selecionado");

    ativarBotao();
 
}
