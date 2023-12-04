import styled from "styled-components";

export const Cabecalho = styled.header`
    align-items: center;
    background-color: #BC7AF9;
    display: flex;
    height: 15vh;
    justify-content: center;
`;

export const Navegacao = styled.ul`
    
    display: flex;
    font-family: "Inconsolata", monospace;
    font-weight: bold;
    justify-content: space-around;
    list-style: none;
    width: 100vw;

    a {
        color: #FFFFFF;
        font-size: 30px;
        text-decoration: none;
    }
`;
