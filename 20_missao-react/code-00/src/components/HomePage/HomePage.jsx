import './HomePage.css';
import { useState } from 'react';

const HomePage = () => {
    const num = Math.floor(Math.random() * 101)
    const [randomNumber, setRandomNumber] = useState(num)

    const generateNumber = () => setRandomNumber(Math.floor(Math.random() * 101))

    const sumFunction = () => setRandomNumber(randomNumber + 1)

    const subFunction = () => setRandomNumber(randomNumber - 1)

    return (
        <div className="conteudo-centralizado">
            <h3>Número aleatório:</h3>
            <h1>{randomNumber}</h1>

            <div className='area-botao'>
                <label>
                    Click no botão abaixo para gerar um número aleatório:
                </label>
                <div className='botoes'>
                    <button onClick={subFunction}>
                        -
                    </button>
                    <button onClick={generateNumber}>
                        Generate
                    </button>

                    <button onClick={sumFunction}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;