// Desafios: hora da prática
// Desafio 1: Altere o conteúdo da tag h1 com document.querySelector
const titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Não estava no desafio, quis mudar para seguir corretamente o Desafio 2
const botao1 = document.querySelector('button');
botao1.innerHTML = 'Console';

// Não estava no desafio, quis mudar para seguir corretamente o Desafio 3
const botao2 = document.getElementById('reiniciar');
botao2.innerHTML = 'Alerta';

// Desafio 2: Crie uma função que exiba no console a mensagem "O botão foi clicado" sempre que o botão Console for pressionado
function verificarChute() {
    console.log('O botão foi clicado');
}

// Desafio 3: Crie uma função que exiba um alerta com a mensagem "Eu amo JS", sempre que o botão Alerta for pressionado
function exibirAlerta() {
    alert('Eu amo JS');
}

/* Desafio 4: Crie uma função que é executada quando o botão Prompt é clicado, perguntando o nome de uma cidade do Brasil.
Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: "Estive em {cidade} e lembrei de você." */
const botao3 = document.getElementById('botao3');
botao3.innerHTML = 'Prompt';

function exibirPrompt() {
    const cidade = prompt('Em qual cidade do Brasil você esteve?');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

// Desafio 5: Ao clicar no botão Soma, peça 2 números inteiros e exiba o resultado da soma em um alerta
const botao4 = document.getElementById('botao4');
botao4.innerHTML = 'Soma';

function exibirSoma() {
    const numero1 = parseInt(prompt('Insira o número inteiro A: '));
    const numero2 = parseInt(prompt('Insira o número inteiro B: '));
    const soma = numero1 + numero2;
    alert(`O resultado da soma dos números ${numero1} e ${numero2} é ${soma}`);
}