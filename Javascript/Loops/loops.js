// loops são estruturas de repetição

let numero = 1;

console.log(numero + 1); // 2
console.log(numero + 2); // 3

// atribuição simples

let saldo = 100;

// operadores de atribuição

// += atribuição de adição (atribui e soma um valor a uma variável)
console.log((saldo += 100));

// -= atribuição de subtração (atribui e subtrai um valor a uma variável)
console.log((saldo -= 50));

// *= atribuição de multiplicação (atribui e multiplica um valor a uma variável)
console.log((saldo *= 2));

// /= atribuição de divisão (atribui e divide um valor a uma variável)
console.log((saldo /= 2));



// ++ incremento (valor da variável + 1)
// -- decremento (valor da variável - 1)



// for

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// while

let contador = 0;

while (contador < 12) {
    contador++;
    console.log(`${contador}`);
}

// do while

let n = 0;

do {
    console.log(`${n}`);
    n++;
} while (n < 10);
