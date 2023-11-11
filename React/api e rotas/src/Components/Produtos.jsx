import React, { useState, useEffect } from "react";
import axios from "axios";

function Produtos() {
    
    const [produtos, setProdutos] = useState([]);

    const pegarProdutos = async () => {
        const dados = await axios.get("https://fakestoreapi.com/products");
        setProdutos(dados.data);
        console.log(dados);
    };

    useEffect(() => {
        pegarProdutos();
    }, []);

    return (
        <>
            <h2>Loja de Produtos</h2>
            {
                produtos.map((item) => (
                    <figure>
                        <img src={item.image} alt="" />
                        <figcaption>{item.title}</figcaption>
                    </figure>
                ))
            }
        </>
    );
}

export default Produtos;
