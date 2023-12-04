// import React from "react";

import Git from "../../src/Images/Git.png";
import Github from "../../src/Images/Github.png";
import Html from "../../src/Images/HTML.png";
import Css from "../../src/Images/CSS.png";
import Javascript from "../../src/Images/Javascript.webp";
import React from "../../src/Images/React.png";
import Sass from "../../src/Images/SASS.png";
import StyledComponents from "../../src/Images/Styled-Components.png";
import * as S from "../../src/Styles/StyleHabilidades";

function Habilidades() {
    return (
        <>
            <S.ConteudoPrincipal>
                <S.Secao>
                    <figure>
                        <S.Imagem src={Git} alt="Logo do Git" />
                        <S.Imagem src={Github} alt="Logo do Github" />
                        <S.Imagem src={Html} alt="Logo do HTML" />
                        <S.Imagem src={Css} alt="Logo do CSS" />
                    </figure>
                    <figure>
                        <S.Imagem src={Javascript} alt="Logo do Javascript" />
                        <S.Imagem src={React} alt="Logo do React" />
                        <S.Imagem src={Sass} alt="Logo do SASS" />
                        <S.Imagem src={StyledComponents} alt="Logo do Styled Components" />
                    </figure>
                </S.Secao>
            </S.ConteudoPrincipal>
        </>
    );
}

export default Habilidades;
