import './GameItem.css';
import xboxLogo from '/assets/xbox.png';
import playstationLogo from '/assets/playstation.jpg';
import nintendoLogo from '/assets/nintendo.jpg';

const GameItem = ({ name, plataform }) => {

    <div className="card">
        <div>
            <img
                src={plataform === "xbox" ? xboxLogo : plataform === "playstation" ? playstationLogo : nintendoLogo}
                alt="logo"
            />
        </div>
        <div>
            <p>{name}</p>
        </div>
    </div>
}

export default GameItem;