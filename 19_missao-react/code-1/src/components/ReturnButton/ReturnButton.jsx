import React from 'react';
import { Link } from 'react-router-dom';
import './ReturnButton.css';

const ReturnButton = () => (
  <div className="area-botao">
    <Link className="botao-voltar" to='/'>Voltar</Link>
  </div>
);

export default ReturnButton;