import React, { useState } from "react";
import * as S from "../src/Style";
import { GlobalStyle } from "../src/Global";

function App() {

  const [contador, setContador] = useState(0);

  return (
    <S.Main>
      <GlobalStyle />
      <S.H1>Contador</S.H1>
      <h2>{contador}</h2>
      <section>
        <S.Button onClick={() => setContador(contador + 1)}>Adicionar</S.Button>
        <button onClick={() => setContador(contador - 1)}>Diminuir</button>
        <button onClick={() => setContador(0)}>Resetar</button>
      </section>
    </S.Main>
  );
}

export default App;
