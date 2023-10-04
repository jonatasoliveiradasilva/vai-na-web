import React from "react";
import { useState } from "react";

function App() {

  const [contador, setContador] = useState(0);

  const Adicionar = () => setContador(contador + 1);
  const Diminuir = () => setContador(contador - 1);

  const Resetar = () => setContador(0);

  return (
    <>
      <button onClick={Adicionar}>Adicionar</button>
      <button onClick={Diminuir}>Diminuir</button>
      <button onClick={Resetar}>Resetar</button>
      <p>Cliques: {contador}</p>
    </>
  );
}

export default App;
