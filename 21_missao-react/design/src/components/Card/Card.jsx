import "./Card.css";
import PropTypes from 'prop-types';

export default function Card(props) {

    return (
        <div id="card" className={props.ehTemaEscuro ? 'card-modo-escuro' : 'card-modo-claro'}>
            <p className="primeiroParagrafo">{props.data}</p>
            <h4>{props.titulo}</h4>
            <p className="segundoParagrafo">{props.empresa}</p>
            <p>{props.paragrafo}</p>
        </div>
    );
}

Card.propTypes = {
    ehTemaEscuro: PropTypes.bool,
    data: PropTypes.string,
    titulo: PropTypes.string,
    empresa: PropTypes.string,
    paragrafo: PropTypes.string
}
