let nomeJogo = "";
let qtdJogadores = "";

function calcularIdade(anoNascimento) {
    const anoAtual = 2024;
    const idade = anoAtual - anoNascimento;
    return idade; // o resultado que sera usado em algum lugar precisa ser guardado em um retorno. Quando for usar, chamo o valor, sempre com uma const
}

function perguntarIdade() {
    const anoNascimento = Number(prompt('Qual o ano de nascimento?')); 
    const idade = calcularIdade(anoNascimento);

    

    // se idade for maior que 17
    if(idade > 17) {
        // remover a classe escondido da div

        // Etapa 1: Pegar o elemento que quero alterar
        const painel = document.querySelector('.selecionar-jogo');
        // Etapa 2: remover classe escondido
        painel.classList.remove('escondido')
    } else { // senão
        // Etapa 1 - pegar o elemento HTML e guardar em uma variável
        const paragrafo = document.querySelector('.aviso');
        // Etapa 2 - Trocar o valor do texto da tag <p>
      
        // Template String
        paragrafo.innerHTML = `O uso deste site não é permitido para pessoas com ${idade} anos`
        paragrafo.classList.add('vermelho')
       
    }
}

function selecionarJogo(botao) {
    nomeJogo = botao.innerHTML;
    //const botao = document.querySelector("." + jogo); // uso o "." para selecionar uma das classes, para isso, adiciono um novo paramentro dentro da função (variável), no exemplo: jogo. Usei concatenação de "." + jogo

    const botaoSelecionadoAntes = document.querySelector(".tipo-jogo .selecionado");

    if(botaoSelecionadoAntes !== null) { 
        botaoSelecionadoAntes.classList.remove("selecionado"); // retornou null pq não foi selecionado antes, ele não vai achar.
    }
    
    botao.classList.add("selecionado")
}

function selecionarJogadores(botao) {
    qtdJogadores = botao.innerHTML;
   // const botao = document.querySelector("." + jogadores);

    const botaoSelecionadoAntes = document.querySelector(".qtd-jogadores .selecionado");

    if(botaoSelecionadoAntes !== null) {
        botaoSelecionadoAntes.classList.remove("selecionado");
    }
    
    botao.classList.add("selecionado");
}

function jogar() {
    if(nomeJogo !== "") {
        if (qtdJogadores !== "") {
            document.querySelector(".selecionar-jogo").classList.add("escondido");
            document.querySelector(".loading-overlay").classList.remove("escondido");

            const texto = `Iniciando ${nomeJogo} com ${qtdJogadores} jogadores.`;
            document.querySelector(".mensagem-iniciando").innerHTML = texto;
        }
    }
}




//Só uso o let/const uma vez, se precisar declarar novamente a variavel, posso dizer somente o nome da variável 

 // const nascimentoInteiro = parseInt(anoNascimento) // parseInt converte string em numeros inteiros
 
//const nascimentoNumero = Number(anoNascimento); // Number também converte string em número (qualquer tipo, inteiro ou decimais). Sempre que precisar fazer uma conta de soma, preciso converter a string em Number.

 // idade > 17 --> alert('Você pode jogar!')
    // idade === 17 --> alert('Você ainda NÃO pode jogar!, mas ta quase!')
    // idade < 17 --> alert('Você NÃO pode jogar!')

// Maior >
// Menor <
// Maior ou igual >= Menor ou igual <=
// Igualdade == (não é muito usado)
// Diferente != (não é muito usado)
// Igualdade (Valor e Tipo) ====
// Diferente (Valor e Tipo) !==