const grade = 59;
let message = '';

if (grade >= 80) {
    message = "Parabéns você foi aprovado!";
} else if (grade >= 60 && grade <80) {
    message = "Você está na nossa lista de espera";
} else{
    message = "Você foi reprovado.";
};

console.log(message);