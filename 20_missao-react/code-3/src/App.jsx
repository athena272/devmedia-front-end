import React, { useState } from 'react';
import './App.css';

const App = () => {
  const colorRedStyle = "bg-vermelho";
  const colorBlueStyle = "bg-azul";

  const [updateColor, setUpdateColor] = useState(true);

  function changeColor() {
    setUpdateColor(!updateColor)
  }

  return (
    <div className="display">
      <div className="container">
        <h2>Altere o estilo do elemento</h2>
        <div className={updateColor ? colorRedStyle : colorBlueStyle}></div>
        <p>Clique no botão abaixo para alterar a cor do elemento.</p>
        <button onClick={changeColor}>Clique aqui</button>
      </div>
    </div>
  );
}

export default App;
