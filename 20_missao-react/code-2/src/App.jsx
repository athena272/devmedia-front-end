import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [newText, setNewText] = useState()

  function changeText() {
    setNewText("Hoya, World!")
  }

  function clearText() {
    setNewText('')
  }

  return (
    <div className='App'>
      <div className="conteudo-centralizado" >
        <div className="area-texto">
          <h2>{newText}</h2>
        </div>
        <div className='area-botao'>
          <label>
            Click no botão abaixo para aparecer um texto:
          </label>
          <button onClick={changeText}>
            Gerar texto

          </button>
          <button onClick={clearText}>
            Limpar texto
          </button>
        </div>
      </div >
    </div>
  );
}

export default App;
