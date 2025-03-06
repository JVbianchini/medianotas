// Função que calcula a média e mostra a situação do aluno
function calcularMedia() {
    // Criando o scanner para ler a entrada do usuário
    const prompt = require('prompt-sync')(); // Necessário para ler a entrada do usuário no Node.js

    // Lendo as notas
    const nota1 = parseFloat(prompt("Digite a nota 1: "));
    const nota2 = parseFloat(prompt("Digite a nota 2: "));

    // Verifica se as notas são válidas
    if (isNaN(nota1) || isNaN(nota2)) {
        console.log("Por favor, insira notas válidas.");
        return;
    }

    // Calculando a média
    const media = (nota1 + nota2) / 2;

    // Exibindo a média
    console.log("Média:", media.toFixed(1));

    // Condicional para determinar a situação do aluno
    if (media >= 7) {
        console.log("Situação: Aprovado");
    } else if (media >= 5) {
        console.log("Situação: Recuperação");
    } else {
        console.log("Situação: Reprovado");
    }
}

// Chamando a função
calcularMedia();
