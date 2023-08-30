// array []
// lista de dados
// coleção de dados
// estrutura que você pode armazenar mais de um dado
// array é acessado pelo index (indice/posição)

let numero = [1, 2, 5, 8];
console.log(numero);

// objeto {}
// coleção de propriedades
// nome (chave): valor;
// objeto é acessado pelo nome (chave)

let salada = {
    ingrediente: "Tomate",
}

console.log(salada);

// array com objeto

let playYoutube = [

    {
        nome: "José",
        idade: 70,
        gostoMusical: ["Blues", "Jazz", "Hip-Hop"]
    },
    {
        nome: "Manoela",
        idade: 32,
        gostoMusical: ["K-pop", "Axé", "Pagode"]
    }
];

console.log(`${playYoutube[1].nome} gosta de ${playYoutube[1].gostoMusical[0]}`);

playYoutube.push({
    nome: "Tatiana",
    idade: 47,
    gostoMusical: ["Gospel", "Sertanejo", "Música Clássica"]
});

console.log(playYoutube);

// laços de repetição
// loops
// for

// retorna números de 0 a 10
for (let contador = 0; contador <= 10; contador++) {
    console.log(contador);
}

// retorna números de 10 a 0
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// retorna números pares até 12
for (let j = 2; j <= 12; j += 2) {
    console.log(j);
}

// retorna números de 10 em 10 até 100
for (let k = 10; k <= 100; k += 10) {
    console.log(k);
}

// função

function corFavorita(cor) {
    
    if (cor === "azul") {
        return "Você gosta do céu!";
    } else if (cor === "verde") {
        return "Você gosta de mato!";
    } else {
        return "Você gosta de outra cor!";
    }
}

console.log(corFavorita("amarelo"));
console.log(corFavorita("azul"));
