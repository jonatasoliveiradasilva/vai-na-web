import React from "react";
import Header from "../src/Components/Header";
import Inicio from "../src/Components/Inicio";
import Sobre from "../src/Components/Sobre";
import Curso from "../src/Components/Curso";
import Habilidades from "../src/Components/Habilidades"
import Projetos from "../src/Components/Projetos";
import Contato from "../src/Components/Contato";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../src/Styles/Global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/curso" element={<Curso />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
