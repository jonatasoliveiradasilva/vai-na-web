// setTimeout();

// é uma função que espera determinado tempo para ser executada

// setTimeout(função, tempo em milisegundos)
// apenas uma vez

setTimeout(function () {
    console.log("Olá eu sou o setTimeout");
}, 7000);

// setInterval();

// setInterval(função, time)
// ele vai fazer várias vezes (loop)

const teste = setInterval(function () {
    console.log("Eu sou o setInterval");
}, 1000);

setTimeout(function () {
    console.log("Para o setInterval!");
    clearInterval(teste);
}, 8000);
