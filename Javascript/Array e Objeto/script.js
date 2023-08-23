// array []

let numeros = [2, 5, 4, 1, 11];

console.log(numeros);
console.log(numeros[2], numeros[4]);

// sort

console.log (
    numeros.sort(function (x, y) {
        return x - y;
    }),
);

// array []

let pessoa = ["Carol", 29, "Pink"];

console.log(pessoa);

console.log(pessoa[0]); // indice numerado
console.log(pessoa[1]); // indice numerado
console.log(pessoa[2]); // indice numerado

// objeto {}

let objeto = {
    nome: "Chatgpt",
    profissão: "Robô",
    idade: "Desconhecida",
    moradia: "Computador",
}

console.log(objeto);

console.log(objeto.nome); // indice nomeado
console.log(objeto.profissão); // indice nomeado
console.log(objeto.idade); // indice nomeado
console.log(objeto.moradia); // indice nomeado
