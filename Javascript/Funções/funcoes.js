// funções
// bloco de código que pode ser executado e reutilizado
// agrupa uma sequência de instruções para executar uma tarefa

// estrutura de uma função

// function nomeDaFunção() {
// codigo a ser executado
// }

function aviso() {
    console.log("Bom dia T1");
    console.log("É importante treinar o conteúdo!");
}

aviso(); // executar a função

// também é possivel declarar funções dentro de variáveis

// parâmetros são entrada de dados

const info = function (nome, idade, cidade) {
    console.log(nome, idade, cidade);
};

info("Maria", "30 anos", "Rio de Janeiro");
info("Carol", "29 anos", "Ribeirão");

// argumentos são os valores que vamos enviar aos parâmetros

let nome = "Ricardo";

function mostrarNome(apelido) {
    console.log(`Meu nome é ${apelido}`);
}

mostrarNome(nome);

// return captura e mostra o resultado que precisamos
function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(5, 5));

function vitamina(fruta1, fruta2) {
    return fruta1 + fruta2;
}

const copo = vitamina("Banana", "Mamão");
console.log(copo);
