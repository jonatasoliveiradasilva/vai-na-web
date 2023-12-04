import React from "react";
import Foto from "../../src/Images/Jonatas.jpg";
import * as S from "../../src/Styles/StyleSobre";

function Sobre() {
    return (
        <>
            <S.ConteudoPrincipal>
                <S.Container>
                    <S.Secao>
                        <p>Olá,</p>
                        <p>Eu sou o Jônatas,</p>
                        <p>Desenvolvedor Front End</p>
                    </S.Secao>
                    <figure>
                        <S.Imagem src={Foto} alt="Foto de Perfil do Jônatas" />
                    </figure>
                </S.Container>
            </S.ConteudoPrincipal>
        </>
    );
}

export default Sobre;
