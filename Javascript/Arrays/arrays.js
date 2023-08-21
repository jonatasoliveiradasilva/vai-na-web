// o que são arrays?

// - estrutura para armazenar um conjunto de dados
// - listas que podem receber vários métodos
// - variável especial que pode conter mais de um valor

// cada elemento no array possui uma posição numerada conhecida como index (indice/posição) sempre iniciado em 0

let nomes = ["Maria", "Luiz", "Dafne", "Débora"];

console.log(nomes); // retorna todo o array

console.log(nomes[0]); // retorna um index (indice/posição) específico
console.log(nomes[1]); // retorna um index (indice/posição) específico
console.log(nomes[2]); // retorna um index (indice/posição) específico
console.log(nomes[3]); // retorna um index (indice/posição) específico

console.log(nomes.length); // length (retorna o comprimento/tamanho do array)



let compras = ["Feijão", "Arroz", "Macarrão", "Café", "Ovos"];

compras[1] = "Batata"; // reatribuindo um valor

console.log(compras);



// métodos de arrays

compras.push("Pão", "Batata Palha"); // adiciona um elemento no final do array
compras.unshift("Miojo"); // adiciona um elemento no inicio do array
compras.pop(); // remove o último elemento do array ("Batata Palha")

let removido = compras.pop();
console.log(removido); // visualizar qual foi o último elemento que o .pop() removeu

compras.shift(); // remove o primeiro elemento do array ("Miojo")



let numeros = [1, 5, 9, 7, 6];

console.log(numeros);

numeros.reverse(); // ordem inversa do array
numeros.sort(); // ordena os números em ordem crescente
