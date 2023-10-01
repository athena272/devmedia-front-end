import { Link } from 'react-router-dom';
import './Header.css';

const Topo = () => (
    <header className="topo">
    <div className="topo-conteudo">
      <Link className="topo-logo-box" to="/">
        <img className="topo-logo" src="assets/dente.png" alt="logo dentes saudáveis" title="logo dentes saudáveis"/>
        <p className="topo-nome-empresa">Dentes Saudáveis</p>
      </Link>

      <nav className="topo-links">
        <Link className="topo-link" to="/">Home</Link>
        <Link className="topo-link" to="/contact">Contato</Link>
      </nav>
    </div>
  </header>  
)

export default Topo;