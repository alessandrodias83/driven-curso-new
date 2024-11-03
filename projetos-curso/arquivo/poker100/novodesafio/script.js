let pratoSelecionado = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;

let pratoSelecionadoTexto = "";
let bebidaSelecionadaTexto = "";
let sobremesaSelecionadaTexto = "";

let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

function selecionar(tipo, elemento) {
    const botoes = document.querySelectorAll(`#${tipo}s .opcao`);
    
    // Remove a classe 'selecionado' de todos os botões da categoria
    botoes.forEach(botao => botao.classList.remove('selecionado'));
    
    // Adiciona a classe 'selecionado' ao botão clicado (borda verde)
    elemento.classList.add('selecionado');
    
    // Atualiza o estado de seleção e armazena o texto e o preço
    if (tipo === 'prato') {
        pratoSelecionado = true;
        pratoSelecionadoTexto = elemento.textContent;
        precoPrato = parseFloat(elemento.getAttribute("data-preco"));
    } 
    if (tipo === 'bebida') {
        bebidaSelecionada = true;
        bebidaSelecionadaTexto = elemento.textContent;
        precoBebida = parseFloat(elemento.getAttribute("data-preco"));
    } 
    if (tipo === 'sobremesa') {
        sobremesaSelecionada = true;
        sobremesaSelecionadaTexto = elemento.textContent;
        precoSobremesa = parseFloat(elemento.getAttribute("data-preco"));
    }
    
    // Verifica se todas as seleções foram feitas
    ativarBotao();
}

function ativarBotao() {
    const botao = document.getElementById('fechar-pedido');
    
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        botao.disabled = false;
        botao.classList.add('ativo');
        botao.textContent = "Fechar Pedido";
    } else {
        botao.disabled = true;
        botao.classList.remove('ativo');
        botao.textContent = "Selecione os itens";
    }
}

function mostrarResumo() {
    const overlay = document.getElementById('resumo-overlay');
    
    // Exibe os itens selecionados no resumo
    document.getElementById('resumo-prato').textContent = `Prato: ${pratoSelecionadoTexto}`;
    document.getElementById('resumo-bebida').textContent = `Bebida: ${bebidaSelecionadaTexto}`;
    document.getElementById('resumo-sobremesa').textContent = `Sobremesa: ${sobremesaSelecionadaTexto}`;
    
    // Calcula e exibe o valor total
    const total = precoPrato + precoBebida + precoSobremesa;
    document.getElementById('resumo-total').textContent = total.toFixed(2);
    
    // Mostra a tela de resumo
    overlay.style.display = 'flex';
}

function fecharResumo() {
    const overlay = document.getElementById('resumo-overlay');
    overlay.style.display = 'none';
}

function confirmarPedido() {
    // Aqui você pode adicionar a lógica para processar o pedido,
    // como enviar os dados para um servidor ou exibir uma mensagem de confirmação.
    // Por enquanto, vamos apenas exibir um alerta.
    
    alert("Pedido confirmado! Em breve você receberá uma mensagem de confirmação.");
    
    // Opcional: Reiniciar o estado da seleção após confirmação
    resetarSelecoes();
    
    // Fecha o overlay após confirmação
    fecharResumo();
}

function resetarSelecoes() {
    // Reseta as variáveis de seleção
    pratoSelecionado = false;
    bebidaSelecionada = false;
    sobremesaSelecionada = false;

    pratoSelecionadoTexto = "";
    bebidaSelecionadaTexto = "";
    sobremesaSelecionadaTexto = "";

    precoPrato = 0;
    precoBebida = 0;
    precoSobremesa = 0;

    // Remove a classe 'selecionado' de todos os botões
    const botoes = document.querySelectorAll('.opcao');
    botoes.forEach(botao => botao.classList.remove('selecionado'));

    // Atualiza o botão de fechar pedido
    ativarBotao();
}
