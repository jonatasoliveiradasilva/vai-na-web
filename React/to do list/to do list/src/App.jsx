import React, { useState } from "react";

function App() {

  const [tarefaInput, setTarefaInput] = useState("");

  // o evento é a ação no input
  // target (alvo) é o input
  // value (valor) é o que é digitado dentro do input
  const capturandoTarefa = (evento) => {
    setTarefaInput(evento.target.value);
  }

  const [tarefas, setTarefas] = useState([]);

  const tarefasGuardadas = () => {
    setTarefas(tarefas.concat(tarefaInput));
  }

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <input type="text" onChange={capturandoTarefa} />
      <button onClick={tarefasGuardadas}>Adicionar</button>
      {
        tarefas.map((elemento) => (
          <ul>
            <li>{elemento}</li>
          </ul>
        ))
      }
    </main>
  );
}

export default App;
