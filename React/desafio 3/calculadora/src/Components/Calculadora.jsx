import React, { useState } from "react";
import * as S from "../Style";

function Calculadora() {

    const [primeiroNumero, setPrimeiroNumero] = useState();
    const [segundoNumero, setSegundoNumero] = useState();

    const [resultado, setResultado] = useState();

    const pegarPrimeiroNumero = (e) => {
        setPrimeiroNumero(Number(e.target.value));
    }

    const pegarSegundoNumero = (e) => {
        setSegundoNumero(Number(e.target.value));
    }

    const soma = () => {
        setResultado(primeiroNumero + segundoNumero);
    }

    const subtracao = () => {
        setResultado(primeiroNumero - segundoNumero);
    }

    const multiplicacao = () => {
        setResultado(primeiroNumero * segundoNumero);
    }

    const divisao = () => {
        setResultado(primeiroNumero / segundoNumero);
    }

    const modulo = () => {
        setResultado(primeiroNumero % segundoNumero);
    }

    const potencia = () => {
        setResultado(primeiroNumero ** segundoNumero);
    }

    return (
        <S.Container>
            <S.ConteudoPrincipal>
                <S.GlobalStyle />
                <S.Titulo>Calculadora</S.Titulo>
                <S.Input onChange={pegarPrimeiroNumero} placeholder="Digite o primeiro número:" />
                <S.Input onChange={pegarSegundoNumero} placeholder="Digite o segundo número:" />
                <div>
                    <S.Botao cor="red" onClick={soma}>+</S.Botao>
                    <S.Botao cor="blue" onClick={subtracao}>-</S.Botao>
                    <S.Botao cor="orange" onClick={multiplicacao}>*</S.Botao>
                </div>
                <div>
                    <S.Botao cor="purple" onClick={divisao}>/</S.Botao>
                    <S.Botao cor="yellow" onClick={modulo}>%</S.Botao>
                    <S.Botao cor="green" onClick={potencia}>**</S.Botao>
                </div>
                <S.Resultado>{resultado}</S.Resultado>
            </S.ConteudoPrincipal>
        </S.Container>
    );
}

export default Calculadora;
