import React from "react";
import LaMenta from "../assets/la-menta.png";
import LaCuma from "../assets/la-cuma.png";
import LaBana from "../assets/la-bana.png";
import LaToca from "../assets/la-toca.png";

function Card() {
    return (
        <section className="pizzas">
            <div className="pizza">
                <img className="la-menta" src={LaMenta} alt="Pizza La Menta" />
                <h4>La Menta</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$23,00</h2>
                <button className="btn">Comprar agora</button>
            </div>
            <div className="pizza">
                <img className="la-cuma" src={LaCuma} alt="Pizza La Cuma" />
                <h4>La Cuma</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$23,00</h2>
                <button className="btn">Comprar agora</button>
            </div>
            <div className="pizza">
                <img className="la-bana" src={LaBana} alt="Pizza La Bana" />
                <h4>La Bana</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$23,00</h2>
                <button className="btn">Comprar agora</button>
            </div>
            <div className="pizza">
                <img className="la-toca" src={LaToca} alt="Pizza La Toca" />
                <h4>La Toca</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h2>R$23,00</h2>
                <button className="btn">Comprar agora</button>
            </div>
        </section>
    );
}

export default Card;
