import React from "react";
import { useState } from "react";

function App() {

  const [pedido, setPedido] = useState(0);

  const Brigadeiro = () => setPedido("brigadeiro");
  const Beijinho = () => setPedido("beijinho");
  const BichoDePe = () => setPedido("bicho de pé");

  const [contador, setContador] = useState(0);

  return (
    <>
      <h1>Bom dia!</h1>
      <h2>Confeitaria</h2>
      <h2>Escolha o seu pedido:</h2>
      <button onClick={Brigadeiro}>Brigadeiro</button>
      <button onClick={Beijinho}>Beijinho</button>
      <button onClick={BichoDePe}>Bicho de pé</button>
      <h3>Você escolheu {pedido}</h3>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
      <p>Cliques: {contador}</p>
    </>
  );
}

export default App;
