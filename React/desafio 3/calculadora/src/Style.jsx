import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export const Container = styled.section`
    background-color: #DE17A5;
    border-radius: 30px;
    margin: 0 auto;
    width: 30vw;
`;

export const ConteudoPrincipal = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

export const Titulo = styled.h1`
    color: #FFFFFF;
`;

export const Input = styled.input`
    border: none;
    border-radius: 10px;
    height: 50px;
    margin: 5px;
    outline: none;
    padding: 10px;
`;

export const Botao = styled.button`
    background-color: ${(props) => props.cor};
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 20px;
    height: 50px;
    margin: 5px;
    padding: 10px;
    width: 50px;
`;

export const Resultado = styled.p`
    color: #FFFFFF;
    font-size: 20px;
    margin-top: 10px;
`;
