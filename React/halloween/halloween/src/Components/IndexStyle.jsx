import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        background-color: #800080;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export const Titulo = styled.h1`
    font-weight: normal;
    margin-top: 50px;
    text-align: center;
`;

export const Secao = styled.section`
    align-items: center;
    display: flex;
    height: 75vh;
    justify-content: center;
`;

export const Figura = styled.figure`
    margin: 10px;
`;

export const Img = styled.img`
    background-color: yellow;
    border-radius: 10px;
    height: 35vh;
    padding: 20px;
`;

export const Nomes = styled.figcaption`
    font-size: 25px;
    margin-top: 10px;
    text-align: center;
`;
