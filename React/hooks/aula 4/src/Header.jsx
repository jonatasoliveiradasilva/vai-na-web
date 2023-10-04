import React from "react";
import "../src/HeaderStyle.css";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Endereço</li>
                    </ul>
                </nav>
            </header>
            <p>Eu sou um componente</p>
        </>
    );
}

export default Header;
