
let jogador1 = 'papel';
let jogador2 = 'papel';
let jogo = ['pedra', 'papel', 'tesoura'];
let resultado = '';

if ((jogador1 === 'pedra' && jogador2 === 'tesoura') || (jogador1 === 'tesoura' && jogador2 === 'papel') || (jogador1 === 'papel' && jogador2 === 'pedra')) {
    resultado = 'Jogador 1 venceu';
} else if ((jogador2 === 'pedra' && jogador1 === 'tesoura') || (jogador2 === 'tesoura' && jogador1 === 'papel') || (jogador2 === 'papel' && jogador1 === 'pedra')) {
    resultado = 'Jogador 2 venceu';
} else {
    resultado = 'Empate';
}

console.log(resultado);
