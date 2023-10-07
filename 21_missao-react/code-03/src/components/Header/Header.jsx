import PropTypes from 'prop-types';
import "./Header.css";

const Header = ({ animalType, setState }) => {
    const changeState = () => {
        animalType === 'cachorro' ? setState('gato') : setState('cachorro')
    }

    return (
        <header>
            <h1>Projeto Props + useState</h1>
            <p>Clique no botão para mudar os componentes abaixo</p>
            <button onClick={changeState}>Mudar animal</button>
        </header>
    )
}

Header.propTypes = {
    animalType: PropTypes.string,
    setState: PropTypes.func
}

export default Header;