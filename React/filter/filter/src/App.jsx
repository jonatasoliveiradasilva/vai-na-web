import React, { useState } from "react";

function App() {

  const [informacaoFiltrada, setInformacaoFiltrada] = useState([]);

  const informacoes = [

    {
      produto: "Cuscuz",
      preco: 2,
    },
    {
      produto: "Detergente",
      preco: 1,
    },
    {
      produto: "Leite",
      preco: 4,
    },
    {
      produto: "Nescau",
      preco: 8,
    },
    {
      produto: "Café",
      preco: 3,
    },
  ];

  const precoPromocional = () => {
    setInformacaoFiltrada(informacoes.filter((elemento) => {
      return elemento.preco < 4;
    }));
  }

  return (
    <main>
      <h1>Mercado</h1>
      <button onClick={precoPromocional}>Promoções</button>
      {
        informacaoFiltrada.map((item) => (
          <ul>
            <li>{item.produto}</li>
            <li>{item.preco}</li>
          </ul>
        ))
      }
    </main>
  );
}

export default App;
