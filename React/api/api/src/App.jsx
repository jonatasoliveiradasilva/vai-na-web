import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [dados, setDados] = useState([]);

  const getDados = async () => {
    const dados = await axios.get("https://rickandmortyapi.com/api/character");
    setDados(dados.data.results);
    console.log(dados);
  }

  useEffect(() => {
    getDados();
  }, []);

  return (
    <>
      <h1>A API The Ricky and Morty</h1>
      {
        dados.map((item) => (
          <figure>
            <img src={item.image} alt="" />
            <figcaption>{item.name}</figcaption>
          </figure>
        ))
      }
    </>
  );
}

export default App;
