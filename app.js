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