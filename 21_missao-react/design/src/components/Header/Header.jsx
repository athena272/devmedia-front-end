import PropTypes from 'prop-types';
import './Header.css'
import Logo from '/assets/logo.png'
import iconeSol from '/assets/sun.png'
import iconeLua from '/assets/moon.png'

export default function Header(props) {

    return (
        <header className={props.ehTemaEscuro ? "topo-modo-escuro" : "topo-modo-claro"}>
            <img className="logo" src={Logo} alt="logomarca" />
            <button onClick={props.alterarTema} className={props.ehTemaEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
                <img className='iconesBtn' src={props.ehTemaEscuro ? iconeSol : iconeLua} alt='icone' />
            </button>
        </header>
    )
}

Header.propTypes = {
    ehTemaEscuro: PropTypes.bool,
    alterarTema: PropTypes.func
}

