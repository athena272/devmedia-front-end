import PropTypes from 'prop-types';
import './InfoCard.css';

const InfoCard = ({ animalType }) => {
    let nomeAnimalCachorro = "Cachorro";
    let nomeAnimalGato = "Gato";
    let informacaoCachorro = "É um mamífero carnívoro da família dos canídeos.";
    let informacaoGato = "É um mamífero carnívoro da família dos felídeos.";

    return (
        <div className="CardInformacao">
            <h3>Informação sobre o {animalType === "cachorro" ? nomeAnimalCachorro : nomeAnimalGato}</h3>
            <p>{animalType === "cachorro" ? informacaoCachorro : informacaoGato}</p>
        </div>
    );
}

InfoCard.propTypes = {
    animalType: PropTypes.string,
}

export default InfoCard;