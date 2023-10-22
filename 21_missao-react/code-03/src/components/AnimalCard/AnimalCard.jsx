import PropTypes from 'prop-types';
import DogImage from '/public/assets/cachorro.jpg';
import CatImage from '/public/assets/gato.jpg';

const AnimalCard = ({ animalType }) => (
    <div id="card">
        <img src={animalType === "cachorro" ? DogImage : CatImage} alt="animal" />
    </div>
)

AnimalCard.propTypes = {
    animalType: PropTypes.string,
}

export default AnimalCard;
