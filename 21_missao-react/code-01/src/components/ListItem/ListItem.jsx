import './ListItem.css';
import PropTypes from 'prop-types';

const ListItem = ({ signo, imagem, dataInicio, dataFim }) => (
    <div className="boxSigno">
        <div className="nomeSigno">
            {signo}
        </div>

        <img className="imagemSigno" src={imagem} alt={signo} />

        <div className="periodoNascimento">
            {dataInicio} - {dataFim}
        </div>
    </div>
)

ListItem.propTypes = {
    signo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    dataInicio: PropTypes.string.isRequired,
    dataFim: PropTypes.string.isRequired
}

export default ListItem;