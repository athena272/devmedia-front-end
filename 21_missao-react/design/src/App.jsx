import { useState } from 'react';
import Header from './components/Header/Header';
import BannerSection from './components/BannerSection/BannerSection';
import JobExperience from './components/JobExperience/JobExperience';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {

  const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <main>
      <Header alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      <BannerSection ehTemaEscuro={ehTemaEscuro} />
      <JobExperience ehTemaEscuro={ehTemaEscuro} />
      <Footer ehTemaEscuro={ehTemaEscuro} />
    </main>
  );
}