// condicionais é a forma que o computador toma decisões

// if e else (se & senão)

// if (condição) {código que vai ser executado} (caso seja "true")
// else {código que vai ser executado} (caso seja "false")

let maiorDeIdade = true;

if (maiorDeIdade) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}



// Operadores de Comparação

// = atribuição (let nome = "Jônatas")
// == comparar valores (a == b)
// === comparar o tipo e o valor (a === b)
// != diferente (1 != 2 / (true))
// !== diferente o tipo e o valor (0 !== "1")
// > maior (2 > 3 (false))
// < menor (2 < 3 (true))
// >= maior e/ou igual (10 >= 10 (true) não é maior, mas é igual)
// <= menor e/ou igual (10 <= 10 (true) não é menor, mas é igual)



let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

if (idade >= 18) {
    console.log("Você é maior de idade");
} else if (idade < 18) {
    console.log("Você é menor de idade");
}



let saldoBancario = 50;

if (saldoBancario >= 50) {
    console.log("Vou comer uma pizza!");
} else if (saldoBancario >= 20) {
    console.log("Vou na praça comer um lanche!");
} else if (saldoBancario < 20) {
    console.log("Não vou sair de casa, estou com pouco dinheiro :(");
}
