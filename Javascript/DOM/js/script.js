// getElementById
let textoTraducao = document.getElementById("traducao");
console.log(textoTraducao);

textoTraducao.style.backgroundColor = "gold";

// getElementsByTagName
const nomesTag = document.getElementsByTagName("p");
console.log(nomesTag);

nomesTag[0].style.color = "red";

// getElementsByClassName
let nomeClass = document.getElementsByClassName("texto");
console.log(nomeClass);

// querySelector
const meuTitulo = document.querySelector("h2");
console.log(meuTitulo);

meuTitulo.style.textAlign = "center";



let numero = document.querySelector("h3");
console.log(numero);

let contador = 0;

function incrementar() {
    contador += 1;
    numero.innerHTML = contador;
}

incrementar();

function decrementar() {
    contador -= 1;
    numero.innerHTML = contador;
}

decrementar();

function resetar() {
    let contador = 0;
    numero.innerHTML = contador;
}

resetar();
