import React from "react";
import { useState } from "react";

function App() {

  const [contador, setContador] = useState(0);

  const Adicionar = () => setContador(contador + 1);
  const Diminuir = () => setContador(contador - 1);

  // if (contador < 0 || contador > 10) {
  //   setContador(0);
  // }

  if (contador < 0) {
    setContador(0);
  }

  if (contador > 10) {
    setContador(10);
  }

  return (
    <>
      <button onClick={Adicionar}>Adicionar</button>
      <button onClick={Diminuir}>Diminuir</button>
      <p>Cliques: {contador}</p>
    </>
  );
}

export default App;
