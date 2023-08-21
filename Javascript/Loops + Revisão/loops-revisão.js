// estrutura da variável
// palavra chave + nomeDaVariavel = valor;

let diaEnsolarado = false;
console.log(typeof diaEnsolarado);



// tipo de dado boolean (true e false)

// condicionais javascript
// tomada de decisão
// if/else (se/senão)

// if (condição) {console.log("mensagem")}

if (diaEnsolarado) {
    console.log("Vamos a piscina!");
} else {
    console.log("Estudar javascript!");
}



// login

let usuario = "@mariaD";
let senhaDaMaria = 123;

if (usuario === "@mariaD" && senhaDaMaria === 2023) {
    console.log("LOGADO!");
} else {
    console.log("Senha incorreta! tente novamente!");
}



// nesse caso em um site teremos um input para uma pessoa digitar o número da sorte
// pegamos o valor desse input e guardamos nessa variável

let numeroDaSorte = 10;

if (numeroDaSorte === 7) {
    console.log("Parabéns você acertou!");
} else if (numeroDaSorte === 1) {
    console.log("Errou! tá longe!");
} else if (numeroDaSorte === 2) {
    console.log("Errou não é o numero 2");
} else {
    console.log("Tente novamente, você está quase lá!");
}



// operador lógico || (OU)

let temperatura = 38;

if (temperatura > 39) {
    console.log("Febre alta");
} else if (temperatura >= 37 || temperatura >= 38) {
    console.log("Febre moderada");
} else {
    console.log("Sem febre");
}

// operador lógico ! (NOT)

let quartaFeira = true;
console.log(!quartaFeira);



// loops são laços de repetição
// a forma do computador executar várias vezes uma atividade

console.log(1);
console.log(2);
console.log(3);



// estrutura for

// dentro dos parenteses vamos passar 3 expressões

// inicializador que é a variável com um valor inicial

// condição de saída (condição para algo acontecer)

// incremento ou decremento

for (let i = 0; i <= 10; i++) {
    console.log(i);
}



let pratoDoDia = "salada";

// aqui estamos utilizando o operador diferente que está verificando se o valor "salada" é diferente de "churrasco"
// como são valores diferentes irá mostrar no console.log("estou muito triste :(")

if (pratoDoDia != "churrasco") {
    console.log("Estou muito triste :(");
}
