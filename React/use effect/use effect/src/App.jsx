import React, { useState, useEffect } from "react";

// hooks => (funções do react)
// useState => (gerenciamento de estados)
// useEffect => (gerenciamento de efeitos colaterais)
// hook fofoqueiro => (observa, monitora e dispara efeitos colaterais)

function App() {

  // estrutura do useEffect
  // recebe 2 parâmetros (função de callback (arrow function) e array de dependências)

  // exemplo sem o array de dependências
  // qualquer mudança vai ativá-lo
  
  // useEffect(() => {
  //   alert("Oi! Eu sou o useEffect");
  //   o código que vai ser executado
  // });

  // o useEffect com o array de dependências vazio
  
  // useEffect(() => {
  //   alert("Eu sou o efeito colateral");
  // }, []);

  // estrutura do useState
  const [nome, setNome] = useState("Jônatas");

  const alterarNome = () => {
    if (nome === "Jônatas") {
      setNome("Danilo");
    } else {
      setNome("Jônatas");
    }
  }

  const [animal, setAnimal] = useState("Galo");

  // useEffect(() => {
  //   alert("Eu sou o efeito colateral");
  // }, [nome]);

  const alterarAnimal = () => {
    setAnimal(animal === "Galo" ? "Pinscher" : "Galo");
    // operador ternário
  }

  return (
    <>
      <h1>{nome}</h1>
      <button onClick={alterarNome}>Trocar nome</button>
      <h2>{animal}</h2>
      <button onClick={alterarAnimal}>Trocar animal</button>
    </>
  );
}

export default App;
// exportando por padrão App
