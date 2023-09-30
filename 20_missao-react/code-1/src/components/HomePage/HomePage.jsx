import React, { useState } from "react";
import './HomePage.css';

const HomePage = () => {
    const [randomNumber, setRandomNumber] = useState(1);

    function generateNumber() {
        const newNumber = Math.floor(Math.random() * (100 - 1) + 1);
        setRandomNumber(newNumber);
    }

    return (
        <div className="conteudo-centralizado">
            <h3>Número aleatório:</h3>
            <h1>{randomNumber}</h1>

            <div className='area-botao'>
                <label>
                    Click no botão abaixo para gerar um número aleatório:
                </label>

                <button onClick={generateNumber}>
                    Gerar número
                </button>
            </div>
        </div>
    )
}

export default HomePage;