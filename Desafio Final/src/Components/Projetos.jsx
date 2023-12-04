import React from "react";
import Simpsons from "../../src/Images/Simpsons.png";
import Filmes from "../../src/Images/Filmes.png";
import ProjetoVermelho from "../../src/Images/Projeto-Vermelho.png";
import Calculadora from "../../src/Images/Calculadora.png";
import Halloween from "../../src/Images/Halloween.png";
import * as S from "../../src/Styles/StyleProjetos";

function Projetos() {
    return (
        <>
            <S.ConteudoPrincipal>
                <S.Secao>
                    <a href="#" target="_blank">
                        <S.Imagem src={Simpsons} alt="Os Simpsons" />
                    </a>
                    <a href="#" target="_blank">
                        <S.Imagem src={Filmes} alt="Filmes" />
                    </a>
                    <a href="#" target="_blank">
                        <S.Imagem src={ProjetoVermelho} alt="Projeto Vermelho" />
                    </a>
                    <a href="#" target="_blank">
                        <S.Imagem src={Calculadora} alt="Calculadora" />
                    </a>
                    <a href="#" target="_blank">
                        <S.Imagem src={Halloween} alt="Halloween" />
                    </a>
                </S.Secao>
            </S.ConteudoPrincipal>
        </>
    );
}

export default Projetos;
