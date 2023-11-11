import React from "react";
import Home from "../src/Components/Home";
import Animacao from "../src/Components/Animacao";
import Produtos from "../src/Components/Produtos";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/animacao">Animação</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animacao" element={<Animacao />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
