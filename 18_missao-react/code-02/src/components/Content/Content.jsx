import CoverSection from "../CoverSection/CoverSection";
import AboutSection from "../AboutSection/AboutSection";
import ProductSection from "../ProductSection/ProductSection";
import ContactSection from "../ContactSection/ContactSection";

function Content() {
    return (
        <main>
        <CoverSection />
        <ProductSection />
        <AboutSection />
        <ContactSection />
        </main>
    );
}

export default Content;