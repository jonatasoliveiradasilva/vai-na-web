import React from "react";
import { Link } from "react-router-dom";
import * as S from "../../src/Styles/StyleHeader";

function Header() {
    return (
        <S.Cabecalho>
            <nav>
                <S.Navegacao>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/curso">Curso</Link>
                    </li>
                    <li>
                        <Link to="/habilidades">Habilidades</Link>
                    </li>
                    <li>
                        <Link to="/projetos">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </S.Navegacao>
            </nav>
        </S.Cabecalho>
    );
}

export default Header;
