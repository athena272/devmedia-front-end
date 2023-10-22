import "./App.css";
import { useState } from "react";
import AnimalCard from './components/AnimalCard/AnimalCard'
import InfoCard from './components/InfoCard/InfoCard'
import Header from './components/Header/Header'

const App = () => {
    const [componentType, setComponentType] = useState('cachorro')

    console.log(componentType)

    return (
        <div className="App">
            <Header animalType={componentType} setState={setComponentType} />
            <AnimalCard animalType={componentType} />
            <InfoCard animalType={componentType} />
        </div>
    );
}

export default App;