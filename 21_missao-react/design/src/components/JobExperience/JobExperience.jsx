import PropTypes from 'prop-types';
import './JobExperience.css';
import Card from "../Card/Card";

export default function JobExperience({ ehTemaEscuro }) {

    return (
        <section id="secaoExpDeTrab" className={ehTemaEscuro ? "secao-modo-escuro" : "secao-modo-claro"}>
            <div id="container-texto" className={ehTemaEscuro ? "container-texto-modo-escuro" : "container-texto-modo-claro"}>
                <h2>Experiências de Trabalho</h2>
                <p>
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital,
                    nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            <div className="conteiner-cards limitar-secao">
                <Card
                    ehTemaEscuro={ehTemaEscuro}
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card
                    ehTemaEscuro={ehTemaEscuro}
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                />
                <Card
                    ehTemaEscuro={ehTemaEscuro}
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </section>
    );
}

JobExperience.propTypes = {
    ehTemaEscuro: PropTypes.bool,
}
