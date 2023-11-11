import React from "react";
import Fantasias from "../src/Components/Fantasias";
import Filmes from "../src/Components/Filmes";
import Sobre from "../src/Components/Sobre";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Halloween</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Fantasias</Link></li>
            <li><Link to="/filmes">Filmes</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Fantasias />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
