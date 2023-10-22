import React, { useState } from "react";
import Bruxa from "../assets/bruxa.png";
import Fada from "../assets/fada.png";
import Fantasma from "../assets/fantasma.png";
import Pirata from "../assets/pirata.png";
import Vampiro from "../assets/vampiro.png";
import Zumbi from "../assets/zumbi.png"
import * as S from "../../src/Components/IndexStyle";

function Index() {

    const [monstro, setMonstro] = useState([

        {
            imagem: Bruxa,
            nome: "Bruxa",
        },
        {
            imagem: Fada,
            nome: "Fada",
        },
        {
            imagem: Fantasma,
            nome: "Fantasma"
        },
        {
            imagem: Pirata,
            nome: "Pirata",
        },
        {
            imagem: Vampiro,
            nome: "Vampiro"
        },
        {
            imagem: Zumbi,
            nome: "Zumbi",
        },
    ]);

    return (
        <main>
            <S.GlobalStyle />
            <S.Titulo>Halloween Vai na Web</S.Titulo>
            <S.Secao>
                {
                    monstro.map((item) => (
                        <S.Figura>
                            <S.Img src={item.imagem} alt={item.nome} />
                            <S.Nomes>{item.nome}</S.Nomes>
                        </S.Figura>
                    ))
                }
            </S.Secao>
        </main>
    );
}

export default Index;
