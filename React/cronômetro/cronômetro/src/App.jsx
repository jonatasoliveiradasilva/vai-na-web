import React, { useState } from "react";

function App() {

  const [numero, setNumero] = useState(0);

  const [intervalId, setIntervalId] = useState();

  const Iniciar = () => {
    const iniciandoContagem = setInterval(() => {
      setNumero((numero) => numero + 1);
    }, 1000);

    setIntervalId(iniciandoContagem);
  };

  const Parar = () => {
    clearInterval(intervalId);
  };

  return (
    <main>
      <h1>Cronômetro</h1>
      <h2>{numero}</h2>
      <button onClick={Iniciar}>Iniciar</button>
      <button onClick={Parar}>Parar</button>
    </main>
  );
}

export default App;
