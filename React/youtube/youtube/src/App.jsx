import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Modal = styled.section`
  background-color: gold;
  border: 3px solid orangered;
  border-radius: 20px;
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
`;

const Botao = styled.button`
  background-color: purple;
  border: none;
  border-radius: 30px;
  color: #FFFFFF;
  cursor: pointer;
  padding: 10px;
`;

function App() {

  const [showModal, setShowModal] = useState(false);

  // hook => (função do react)
  // useEffect => (gerenciamento de efeitos)
  // estrutura do useEffect => (useEffect(função (arrow function), [array de dependências]));

  // useEffect com a função e sem o array de dependências
  // useEffect(() => {
  //   alert("useEffect com a função e sem o array de dependências");
  // });

  // useEffect com a função e com o array de dependências vazio
  useEffect(() => {
    // alert("useEffect com a função e com o array de dependências vazio");
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, []);

  // useEffect com a função e o array de dependências
  // useEffect(() => {
  //   alert();
  // }, []);

  const fecharModal = () => {
    setShowModal(false);
  }

  return (
    <main>
      {
        showModal && (
          <Modal>
            <Botao onClick={fecharModal}>x</Botao>
            <h2>Atenção eu sou um modal</h2>
            <h3>Se inscreva no nosso canal</h3>
            <h3>Deixe o seu like</h3>
            <Botao>Clique aqui e seja um youtuber</Botao>
          </Modal>
        )
      }
      <h1>Youtube</h1>
      <section>
        <iframe width="560"
          height="315"
          src="https://www.youtube.com/embed/h0GX3hHSoqk?si=i9eEtp8Mea1M81CP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0Z1TdVO9vXI?si=9nrfcmtZ4f-iMA_b"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </section>
    </main>
  );
}

export default App;
