import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types';

const PageStructure = ({ children }) => (
    <section>
        <Header />

        {children}

        <Footer />
    </section>
)


PageStructure.propTypes = {
    children: PropTypes.node
}

export default PageStructure;