import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: gold;
  border: none;
  padding: 20px;
  margin: 5px;
  border-radius: 30px;
  font-size: 18px;
`;

function Contador() {

    const [numero, setNumero] = useState(0);

    const Adicionar = () => {
        if (numero < 10) {
            setNumero(numero + 1);
        }
    }

    const Diminuir = () => {
        if (numero > 0) {
            setNumero(numero - 1);
        }
    }

    const Zerar = () => {
        setNumero(0);
    }

    return (
        <main>
            <h2>{numero}</h2>
            <Button onClick={Adicionar}>+</Button>
            <Button onClick={Diminuir}>-</Button>
            <Button onClick={Zerar}>Resetar</Button>
        </main>
    );
}

export default Contador;
