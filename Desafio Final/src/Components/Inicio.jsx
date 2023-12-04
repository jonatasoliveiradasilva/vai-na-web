import React from "react";
import Sobre from "../../src/Components/Sobre";
import Curso from "../../src/Components/Curso";
import Habilidades from "../../src/Components/Habilidades";
import Projetos from "../../src/Components/Projetos";
import Contato from "../../src/Components/Contato";

function Inicio() {
    return (
        <>
            <Sobre />
            <Curso />
            <Habilidades />
            <Projetos />
            <Contato />
        </>
    );
}

export default Inicio;
