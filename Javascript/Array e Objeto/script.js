// array []

let numeros = [2, 5, 4, 1, 11];

console.log(numeros);
console.log(numeros[2], numeros[4]);

// sort

console.log(
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



// array []
// é uma coleção de dados
// em um array podemos armazenar vários dados
// acesssar o array pelo index (indice/posição)

let lista = ["Caneta Vermelha", "Marcadores Coloridos", "Cadernos"];
console.log(lista);

console.log(lista.includes("Cadernos"));
// vai procurar se "cadernos" está incluido no array
// retorna (true/false)

console.log(lista.indexOf("Cadernos"));
// retorna a posição de "cadernos"

// quando colocamos o nome do array e o . ele vai mostrar vários métodos que podemos usar



// objeto {}
// coleção de propriedades
// propriedades são divididas em chave e valor

let listaCompras = {
    caneta: "Vermelha",
    marcadores: "Coloridos",
}

console.log(listaCompras);

let funcionario = {
    nome: "Roberto",
    salário: 3000,
    função: "Gerente",
    matricula: 45,
};

console.log(funcionario);

// para remover uma propriedade no objeto
delete funcionario.matricula;
console.log(funcionario);

let cadastro = [
    {
        nome: "Kleber",
        idade: 22,
        profissão: "Facilitador Front End"
    },
    {
        nome: "Grazy",
        idade: 40,
        profissão: "Facilitadora Front End"
    },
    {
        nome: "Carol",
        idade: 29,
        profissão: "Instrutora Front End"
    }
];

console.log(cadastro);
console.log(cadastro[2]);
console.log(cadastro[2].profissão);

console.log(`${cadastro[0].nome} gosta de jogar video game!`);
