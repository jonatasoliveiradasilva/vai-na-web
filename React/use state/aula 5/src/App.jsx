import { useState } from "react";
import Header from "../src/Components/Header";
import Teste from "../src/Components/Teste";
import "../src/index.css";

// useState é uma função do React

function App() {

  const [contador, setContador] = useState(0);

  return (
    <>
      <Header></Header>
      <p>Você clicou {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Clique</button>
      <h1>Oi</h1>
      <Teste></Teste>
    </>
  );
}

export default App;
