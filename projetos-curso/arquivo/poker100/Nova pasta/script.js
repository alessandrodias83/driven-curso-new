function gerenciarSelecao(item, categoria) {
    // Marcar o item clicado
    item.classList.add('selecionado');

    // Verificar se há outros itens selecionados na mesma categoria
    const itensDaCategoria = document.querySelectorAll(`.${categoria}.selecionado`);

    // Se houver mais de um item selecionado, desmarcar os demais
    if (itensDaCategoria.length > 1) {
        itensDaCategoria.forEach(item => {
            if (item !== event.target) {
                item.classList.remove('selecionado');
            }
        });
    }

    // Verificar se há um item selecionado em cada categoria
    const categorias = ['categoria1', 'categoria2', 'categoria3']; // Substitua pelos nomes das suas categorias
    const todosSelecionados = categorias.every(categoria => {
        return document.querySelector(`.${categoria}.selecionado`);
    });

    // Habilitar ou desabilitar o botão
    const botaoFinalizar = document.getElementById('botaoFinalizar');
    botaoFinalizar.disabled = !todosSelecionados;
}