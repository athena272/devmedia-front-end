import './BannerSection.css'
import PropTypes from 'prop-types';

export default function BannerSection(props) {

    return (
        <section id="secaoBanner">
            <div id="imagemDeFundo" className={props.ehTemaEscuro ? 'fundo-modo-escuro' : 'fundo-modo-claro'}></div>
            <div className="texto-secaoBanner">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}

BannerSection.propTypes = {
    ehTemaEscuro: PropTypes.bool,
}
