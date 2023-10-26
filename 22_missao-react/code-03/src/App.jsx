import { useState } from 'react'
import { converterCaracteres } from './service';

import './App.css'

function App() {
  const [frase, setFrase] = useState("");
  const [senha, setSenha] = useState("");

  const handleConverterFrase = (textoDigitado) => {
    setFrase(textoDigitado);
    setSenha(converterCaracteres(textoDigitado));
  };

  return (
    <div>
      <h2>Transformar Frase em Senha</h2>
      <input
        type="text"
        onChange={(event) => handleConverterFrase(event.target.value)}
        placeholder="Digite a frase"
      />
      <p>Frase: {frase}</p>
      <p>Senha: {senha}</p>
    </div>
  );
}

export default App
