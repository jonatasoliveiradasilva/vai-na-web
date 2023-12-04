import React from "react";
import Github from "../../src/Images/Github.png";
import Linkedin from "../../src/Images/Linkedin.png";
import * as S from "../../src/Styles/StyleContato";

function Contato() {
    return (
        <>
            <S.ConteudoPrincipal>
                <S.Secao>
                    <a
                        href="https://github.com/jonatasoliveiradasilva"
                        target="_blank">
                        <S.Imagem src={Github} alt="Logo do Github" />
                    </a>
                    <a
                        href="https://linkedin.com/in/jonatasoliveiradasilva"
                        target="_blank">
                        <S.Imagem src={Linkedin} alt="Logo do Linkedin" />
                    </a>
                </S.Secao>
            </S.ConteudoPrincipal>
        </>
    );
}

export default Contato;
