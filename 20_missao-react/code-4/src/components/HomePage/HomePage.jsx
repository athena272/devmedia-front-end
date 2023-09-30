import React, { useState } from "react";
import './HomePage.css';

const HomePage = () => {
    const num = Math.floor(Math.random() * 101)
    const [randomNumber, setRandomNumber] = useState(num);

    const sumFunction = () => {
        setRandomNumber(randomNumber + 1);
    };

    const subFunction = () => {
        setRandomNumber(randomNumber - 1);
    };

    return (
        <div className="conteudo-centralizado">
            <h3>Número aleatório:</h3>
            <h1>{randomNumber}</h1>

            <div className='area-botao'>
                <label>
                    Click no botão abaixo para gerar um número aleatório:
                </label>

                <button onClick={sumFunction}>
                    ++
                </button>

                <button onClick={subFunction}>
                    --
                </button>
            </div>
        </div>
    )
}

export default HomePage;