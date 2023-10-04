import { useState } from "react";

function Teste() {

    const [comida, setComida] = useState("pizza");

    return (
        <section>
            <p>Eu amo {comida}</p>
            <button onClick={() => setComida("risole")}>Clique aqui</button>
        </section>
    );
}

export default Teste;
